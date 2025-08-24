// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200/60 dark:border-gray-800">
      <div className="container text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}
