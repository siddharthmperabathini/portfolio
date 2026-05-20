"use client"

import { type MotionProps, motion } from "framer-motion"
import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSpanProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedSpan = ({ children, delay = 0, className, ...props }: AnimatedSpanProps) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    initial={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    {...props}
  >
    {children}
  </motion.div>
)

interface TypingAnimationProps extends MotionProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:")
  }

  const MotionComponent = motion(Component);

  const [displayedText, setDisplayedText] = useState<string>("")
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) {
      return
    }

    let i = 0
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [children, duration, started])

  return (
    <MotionComponent
      className={cn("text-sm font-normal tracking-tight", className)}
      ref={elementRef as React.Ref<HTMLElement>}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  )
}

interface TerminalProps {
  children: React.ReactNode
  className?: string
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-zinc-800 bg-black text-white shadow-2xl overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-x-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="flex flex-row gap-x-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-xs font-medium text-zinc-500 select-none">
          bash
        </div>
      </div>
      <pre className="p-4 overflow-auto">
        <code className="grid gap-y-1">{children}</code>
      </pre>
    </div>
  )
}
