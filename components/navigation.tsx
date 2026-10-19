"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sections = [
  { id: "home", label: "About Me" },
  { id: "technologies", label: "Core Technologies" },
  { id: "experience", label: "Career" },
  { id: "projects", label: "Selected Work" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Connect" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav aria-label="Mobile navigation" className="fixed top-6 left-3 z-50 sm:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="h-10 w-10 cursor-pointer rounded-full border bg-background/80 shadow-sm backdrop-blur hover:bg-muted"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={8}
          collisionPadding={12}
          className="w-56 rounded-xl p-2 sm:hidden"
        >
          {sections.map((section) => (
            <DropdownMenuItem
              key={section.id}
              asChild
              className="min-h-11 cursor-pointer rounded-lg px-3"
            >
              <a href={`#${section.id}`}>{section.label}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
