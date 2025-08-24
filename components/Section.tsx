// components/Section.tsx
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
