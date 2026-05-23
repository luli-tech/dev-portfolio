import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <footer id="contact" className="pt-32 pb-8 w-full flex flex-col">
      {/* Signature Section */}
      <div className="flex justify-center mb-32">
        <h2 className="text-8xl md:text-9xl font-handwriting tracking-tight opacity-90 select-none">
          Micheal
        </h2>
      </div>

      {/* CTA Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-24 w-full">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
          Ready to build something that lasts?
        </h3>
        <div className="flex items-center gap-3">
          <Button 
            className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6 py-2 rounded-md shadow-sm h-10"
            asChild
          >
            <a href="mailto:olabodemicheal5@gmail.com">Let's Talk</a>
          </Button>
          <Button 
            variant="secondary" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium px-5 py-2 rounded-md shadow-sm gap-1 h-10"
            asChild
          >
            <a href="#projects">
              My Work <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Baseline Row */}
      <div className="flex justify-between items-center w-full text-sm">
        <p className="text-foreground/80">
          Built by <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline transition-colors">Micheal</a>
        </p>
        <p className="text-foreground/80">
          © {new Date().getFullYear()} Micheal
        </p>
      </div>
    </footer>
  );
}
