declare function SideRays(props: {
  speed?: number
  rayColor1?: string
  rayColor2?: string
  intensity?: number
  spread?: number
  origin?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  tilt?: number
  saturation?: number
  blend?: number
  falloff?: number
  opacity?: number
  className?: string
}): JSX.Element

export default SideRays
