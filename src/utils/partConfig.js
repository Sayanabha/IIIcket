// src/utils/partConfig.js

export const ROCKET_PARTS = [
  {
    id: 'nose-cone',
    label: 'Nose Cone',
    description: 'Aerodynamic tip that reduces drag during ascent',
    // Direction this part spins/flies on scroll disassembly
    orbitAxis: [0, 1, 0],          // spin around Y
    separationDir: [0, 3.5, 0],    // floats upward
    rotationAmount: Math.PI * 1.5, // how much it rotates
    color: '#e8e8e8',
    labelOffset: [2.2, 1.2, 0],    // where the label floats
  },
  {
    id: 'payload-fairing',
    label: 'Payload Fairing',
    description: 'Protective shell housing the satellite payload',
    orbitAxis: [1, 0.5, 0],
    separationDir: [2.5, 2, 0],
    rotationAmount: Math.PI * 1.2,
    color: '#d0d0d0',
    labelOffset: [2.5, 0.6, 0],
  },
  {
    id: 'upper-stage',
    label: 'Upper Stage',
    description: 'Second stage engine providing orbital insertion burn',
    orbitAxis: [-1, 0.3, 0.5],
    separationDir: [-2.5, 1.2, 0.5],
    rotationAmount: Math.PI,
    color: '#c8c8c8',
    labelOffset: [-2.8, 0, 0],
  },
  {
    id: 'fuel-tank',
    label: 'Fuel Tank',
    description: 'RP-1 kerosene fuel storage for first stage engines',
    orbitAxis: [0.5, 0, 1],
    separationDir: [1.8, -0.5, 1.5],
    rotationAmount: Math.PI * 0.8,
    color: '#b8b8b8',
    labelOffset: [2.8, -0.8, 0],
  },
  {
    id: 'booster',
    label: 'Booster',
    description: 'First stage providing primary launch thrust',
    orbitAxis: [-0.5, 0, -1],
    separationDir: [-1.8, -1.5, -1],
    rotationAmount: Math.PI * 1.3,
    color: '#a8a8a8',
    labelOffset: [-2.8, -1.5, 0],
  },
  {
    id: 'engine-nozzle',
    label: 'Engine Nozzle',
    description: 'Merlin engine nozzle cluster — 9 engines, 1.7M lbs thrust',
    orbitAxis: [0, -1, 0.3],
    separationDir: [0, -3.5, 0.5],
    rotationAmount: Math.PI * 2,
    color: '#888888',
    labelOffset: [2.2, -2.5, 0],
  },
]

// Total scroll height multiplier
export const SCROLL_HEIGHT_FACTOR = 5

// At what scroll progress (0–1) disassembly completes
export const DISASSEMBLY_END = 0.85