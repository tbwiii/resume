const groups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Ruby", "HTML", "CSS / SCSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next", "Vue", "Nuxt", "Ruby on Rails", "Tailwind"],
  },
  {
    title: "Platforms",
    items: ["AWS", "Vercel", "Netlify", "GitHub", "WordPress"],
  },
  {
    title: "Outside work",
    items: ["Affinity Suite", "Godot", "Card tricks"],
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills" className="grid gap-6">
      <h2 id="skills" className="font-display text-2xl">
        Skills & technologies
      </h2>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold text-opal-200 mb-1">
            {group.title}
          </h3>
          <p className="leading-relaxed">{group.items.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}
