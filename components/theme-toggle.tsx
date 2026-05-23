"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [stage, setStage] = useState<"idle" | "covering" | "revealing">("idle")
  const [activeIcon, setActiveIcon] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
    if (theme) {
      setActiveIcon(theme as "light" | "dark")
    }
  }, [theme])

  if (!mounted) {
    return <div className="w-10 h-10 fixed top-6 right-6 z-50"></div>
  }

  const handleToggle = () => {
    if (stage !== "idle") return
    
    // Trigger the icon (font) transition immediately upon click
    const nextTheme = theme === "light" ? "dark" : "light"
    setActiveIcon(nextTheme)
    
    setStage("covering")
    
    // Slide down duration is 400ms
    setTimeout(() => {
      // Toggle the theme when the curtain fully covers the screen
      setTheme(nextTheme)
      setStage("revealing")
      
      // Slide up duration is 400ms
      setTimeout(() => {
        setStage("idle")
      }, 400)
    }, 400)
  }

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleToggle} 
          className="rounded-full w-10 h-10 bg-background/80 backdrop-blur border shadow-sm hover:bg-muted"
          aria-label="Toggle theme"
          disabled={stage !== "idle"}
        >
          <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${
            activeIcon === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            activeIcon === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`} />
        </Button>
      </div>

      {/* Rolling curtain overlay */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none w-screen h-screen transition-transform duration-400 ease-in-out mix-blend-difference bg-white ${
          stage === "covering" 
            ? "translate-y-0" 
            : "-translate-y-full"
        }`}
      />
    </>
  )
}
