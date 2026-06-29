import type { HTMLAttributes, ReactNode } from 'react'

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

declare function SpotlightCard(props: SpotlightCardProps): JSX.Element

export default SpotlightCard
