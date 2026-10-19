"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const transitionRef = useRef<ViewTransition | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => transitionRef.current?.skipTransition()
  }, [])

  if (!mounted) {
    return <div className="ml-auto w-10 h-10"></div>
  }

  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark"
    transitionRef.current?.skipTransition()

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme)
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme))
    })
    transitionRef.current = transition

    // A new click can skip the previous swipe before its snapshots are ready.
    void transition.ready.catch(() => {})
    void transition.finished.catch(() => {}).finally(() => {
      if (transitionRef.current === transition) transitionRef.current = null
    })
  }

  return (
    <div className="pointer-events-auto ml-auto">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        className="cursor-pointer rounded-full w-10 h-10 bg-background/80 backdrop-blur border shadow-sm hover:bg-muted"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}
