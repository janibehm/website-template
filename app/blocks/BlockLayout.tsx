import {type ReactNode} from 'react'

type BlockWrapperProps = {
  children: ReactNode
  className?: string
  background?: 'default' | 'dark' | 'light'
}

export function BlockWrapper({children, className = '', background = 'default'}: BlockWrapperProps) {
  const bgClasses = {
    default: 'bg-white text-neutral',
    dark: 'bg-neutral text-white',
    light: 'bg-white text-neutral',
  }

  return (
    <section className={`py-8 md:py-24 w-full overflow-hidden ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  )
}

type BlockContainerProps = {
  children: ReactNode
  className?: string
}

export function BlockContainer({children, className = ''}: BlockContainerProps) {
  return (
    <div className={`section-container ${className}`}>
      {children}
    </div>
  )
}
