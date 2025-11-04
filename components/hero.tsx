"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselContent = [
    {
      title: "Full-Stack Developer",
      description:
        "I build elegant, scalable web applications using modern technologies. From responsive frontends with React and Next.js to robust backends with Rust and Node.js, I create solutions that matter.",
      highlight: "Building the future, one line of code at a time.",
    },
    {
      title: "Problem Solver",
      description:
        "I approach challenges with creativity and technical expertise. Breaking down complex problems into elegant solutions using TypeScript, NestJS, and Express is my passion.",
      highlight: "Turning ideas into reality through code.",
    },
    {
      title: "Tech Innovator",
      description:
        "Constantly exploring new technologies and best practices. From systems programming with Rust to modern web stacks, I stay ahead of the curve to deliver cutting-edge solutions.",
      highlight: "Innovating with purpose and precision.",
    },
    {
      title: "Software Engineer",
      description:
        "Crafting accessible, performant digital experiences that blend thoughtful design with robust engineering principles. Full-stack expertise across the entire development spectrum.",
      highlight: "Excellence in every line of code.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselContent.length) % carouselContent.length
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4643-4Vzz5l3TI6RthUoqzva7rOLvB7X62O.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1
            className="text-6xl md:text-7xl font-bold text-balance text-white drop-shadow-lg mb-4 animate-handwrite-erase"
            style={{ fontFamily: "var(--font-handwriting)" }}
          >
            Olabode Micheal Ayomikun
          </h1>
          <p className="text-xl text-white/80 drop-shadow-md">
            Full-Stack Software Engineer
          </p>
        </div>

        <div className="relative mb-12">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl min-h-96 md:min-h-[500px] lg:min-h-[600px] w-full">
            <div className="min-h-80 md:min-h-[450px] lg:min-h-[550px] flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 text-balance">
                  {carouselContent[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed">
                  {carouselContent[currentSlide].description}
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-green-300 font-semibold italic">
                  "{carouselContent[currentSlide].highlight}"
                </p>
              </div>

              {/* Indicator dots at bottom */}
              <div className="flex items-center justify-center mt-8 pt-8 border-t border-white/20 gap-2">
                {carouselContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-cyan-400 w-8"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500 to-lavender-500 hover:from-blue-600 hover:to-cyan-600 border-0 text-white transition-all duration-300 hover:scale-110 z-20 h-14 w-14 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-7 w-7" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500 to-lavender-500 hover:from-purple-600 hover:to-pink-600 border-0 text-white transition-all duration-300 hover:scale-110 z-20 h-14 w-14 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-7 w-7" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-300">
          <Button
            variant="outline"
            asChild
            className="border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent hover:scale-105"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="bg-white/10 hover:bg-white/20 border-white/30 transition-all duration-300 hover:scale-110"
          >
            <a
              href="https://github.com/luli-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="bg-white/10 hover:bg-white/20 border-white/30 transition-all duration-300 hover:scale-110"
          >
            <a
              href="www.linkedin.com/in/micheal-olabode-3336341ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="bg-white/10 hover:bg-white/20 border-white/30 transition-all duration-300 hover:scale-110"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="bg-white/10 hover:bg-white/20 border-white/30 transition-all duration-300 hover:scale-110"
          >
            <a href="mailto:hello@example.com">
              <Mail className="h-5 w-5 text-white" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
