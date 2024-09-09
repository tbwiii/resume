import { ReactNode } from "react";
import BlurFade from "./magicui/blur-fade";
import IconNetlify from "@components/icons/netlify";
import IconGodot from "@components/icons/godot";
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
    name: "Ruby",
    icon: <IconDiamond color="#9a3636" />,
  },
  {
    name: "Ruby on Rails",
    icon: <IconTrack color="#9a3636" />,
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
