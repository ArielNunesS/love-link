import React from "react";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const updateHeight = () => {
            if(canvasRef.current) {
                canvasRef.current.style.height = `${document.body.scrollHeight}px`;
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight)

        const canvas = canvasRef.current
        if(!canvas) return

        const ctx = canvas.getContext("2d")
        if(!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const curves: Curve[] = []
        for(let i = 0; i < 8; i++){
            curves.push(new Curve(canvas, i))
        }

        let animationFrameId: number
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            curves.forEach((curve) => {
                curve.draw(ctx)
                curve.update()
            })

            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return () => {
            window.addEventListener("resize", updateHeight);
            window.removeEventListener("resize", resizeCanvas)
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef}
    className="absolute top-0 left-0 w-full inset-0 z-1" style={{ opacity: 0.6 }} /> 
}

    class Curve {
        private points: {x: number; y: number, originalY: number } []
        private speed: number
        private color: string
        private lineWidth: number
        private amplitude: number
        private canvasHeight: number

        constructor(canvas: HTMLCanvasElement, index: number) {
            this.canvasHeight = canvas.height
            this.points = []

            // Configurações baseadas no índice para criar variedade
            this.speed = 0.3 + Math.random() * 0.3
            this.amplitude = 20 + Math.random() * 50

            // Cores em tons de rosa com diferentes opacidades
            const opacity = 0.06 + Math.random() * 0.2
            this.color = `rgba(244, 114, 182, ${opacity})`

             // Espessura da linha
            this.lineWidth = 1 + Math.random() * 1.5
            
            // Posição vertical da curva
            const baseY = (index + 1) * (canvas.height / 9)

            // Criar pontos ao longo da curva
            const segments = 2
            for(let i = 0; i <= segments; i++) {    
                const x = (canvas.width * i) / segments
                const y = baseY + Math.sin(i / 2) * this.amplitude
                this.points.push({ x, y, originalY: y })
            }
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath()
            ctx.moveTo(this.points[0].x, this.points[0].y)

            // Desenhar curva suave através dos pontos
            for(let i = 1; i < this.points.length - 2; i++) {
                const xc = this.points[i].x + this.points[i + 1].x / 2
                const yc = this.points[i].y + this.points[i + 1].y / 2

                ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc)
            }

            const lastPoint = this.points[this.points.length - 1]
            const secondLastPoint = this.points[this.points.length - 2]
            
            ctx.quadraticCurveTo(secondLastPoint.x, secondLastPoint.y, lastPoint.x, lastPoint.y)

            ctx.strokeStyle = this.color
            ctx.lineWidth = this.lineWidth
            ctx.stroke()
        }

        update() {
            for(let i = 0; i < this.points.length; i++) {
                const point = this.points[i]
                point.y = point.originalY + Math.sin(Date.now() * 0.001 * this.speed + i * 0.5) * this.amplitude * 1
            }
        }
    }