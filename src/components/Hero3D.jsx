import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ACCENTS, getActiveAccent } from '../data/accents'

/**
 * Hero3D — animated 3D background (Three.js)
 * - Floating wireframe geometry (icosahedron, torus knot, octahedron)
 * - Drifting particle field in the active accent palette
 * - Mouse-parallax camera movement
 * - Accent-aware: recolors lights, wireframes & particles live on accent change
 * - Pauses when tab is hidden; respects prefers-reduced-motion
 * - Fully cleans up on unmount (no memory leaks)
 */
export default function Hero3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ---------- Scene basics ----------
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0a14, 0.055)

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 16)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // ---------- Accent-aware colors ----------
    const A = (ACCENTS[getActiveAccent()] || ACCENTS.violet).three

    // ---------- Lights ----------
    const ambient = new THREE.AmbientLight(A.lights[0], 0.55)
    scene.add(ambient)

    const point1 = new THREE.PointLight(A.lights[1], 40, 60)
    point1.position.set(8, 6, 8)
    scene.add(point1)

    const point2 = new THREE.PointLight(A.lights[2], 30, 60)
    point2.position.set(-10, -4, 6)
    scene.add(point2)

    // ---------- Floating wireframe shapes ----------
    const shapes = []
    const geos = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.TorusKnotGeometry(0.9, 0.28, 90, 12),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TorusGeometry(1.1, 0.32, 14, 42),
      new THREE.DodecahedronGeometry(1.0, 0),
    ]
    const palette = A.palette

    geos.forEach((geo, i) => {
      const colorIndex = i % palette.length
      const mat = new THREE.MeshStandardMaterial({
        color: palette[colorIndex],
        wireframe: true,
        transparent: true,
        opacity: 0.38,
        emissive: palette[colorIndex],
        emissiveIntensity: 0.35,
      })
      mat.userData.colorIndex = colorIndex // used by accent recoloring
      const mesh = new THREE.Mesh(geo, mat)

      // Spread across the scene — more on the right so text stays readable
      mesh.position.set(
        (Math.random() - 0.35) * 22,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.6) * 10 - 2
      )
      mesh.userData.rotSpeed = {
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.008,
      }
      mesh.userData.floatSpeed = 0.4 + Math.random() * 0.6
      mesh.userData.floatOffset = Math.random() * Math.PI * 2
      mesh.userData.baseY = mesh.position.y
      scene.add(mesh)
      shapes.push(mesh)
    })

    // Live recolor when the user switches accent (ThemeSwitcher event)
    const applyAccent = (key) => {
      const t = (ACCENTS[key] || ACCENTS.violet).three
      ambient.color.set(t.lights[0])
      point1.color.set(t.lights[1])
      point2.color.set(t.lights[2])
      shapes.forEach((s) => {
        const c = t.palette[s.material.userData.colorIndex]
        s.material.color.set(c)
        s.material.emissive.set(c)
      })
      pMat.color.set(t.particle)
    }
    const onAccentChange = (e) => applyAccent(e.detail)
    window.addEventListener('accentchange', onAccentChange)

    // ---------- Particle field ----------
    const COUNT = 900
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 38
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18 - 2
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pMat = new THREE.PointsMaterial({
      color: A.particle,
      size: 0.055,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ---------- Mouse parallax ----------
    let mouseX = 0
    let mouseY = 0
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    // ---------- Resize ----------
    const onResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ---------- Animate loop ----------
    const clock = new THREE.Clock()
    let rafId = null
    let running = true

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (!running) return
      const t = clock.getElapsedTime()

      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeed.x
        mesh.rotation.y += mesh.userData.rotSpeed.y
        mesh.position.y =
          mesh.userData.baseY + Math.sin(t * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.7
      })

      particles.rotation.y = t * 0.014
      particles.rotation.x = Math.sin(t * 0.07) * 0.03

      // Parallax easing
      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03
      camera.position.y += (-mouseY * 0.9 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    if (reducedMotion) {
      renderer.render(scene, camera) // single static frame
    } else {
      animate()
    }

    // Pause when tab hidden (battery friendly)
    const onVisibility = () => {
      running = !document.hidden
      if (running) clock.getDelta()
    }
    document.addEventListener('visibilitychange', onVisibility)

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('accentchange', onAccentChange)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      geos.forEach((g) => g.dispose())
      shapes.forEach((s) => s.material.dispose())
      pGeo.dispose()
      pMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-canvas" ref={mountRef} aria-hidden="true" />
}
