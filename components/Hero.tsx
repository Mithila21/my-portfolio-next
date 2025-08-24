// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">Software Engineering Student</p>
          <h1 className="text-4xl font-bold mt-2">Hi, I’m <span className="text-blue-600">Your Name</span>.</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I build web apps with Next.js, TypeScript, and Tailwind. I love clean UX and performance.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-blue-600 text-white">View Projects</a>
            <a href="/YourName-CV.pdf" className="px-4 py-2 rounded-xl border">Download CV</a>
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src="/avatar.jpg"  // Add your image here
            alt="Your portrait"
            width={260}
            height={260}
            className="rounded-full ring-4 ring-blue-100 dark:ring-blue-900/40"
            priority
          />
        </div>
      </div>
    </section>
  );
}
