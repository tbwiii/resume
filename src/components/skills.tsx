const groups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Ruby", "HTML", "CSS / SCSS"],
  },
  {
    title: "Frameworks",
    items: [
      "React",
      "Next",
      "Vue",
      "Nuxt",
      "Svelte",
      "Node",
      "Ruby on Rails",
      "GraphQL",
      "Tailwind",
      "Vite",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Platforms & tooling",
    items: [
      "AWS",
      "Docker",
      "Vercel",
      "Netlify",
      "Git",
      "GitHub",
      "Cypress",
      "WordPress",
      "Claude Code",
    ],
  },
  {
    title: "Design & outside work",
    items: ["Figma", "Affinity Suite", "Godot", "Card tricks"],
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
