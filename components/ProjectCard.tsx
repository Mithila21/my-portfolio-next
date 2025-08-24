// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  repo,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
}) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-md transition">
      <Image src={image} alt={title} width={1200} height={630} className="rounded-xl" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{tag}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {link && <Link className="underline" href={link} target="_blank">Live Demo</Link>}
        {repo && <Link className="underline" href={repo} target="_blank">Code</Link>}
      </div>
    </div>
  );
}
