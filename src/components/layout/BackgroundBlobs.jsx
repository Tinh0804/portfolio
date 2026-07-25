import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const BackgroundBlobs = () => {
  const particlesInit = useCallback(async (engine) => {
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                  color: "#38bdf8"
                }
              },
              push: {
                quantity: 3,
              },
            },
          },
          particles: {
            color: {
              value: ["#38bdf8", "#818cf8", "#4f46e5"],
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.6,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              }
            },
          },
          detectRetina: false,
        }}
      />
      
      {/* Static Ambient Lights to blend the dark theme */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px] transform-gpu"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px] transform-gpu"></div>
    </div>
  );
};

export default BackgroundBlobs;
