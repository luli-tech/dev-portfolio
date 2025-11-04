"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

export function ScrollNavigation() {
  const [showScroll, setShowScroll] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollTop = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (!showScroll && scrollTop > 300) {
      setShowScroll(true);
    } else if (showScroll && scrollTop <= 300) {
      setShowScroll(false);
    }

    if (scrollTop >= docHeight - 50) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    if (!isAtBottom) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-24 right-8 flex flex-col gap-3 z-30">
      {showScroll && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-[green] hover:bg-primary/90 text-[white] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 h-12 w-12 animate-glow"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      <Button
        onClick={scrollToBottom}
        size="icon"
        disabled={isAtBottom}
        className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-12 w-12 ${
          isAtBottom
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            : "bg-[green] hover:bg-primary/90 text-[white] hover:scale-110 animate-glow"
        }`}
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </div>
  );
}
