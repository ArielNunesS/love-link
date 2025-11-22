"use client";

import React, { useMemo } from "react";

const generateStarShadows = (count: number, opacity: number) => {
  let shadows = "";
  for (let i = 0; i < count; i++) {
    shadows += `${Math.random() * 4000}px ${Math.random() * 4000}px rgba(255,255,255,${opacity}),`;
  }
  return shadows.slice(0, -1);
};

export default function StarryBackground() {
  const starShadows = useMemo(
    () => ({
      stars_sm: generateStarShadows(700, 0.8),
      stars_md: generateStarShadows(200, 0.9),
      stars_lg: generateStarShadows(50, 1),
    }),
    []
  );

  return (
    <>
      <style jsx global>{`
        /* fundo e estrelas base (mantive seu original) */
        @keyframes star-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-2000px, 1000px); }
        }
        @keyframes star-blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .star-field-full {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 1;
          background: #000;
        }
        .star-field-full::before {
          content: "";
          position: absolute;
          top: -1000px;
          left: -1000px;
          width: 2px;
          height: 2px;
          box-shadow: ${starShadows.stars_sm};
          animation: star-move 600s linear infinite, star-blink 3s ease-in-out infinite alternate;
        }
        .star-field-full::after {
          content: "";
          position: absolute;
          top: -1000px;
          left: -1000px;
          width: 3px;
          height: 3px;
          box-shadow: ${starShadows.stars_md};
          animation: star-move 400s linear infinite reverse, star-blink 4s ease-in-out infinite alternate;
        }

        /* ---------- Meteoros robustos ---------- */
        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translate(var(--sx), var(--sy)) rotate(var(--angle)) translateX(0);
          }
          7% { opacity: 1; } /* aparece rápido */
          100% {
            opacity: 0;
            transform: translate(var(--sx), var(--sy)) rotate(var(--angle)) translateX(var(--travel));
          }
        }

        .shooting-stars {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        /* cada meteoro é um elemento longo (rastro + ponta) */
        .shooting-star {
          --length: 1px;     /* comprimento do rastro (ajustável por estrela) */
          --thickness: 2px;   /* espessura */
          --angle: -30deg;    /* ângulo de queda */
          --sx: 1vw;         /* start X (vai ser sobrescrito inline) */
          --sy: 1vh;         /* start Y (vai ser sobrescrito inline) */
          --travel: -150vw;    /* quanto ele percorre ao longo do eixo X local (positivo/negativo conforme rotação) */
          --duration: 2.5s;
          --delay: 1s;

          position: absolute;
          left: 0;
          top: 0;
          width: var(--length);
          height: var(--thickness);
          transform-origin: left center;
          background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0.05));
          filter: blur(0.5px);
          border-radius: 50px;
          box-shadow: 0 0 10px 1px rgba(255,255,255,0.65);
          opacity: 0;
          will-change: transform, opacity;
          transform: translate(var(--sx), var(--sy)) rotate(var(--angle)) translateX(0);
          animation: shoot var(--duration) linear var(--delay) infinite;
        }

      `}</style>

      <div className="star-field-full" />
      <div className="shooting-stars">
        {Array.from({ length: 5 }).map((_, i) => {
          // variação por meteoro
          const startX = Math.random() * 50; // % da viewport (0..100)
          const startY = Math.random() * 5;  // limitar ao topo para parecer cair
          const angle = -120 - Math.random() * 25; // -25..-50 deg
          const length = 0.5 + Math.random() * 2; // vw
          const travel = -70 - Math.random() * 30; // vw (quanto vai se deslocar)
          const duration = 1.2 + Math.random() * 2.2; // s
          const delay = Math.random() * 8; // s

          return (
            <div
              key={i}
              className="shooting-star"
              style={
                {
                  // usamos unidades relativas (vw/vh) para consistência com viewport
                  "--sx": `${startX}vw`,
                  "--sy": `${startY}vh`,
                  "--angle": `${angle}deg`,
                  "--length": `${length}vw`,
                  "--travel": `${travel}vw`,
                  "--duration": `${duration}s`,
                  "--delay": `${delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>

    </>
  );
}
