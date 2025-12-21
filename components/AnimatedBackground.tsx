'use client'

import { useEffect, useRef, useState } from 'react'
import { backgroundImages } from '@/data/backgroundImages'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [currentBgImage, setCurrentBgImage] = useState<HTMLImageElement | null>(null)
  const [bgImageIndex, setBgImageIndex] = useState(0)
  const imagesRef = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    // Load background images
    const loadImages = async () => {
      if (backgroundImages.length === 0) {
        return // No images to load
      }

      const loadedImages: HTMLImageElement[] = []
      
      for (let i = 0; i < backgroundImages.length; i++) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img)
            resolve(null)
          }
          img.onerror = () => {
            // If image fails to load, skip it silently
            resolve(null)
          }
          img.src = backgroundImages[i]
        })
      }
      
      imagesRef.current = loadedImages
      if (loadedImages.length > 0) {
        setCurrentBgImage(loadedImages[0])
      }
    }

    loadImages()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    function animate() {
      if (!ctx || !canvas) return

      // Draw dark background
      ctx.fillStyle = '#1a1a1a' // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background image if available
      if (currentBgImage && currentBgImage.complete && currentBgImage.naturalWidth > 0) {
        // Draw background image with higher opacity for better visibility
        ctx.save()
        ctx.globalAlpha = 1.0 // Fully visible
        ctx.drawImage(currentBgImage, 0, 0, canvas.width, canvas.height)
        ctx.restore()
        
        // Add very minimal dark overlay for slight text readability (almost transparent)
        const overlayGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        overlayGradient.addColorStop(0, 'rgba(26, 26, 26, 0.05)')
        overlayGradient.addColorStop(0.5, 'rgba(26, 26, 26, 0.08)')
        overlayGradient.addColorStop(1, 'rgba(26, 26, 26, 0.05)')
        ctx.fillStyle = overlayGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        // If no image loaded, show a subtle gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, '#1a1a1a')
        gradient.addColorStop(0.5, '#2a2a2a')
        gradient.addColorStop(1, '#1a1a1a')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cycle through background images every 5 seconds
    const imageInterval = setInterval(() => {
      if (imagesRef.current.length > 0) {
        setBgImageIndex((prev) => {
          const next = (prev + 1) % imagesRef.current.length
          setCurrentBgImage(imagesRef.current[next])
          return next
        })
      }
    }, 5000)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(imageInterval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [currentBgImage])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-gray-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#1a1a1a' }}
      />
      {/* Very minimal overlay - almost transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-transparent to-black/3 pointer-events-none" />
    </div>
  )
}
