import { ReactNode } from "react";
import BlurFade from "./magicui/blur-fade";
import IconNetlify from "@components/icons/netlify";
import IconGodot from "@components/icons/godot";
import IconAffinity from "@components/icons/affinity";
import {
  IconBrandAws,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVercel,
  IconBrandVue,
  IconCards,
  IconCode,
  IconDiamond,
  IconTrack,
  IconBrandWordpress,
  IconBrandTypescript,
  IconBrandSvelte,
  IconBrandNodejs,
  IconBrandGraphql,
  IconBrandMongodb,
  IconBrandFigma,
  IconBrandDocker,
  IconBrandCypress,
  IconBrandVite,
  IconBrandGit,
  IconDatabase,
  IconRobot,
} from "@tabler/icons-react";

type skillItem = {
  name: string;
  icon: ReactNode | null;
};

const skillItems: skillItem[] = [
  {
    name: "JavaScript",
    icon: <IconBrandJavascript color="#F0DB4F" />,
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript color="#4476c0" />,
  },
  {
    name: "React ",
    icon: <IconBrandReact color="#61DBFB" />,
  },
  {
    name: "Next",
    icon: <IconBrandNextjs />,
  },
  {
    name: "Vue",
    icon: <IconBrandVue color="#41B883" />,
  },
  {
    name: "Nuxt",
    icon: <IconBrandNuxt color="#41B883" />,
  },
  {
    name: "Svelte",
    icon: <IconBrandSvelte color="#ff3e00" />,
  },
  {
    name: "Vite",
    icon: <IconBrandVite color="#a855f7" />,
  },
  {
    name: "Ruby",
    icon: <IconDiamond color="#9a3636" />,
  },
  {
    name: "Ruby on Rails",
    icon: <IconTrack color="#9a3636" />,
  },
  {
    name: "Node",
    icon: <IconBrandNodejs color="#539e43" />,
  },
  {
    name: "GraphQL",
    icon: <IconBrandGraphql color="#e535ab" />,
  },
  {
    name: "PostgreSQL",
    icon: <IconDatabase color="#336791" />,
  },
  {
    name: "MongoDB",
    icon: <IconBrandMongodb color="#47a248" />,
  },
  {
    name: "Redis",
    icon: <IconDatabase color="#d82c20" />,
  },
  {
    name: "CSS/SCSS",
    icon: <IconBrandCss3 color="#0077c8" />,
  },
  {
    name: "HTML",
    icon: <IconCode />,
  },
  {
    name: "Github",
    icon: <IconBrandGithub />,
  },
  {
    name: "Tailwind",
    icon: <IconBrandTailwind color="#62baf3" />,
  },
  {
    name: "AWS",
    icon: <IconBrandAws />,
  },
  {
    name: "Docker",
    icon: <IconBrandDocker color="#2496ed" />,
  },
  {
    name: "Cypress",
    icon: <IconBrandCypress />,
  },
  {
    name: "Git",
    icon: <IconBrandGit color="#f05032" />,
  },
  {
    name: "Claude Code",
    icon: <IconRobot color="#d97757" />,
  },
  {
    name: "Figma",
    icon: <IconBrandFigma color="#f24e1e" />,
  },
  {
    name: "Affinity Suite",
    icon: <IconAffinity />,
  },
  {
    name: "Vercel",
    icon: <IconBrandVercel />,
  },
  {
    name: "Netlify",
    icon: <IconNetlify color="#72e3e1" />,
  },
  {
    name: "WordPress",
    icon: <IconBrandWordpress color="#000000" />,
  },
  {
    name: "Godot",
    icon: <IconGodot color="#588abb" />,
  },
  {
    name: "Card Tricks",
    icon: <IconCards color="#a26666" />,
  },
];

export default function Skills() {
  return (
    <ul className="grid gap-6">
      {skillItems.map((item: skillItem, idx) => (
        <BlurFade
          key={idx}
          xOffset={-10}
          duration={0.2}
          delay={idx * 0.07 + 0.75}
        >
          <li className="flex gap-2 -ml-3 items-center">
            {item.icon}
            {item.name}
          </li>
        </BlurFade>
      ))}
    </ul>
  );
}
