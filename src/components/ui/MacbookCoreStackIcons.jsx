import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const CORE_STACK_ICONS = [
  {
    id: 'docker',
    name: 'Docker',
    tag: 'CONTAINER',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    glowColor: '#0db7ed',
    targetPos: [-1.30, 1.48, -0.50],
    phase: 0.0,
    stagger: 0.2,
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    tag: 'BACKEND',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    glowColor: '#6db33f',
    targetPos: [-0.95, 1.86, -0.68],
    phase: 1.2,
    stagger: 0.1,
  },
  {
    id: 'java',
    name: 'Java',
    tag: 'CORE LANG',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    glowColor: '#f89820',
    targetPos: [-0.36, 2.06, -0.82],
    phase: 2.4,
    stagger: 0.0,
  },
  {
    id: 'aws',
    name: 'AWS',
    tag: 'CLOUD',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    glowColor: '#ff9900',
    targetPos: [0.36, 2.06, -0.82],
    phase: 3.6,
    stagger: 0.0,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    tag: 'DATABASE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    glowColor: '#38bdf8',
    targetPos: [0.95, 1.86, -0.68],
    phase: 4.8,
    stagger: 0.1,
  },
  {
    id: 'react',
    name: 'React',
    tag: 'FRONTEND',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    glowColor: '#61dafb',
    targetPos: [1.30, 1.48, -0.50],
    phase: 5.9,
    stagger: 0.2,
  },
];

const EMITTER_POS = [0, 0.42, -0.8];

export default function MacbookCoreStackIcons({ scrollYProgress }) {
  // Laser tethers and canopy geometry connecting emitter to each node
  const laserLinesRef = useRef(null);
  const canopyRef = useRef(null);
  const ringsGroupRef = useRef(null);
  const outerRingRef = useRef(null);
  const innerRingRef = useRef(null);
  const coneRef = useRef(null);

  // Smooth scroll tracking ref for butter-smooth folding physics
  const smoothCloseRef = useRef(0);

  // Store individual icon nodes refs
  const nodesRefs = useRef(CORE_STACK_ICONS.map(() => ({
    group: null,
    dom: null,
    currentPos: [0, 0, 0],
  })));

  // Setup buffer geometry for 6 laser lines (6 lines * 2 points * 3 coords = 36 values)
  const laserGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(CORE_STACK_ICONS.length * 2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  // Setup buffer geometry for 5 triangular canopy facets spanning emitter to all 6 nodes
  // 5 triangles * 3 vertices * 3 coords = 45 floats
  const canopyGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(5 * 3 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();
    const scroll = scrollYProgress ? scrollYProgress.get() : 0;
    
    // Smoothly interpolate the folding factor so folding is buttery smooth and never jerks
    // Initiates early (scroll * 2.8) so the hologram powers down cleanly into emitter before lid closes
    const targetClose = THREE.MathUtils.clamp(scroll * 2.8, 0, 1);
    smoothCloseRef.current = THREE.MathUtils.damp(smoothCloseRef.current, targetClose, 12, delta);
    const rawClose = smoothCloseRef.current;

    // 1. Rotate Sci-Fi Hologram Rings
    if (ringsGroupRef.current) {
      const ringScale = Math.max(0, 1 - rawClose * 1.3);
      ringsGroupRef.current.scale.set(ringScale, ringScale, ringScale);
      
      if (outerRingRef.current) {
        outerRingRef.current.rotation.z = time * 0.4;
      }
      if (innerRingRef.current) {
        innerRingRef.current.rotation.z = -time * 0.6;
      }
    }

    // 2. Holographic light cone fade
    if (coneRef.current) {
      const coneScale = Math.max(0, 1 - rawClose * 1.4);
      coneRef.current.scale.set(coneScale, coneScale, coneScale);
      if (coneRef.current.material) {
        coneRef.current.material.opacity = 0.05 * Math.max(0, 1 - rawClose * 1.5);
      }
    }

    // 3. Update Laser Beam Geometry Buffer
    let laserPositions = null;
    if (laserLinesRef.current) {
      laserPositions = laserLinesRef.current.geometry.attributes.position.array;
    }

    // 4. Update each Tech Node position, scale and opacity
    CORE_STACK_ICONS.forEach((icon, i) => {
      const node = nodesRefs.current[i];
      if (!node) return;

      // Staggered magnetic suction: outer chips pull in first
      const stagger = icon.stagger;
      const progress = THREE.MathUtils.clamp((rawClose - stagger * 0.25) / (1 - stagger * 0.25), 0, 1);
      // Accelerated cubic-in collapse curve
      const easeT = Math.pow(progress, 2.2);

      // Micro-harmonic float oscillation when open
      const floatY = (1 - progress) * (Math.sin(time * 1.8 + icon.phase) * 0.04);
      const floatX = (1 - progress) * (Math.cos(time * 1.3 + icon.phase) * 0.025);
      const floatZ = (1 - progress) * (Math.sin(time * 1.5 + icon.phase) * 0.025);

      const targetX = icon.targetPos[0] + floatX;
      const targetY = icon.targetPos[1] + floatY;
      const targetZ = icon.targetPos[2] + floatZ;

      // Interpolate towards screen emitter with accelerated suction
      const curX = THREE.MathUtils.lerp(targetX, EMITTER_POS[0], easeT);
      const curY = THREE.MathUtils.lerp(targetY, EMITTER_POS[1], easeT);
      const curZ = THREE.MathUtils.lerp(targetZ, EMITTER_POS[2], easeT);

      node.currentPos = [curX, curY, curZ];

      if (node.group) {
        node.group.position.set(curX, curY, curZ);
      }

      // Smooth accelerated scale down and fade out
      const scale = Math.max(0, Math.pow(1 - progress, 1.6));
      const opacity = Math.max(0, 1 - progress * 2.0);

      if (node.dom) {
        if (progress > 0.001) {
          node.dom.style.transform = `scale(${scale})`;
          node.dom.style.opacity = `${opacity}`;
          node.dom.style.pointerEvents = progress > 0.15 ? 'none' : 'auto';
        } else if (node.dom.style.transform !== '') {
          node.dom.style.transform = '';
          node.dom.style.opacity = '';
          node.dom.style.pointerEvents = 'auto';
        }
      }

      // Update laser endpoint
      if (laserPositions) {
        // Point 0: Emitter
        laserPositions[i * 6 + 0] = EMITTER_POS[0];
        laserPositions[i * 6 + 1] = EMITTER_POS[1];
        laserPositions[i * 6 + 2] = EMITTER_POS[2];
        // Point 1: Node
        laserPositions[i * 6 + 3] = curX;
        laserPositions[i * 6 + 4] = curY;
        laserPositions[i * 6 + 5] = curZ;
      }
    });

    if (laserLinesRef.current) {
      laserLinesRef.current.geometry.attributes.position.needsUpdate = true;
      if (laserLinesRef.current.material) {
        laserLinesRef.current.material.opacity = 0.35 * Math.max(0, 1 - rawClose * 1.4);
      }
    }

    // 5. Update Dynamic Hologram Light Canopy (5 contiguous triangular facets)
    if (canopyRef.current) {
      const canopyPos = canopyRef.current.geometry.attributes.position.array;
      for (let j = 0; j < 5; j++) {
        const p1 = nodesRefs.current[j].currentPos;
        const p2 = nodesRefs.current[j + 1].currentPos;
        const offset = j * 9;
        // Vertex 0: Emitter
        canopyPos[offset + 0] = EMITTER_POS[0];
        canopyPos[offset + 1] = EMITTER_POS[1];
        canopyPos[offset + 2] = EMITTER_POS[2];
        // Vertex 1: Current Node j
        canopyPos[offset + 3] = p1[0];
        canopyPos[offset + 4] = p1[1];
        canopyPos[offset + 5] = p1[2];
        // Vertex 2: Next Node j+1
        canopyPos[offset + 6] = p2[0];
        canopyPos[offset + 7] = p2[1];
        canopyPos[offset + 8] = p2[2];
      }
      canopyRef.current.geometry.attributes.position.needsUpdate = true;
      if (canopyRef.current.material) {
        canopyRef.current.material.opacity = 0.12 * Math.max(0, 1 - rawClose * 1.4);
      }
    }
  });

  return (
    <group name="core-stack-3d-hologram">
      {/* 1. Dynamic Holographic Light Canopy (Hugs all 6 icons from Docker to React seamlessly) */}
      <mesh ref={canopyRef} geometry={canopyGeo}>
        <meshBasicMaterial 
          color="#38bdf8" 
          transparent 
          opacity={0.12} 
          side={THREE.DoubleSide} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </mesh>

      {/* 2. Ambient Volumetric Light Cone Beam embracing the canopy */}
      <mesh ref={coneRef} position={[0, 1.25, -0.72]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.65, 0.35, 1.65, 32, 1, true]} />
        <meshBasicMaterial 
          color="#38bdf8" 
          transparent 
          opacity={0.05} 
          side={THREE.DoubleSide} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </mesh>

      {/* 3. Rotating Holographic Gyroscope Orbit Rings passing through the icon arc */}
      <group ref={ringsGroupRef} position={[0, 1.65, -0.68]} rotation={[Math.PI / 2.7, 0, 0]}>
        {/* Outer Orbital Ring */}
        <mesh ref={outerRingRef}>
          <ringGeometry args={[1.36, 1.375, 64]} />
          <meshBasicMaterial 
            color="#38bdf8" 
            transparent 
            opacity={0.25} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </mesh>
        
        {/* Inner Gyroscope Ring */}
        <mesh ref={innerRingRef}>
          <ringGeometry args={[0.96, 0.972, 48]} />
          <meshBasicMaterial 
            color="#818cf8" 
            transparent 
            opacity={0.2} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* 4. Dynamic Laser Tethers connecting Emitter to each Node */}
      <lineSegments ref={laserLinesRef} geometry={laserGeo}>
        <lineBasicMaterial 
          color="#38bdf8" 
          transparent 
          opacity={0.35} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </lineSegments>

      {/* 5. Futuristic Holographic Glass Pods with Radiant Brand Backlight */}
      {CORE_STACK_ICONS.map((icon, index) => (
        <group 
          key={icon.id} 
          ref={(el) => {
            if (nodesRefs.current[index]) nodesRefs.current[index].group = el;
          }} 
          position={icon.targetPos}
        >
          {/* Micro 3D Light Point in WebGL */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.018, 12, 12]} />
            <meshBasicMaterial color={icon.glowColor} transparent opacity={0.85} />
          </mesh>

          {/* Futuristic Holographic Glass Pod */}
          <Html center distanceFactor={5.0} className="select-none pointer-events-none transform-gpu will-change-transform">
            <div 
              ref={(el) => {
                if (nodesRefs.current[index]) nodesRefs.current[index].dom = el;
              }}
              className="relative flex flex-col items-center justify-center group pointer-events-auto transition-transform duration-75 cursor-pointer transform-gpu [backface-visibility:hidden]"
            >
              {/* Soft Ambient Brand Aura */}
              <div 
                className="absolute -inset-1 rounded-2xl blur-md opacity-40 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: icon.glowColor }}
              />

              {/* Sleek Minimalist Hologram Glass Pod (No 4-corner notches) */}
              <div 
                className="relative w-9 h-9 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center bg-slate-950/70 backdrop-blur-xl transition-all duration-300 group-hover:scale-115"
                style={{
                  background: `radial-gradient(circle at center, ${icon.glowColor}25 0%, rgba(10, 15, 30, 0.75) 85%)`,
                  border: `1px solid ${icon.glowColor}60`,
                  boxShadow: `0 4px 16px -2px rgba(0,0,0,0.8), 0 0 12px ${icon.glowColor}40, inset 0 0 8px ${icon.glowColor}20`,
                }}
              >
                {/* Official Tech Icon */}
                <img 
                  src={icon.icon} 
                  alt={icon.name} 
                  className="w-5 h-5 object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                />
              </div>

              {/* Sleek Floating Pill Tag with Brand LED Indicator */}
              <div className="mt-1.5 px-2 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/10 group-hover:border-white/25 flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all">
                <span 
                  className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" 
                  style={{ backgroundColor: icon.glowColor, boxShadow: `0 0 6px ${icon.glowColor}` }} 
                />
                <span className="text-[7.5px] font-mono tracking-widest text-slate-200/90 group-hover:text-white uppercase font-medium whitespace-nowrap">
                  {icon.name}
                </span>
              </div>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
