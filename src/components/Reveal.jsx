import { useEffect, useRef, useState } from 'react'

// Small entrance fade. Under prefers-reduced-motion the CSS shows content
// immediately, so the observer only matters for users who accept motion.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (visible || !node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Tag ref={ref} className={`${className} reveal${visible ? ' is-visible' : ''}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
