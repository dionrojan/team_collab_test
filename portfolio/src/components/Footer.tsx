import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 mt-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <Link
            href="https://github.com/JOSEPHJ2007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon width="24" height="24" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joseph-j-86021a283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon width="24" height="24" />
          </Link>
          <Link
            href="mailto:josephjthottupuram@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Joseph J. Designed with ❤️ using modern web technologies.
        </p>
      </div>
    </footer>
  );
}
