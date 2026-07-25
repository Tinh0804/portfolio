import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function MacbookModel({ scrollYProgress, ...props }) {
  const { nodes, materials } = useGLTF('/assets/models/macbook.glb')
  const lidRef = useRef()

  useFrame(() => {
    if (lidRef.current && scrollYProgress) {
      // scroll is between 0 and 1
      const scroll = scrollYProgress.get();
      // Original open rotation: -1.925
      // Fully closed rotation: ~ 0
      // We make it close faster as user scrolls down
      const targetRotation = THREE.MathUtils.lerp(-1.925, 0, Math.min(scroll * 2.5, 1));
      
      // Smoothly animate the lid towards the target rotation using lerp
      lidRef.current.rotation.x = THREE.MathUtils.lerp(lidRef.current.rotation.x, targetRotation, 0.1);
    }
  })

  return (
    <group {...props} dispose={null}>
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
    </group>
  )
}

useGLTF.preload('/assets/models/macbook.glb')
