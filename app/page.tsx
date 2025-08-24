import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/components/lib/projects";  // Assuming you have a file lib/projects.ts with your project data

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />  {/* Add the Navbar */}
      <Hero />    {/* Add the Hero section */}

      <Section id="about" title="About Me">
        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          I’m a Software Engineering student focused on web technologies. I enjoy turning ideas into polished products and writing clean, maintainable code. I’m currently learning Next.js, TypeScript, and building real projects.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />  
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <form
          className="grid gap-3 max-w-xl"
          action="https://formspree.io/f/your-id"  // Replace with your Formspree endpoint
          method="POST"
        >
          <input name="name" placeholder="Your name" className="border rounded-xl p-3 bg-transparent" required />
          <input type="email" name="email" placeholder="Your email" className="border rounded-xl p-3 bg-transparent" required />
          <textarea name="message" placeholder="Your message" className="border rounded-xl p-3 bg-transparent min-h-32" required />
          <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white w-fit">Send</button>
        </form>
        <p className="text-sm text-gray-500 mt-2">Prefer email? <a className="underline" href="mailto:you@domain.com">you@domain.com</a></p>
      </Section>

      <Footer />  {/* Add the Footer */}
    </div>
  );
}
