import {
  IconBrandGithub,
  IconMail,
  IconBolt,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const links = [
  { href: "https://ted.codes", text: "ted.codes", icon: <IconBolt size={18} /> },
  {
    href: "https://github.com/tbwiii",
    text: "GitHub",
    icon: <IconBrandGithub size={18} />,
  },
  {
    href: "https://linkedin.com/in/tbwiii",
    text: "LinkedIn",
    icon: <IconBrandLinkedin size={18} />,
  },
  {
    href: "mailto:ted.waller.iii@gmail.com",
    text: "Email",
    icon: <IconMail size={18} />,
  },
];

export default function Header() {
  return (
    <header className="grid gap-8">
      <div>
        <h1 className="font-display text-6xl lg:text-7xl leading-[0.95] font-medium tracking-tight">
          Ted
          <br />
          Waller
        </h1>
        <p className="mt-4 text-opal-200 text-lg">Senior Full Stack Developer</p>
      </div>
      <nav aria-label="Contact" className="grid gap-2">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            className="flex gap-3 items-center py-1 text-paper hover:text-signal transition-colors"
          >
            {link.icon}
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
}
