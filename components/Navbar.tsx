// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container flex justify-between items-center py-4">
      <Link href="/" className="text-xl font-semibold">YourName</Link>
      <ul className="flex gap-6">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
