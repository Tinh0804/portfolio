import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import MacbookCoreStackIcons from './MacbookCoreStackIcons'

export default function MacbookModel({ scrollYProgress, ...props }) {
  const { nodes, materials } = useGLTF('/assets/models/macbook.glb')
  const lidRef = useRef()
  const { viewport } = useThree()

  // Dynamic responsive scale based on 3D viewport width
  // Ensures model and halo stack icons fit comfortably on any screen:
  // Mobile (< 640px) -> ~0.72
  // Tablet (640px - 1024px) -> ~0.84
  // Desktop/Mac (> 1024px) -> 0.95
  const dynamicScale = Math.min(0.95, Math.max(0.68, (viewport.width / 4.8) * 0.95))
  const dynamicPosY = dynamicScale < 0.78 ? -0.85 : (dynamicScale < 0.88 ? -0.95 : -1.05)

  useFrame(() => {
    if (lidRef.current && scrollYProgress) {
      const scroll = scrollYProgress.get();
      const targetRotation = THREE.MathUtils.lerp(-1.925, 0, Math.min(scroll * 2.5, 1));
      lidRef.current.rotation.x = THREE.MathUtils.lerp(lidRef.current.rotation.x, targetRotation, 0.1);
    }
  })

  return (
    <group 
      {...props} 
      position={[0, dynamicPosY, 0]} 
      scale={dynamicScale} 
      dispose={null}
    >
      {/* 1. LID (Nắp máy tính) */}
      <group ref={lidRef} position={[0, 0.1, -1.012]} rotation={[-1.925, 0, 0]}>
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Material.008']} />
        
        {/* Original screen texture */}
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.017']} position={[-0.033, 0.616, 1.019]} rotation={[-Math.PI, 0, -Math.PI]} scale={[32.945, 32.945, 33.488]} />
      </group>
      
      {/* 2. BASE (Bàn phím & Thân máy) */}
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.011']} position={[-1.454, 0.086, -0.566]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.Object_28.geometry} material={materials['Material.010']} position={[-1.485, 0.086, -0.761]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-0.005, 0.005, 0.005]} />
      
      {/* 3. CORE STACK 3D HOLOGRAPHIC FLOATING ICONS */}
      <MacbookCoreStackIcons scrollYProgress={scrollYProgress} />
    </group>
  )
}

useGLTF.preload('/assets/models/macbook.glb')
