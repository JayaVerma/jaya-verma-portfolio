import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Publications } from "@/components/sections/Publications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

const RESUME_HREF = "/resume/Jaya_Verma_Resume.pdf";

export default function Home() {
  return (
    <>
      <Nav resumeHref={RESUME_HREF} />
      <main className="flex-1">
        <Hero resumeHref={RESUME_HREF} />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Contact resumeHref={RESUME_HREF} />
      </main>
    </>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
    </div>
  );
}
