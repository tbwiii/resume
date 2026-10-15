import type { ReactNode } from "react";
import {
  IconBrandAppleFilled,
  IconBrandAws,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGraphql,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
  IconBrandVue,
  IconBrandWordpress,
  IconBolt,
  IconCards,
  IconCode,
  IconDatabase,
  IconDiamond,
  IconLayoutDashboard,
  IconMail,
  IconMessage,
  IconPigMoney,
  IconRobot,
  IconTrack,
} from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";
import IconNetlify from "@components/icons/netlify";
import IconGodot from "@components/icons/godot";
import IconAffinity from "@components/icons/affinity";

export const profile = {
  name: "Ted Waller",
  title: "Senior Full Stack Developer",
  summary:
    "Senior full stack developer focused on component-based web applications. A self-starter who keeps learning and sharing, looking for a collaborative team that values experimentation and iteration.",
};

export const links: { href: string; text: string; Icon: Icon }[] = [
  { href: "https://ted.codes", text: "ted.codes", Icon: IconBolt },
  { href: "https://github.com/tbwiii", text: "GitHub", Icon: IconBrandGithub },
  {
    href: "https://linkedin.com/in/tbwiii",
    text: "LinkedIn",
    Icon: IconBrandLinkedin,
  },
  { href: "mailto:ted.waller.iii@gmail.com", text: "Email", Icon: IconMail },
];

export type Job = {
  id: string;
  title: string;
  company: string;
  Icon: Icon;
  start: number;
  end: number | null;
  date: string;
  description: string;
  highlights: string[];
  metric?: { from?: string; to: string; caption: string };
};

export const jobs: Job[] = [
  {
    id: "textus",
    title: "Senior Full Stack Developer",
    company: "TextUs",
    Icon: IconMessage,
    start: 2024,
    end: null,
    date: "2024 - Present",
    description:
      "Build features across a Rails and React monorepo for the TextUs business messaging platform, working alongside Claude as an AI pair.",
    metric: {
      to: "+10-12%",
      caption: "Response rates from the AI Rewrite feature",
    },
    highlights: [
      "Built the self-serve purchase flow for new customers, including an embedded Paystand payment step and terms consent captured at checkout.",
      "Created the Message Quality Indicator (MQI), which flags risky content as users compose messages and blocks sending while any message fails the check. Tuned thresholds and admin hints.",
      "Contributed to multi-factor authentication and the broader Security 2.0 effort.",
      "Established a repeatable workflow for shipping tickets with AI agents: one background session per ticket, automated review before any PR, and a human test pass before anything is pushed.",
    ],
  },
  {
    id: "apple",
    title: "Senior Full Stack Engineer",
    company: "Apple",
    Icon: IconBrandAppleFilled,
    start: 2022,
    end: 2024,
    date: "2022 - 2024",
    description:
      "Enhance Conversation Kit Studio for managing multi region and multi lingual application content. Develop new features, write and execute migrations, troubleshoot erroneous data, and strategically plan and decompose feature stories.",
    metric: {
      from: "3+ hours",
      to: "~5 min",
      caption:
        "Audit tool run time, across more than 8 million MongoDB documents",
    },
    highlights: [
      "Improved the publishing and localization process for hundreds of dialog flows, enabling support for millions of messages each month.",
      "Implemented a sensitive-information roll-out tool for managing user access to unannounced product info",
      "Created a messaging system for recording publish data and user activity with Kafka and MongoDB",
    ],
  },
  {
    id: "oinkching",
    title: "Co-Founder/Principal Engineer",
    company: "OinkChing",
    Icon: IconPigMoney,
    start: 2020,
    end: 2022,
    date: "2020 - 2022",
    description:
      "Make and implement all design and development decisions. Develop features, fix bugs, and maintain the platform.",
    highlights: [
      "Created a feature-rich financial literacy platform where users could simulate financial decisions (stocks, purchase a house, checking account).",
      "Utilizing services like Stripe, AWS Lambda, and Vimeo, created a platform that allowed users to purchase and watch a series of course videos.",
      "Implemented an extensible Admin CMS for managing users, courses, and simulator content.",
    ],
  },
  {
    id: "iou",
    title: "Senior UX/UI Engineer",
    company: "IOU",
    Icon: IconLayoutDashboard,
    start: 2019,
    end: 2020.3,
    date: "Jan 2019 - Apr 2020",
    description:
      "Revise outdated front-end code to ensure maintainability and alignment with modern standards.",
    highlights: [
      "Overhaul the UI/UX by introducing contemporary styles and pathways following best practices.",
      "Collaborate with users to identify pain points and establish a strategic UX/UI roadmap.",
      "Work closely with the back-end team to plan and execute UI modifications.",
    ],
  },
];

export const skillItems: { name: string; icon: ReactNode }[] = [
  { name: "JavaScript", icon: <IconBrandJavascript color="#F0DB4F" /> },
  { name: "TypeScript", icon: <IconBrandTypescript color="#4476c0" /> },
  { name: "React", icon: <IconBrandReact color="#61DBFB" /> },
  { name: "Next", icon: <IconBrandNextjs /> },
  { name: "Vue", icon: <IconBrandVue color="#41B883" /> },
  { name: "Nuxt", icon: <IconBrandNuxt color="#41B883" /> },
  { name: "Svelte", icon: <IconBrandSvelte color="#ff3e00" /> },
  { name: "Vite", icon: <IconBrandVite color="#a855f7" /> },
  { name: "Ruby", icon: <IconDiamond color="#9a3636" /> },
  { name: "Ruby on Rails", icon: <IconTrack color="#9a3636" /> },
  { name: "Node", icon: <IconBrandNodejs color="#539e43" /> },
  { name: "GraphQL", icon: <IconBrandGraphql color="#e535ab" /> },
  { name: "PostgreSQL", icon: <IconDatabase color="#336791" /> },
  { name: "MongoDB", icon: <IconBrandMongodb color="#47a248" /> },
  { name: "Redis", icon: <IconDatabase color="#d82c20" /> },
  { name: "CSS/SCSS", icon: <IconBrandCss3 color="#0077c8" /> },
  { name: "HTML", icon: <IconCode /> },
  { name: "GitHub", icon: <IconBrandGithub /> },
  { name: "Tailwind", icon: <IconBrandTailwind color="#62baf3" /> },
  { name: "AWS", icon: <IconBrandAws /> },
  { name: "Docker", icon: <IconBrandDocker color="#2496ed" /> },
  { name: "Cypress", icon: <IconBrandCypress /> },
  { name: "Git", icon: <IconBrandGit color="#f05032" /> },
  { name: "Claude Code", icon: <IconRobot color="#d97757" /> },
  { name: "Figma", icon: <IconBrandFigma color="#f24e1e" /> },
  { name: "Affinity Suite", icon: <IconAffinity /> },
  { name: "Vercel", icon: <IconBrandVercel /> },
  { name: "Netlify", icon: <IconNetlify color="#72e3e1" /> },
  { name: "WordPress", icon: <IconBrandWordpress color="#000000" /> },
  { name: "Godot", icon: <IconGodot color="#588abb" /> },
  { name: "Card Tricks", icon: <IconCards color="#a26666" /> },
];
