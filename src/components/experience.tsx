import {
  IconBrandAppleFilled,
  IconPigMoney,
  IconFishHook,
} from "@tabler/icons-react";
import BlurFade from "./magicui/blur-fade";

type xpItem = {
  title: string;
  company: string;
  companyBg: string;
  icon: JSX.Element;
  date: string;
  description: string;
  accomplishments: string[];
};

const xpItems: xpItem[] = [
  {
    title: "Senior Full Stack Engineer",
    company: "Apple",
    companyBg: "bg-black",
    icon: <IconBrandAppleFilled size={20} />,
    date: "2022 - Present",
    description:
      "Enhance Conversation Kit Studio for managing multi region and multi lingual application content. Develop new features, write and execute migrations, troubleshoot erroneous data, and strategically plan and decompose feature stories.",
    accomplishments: [
      "Implemented a sensitive-information roll-out tool for managing user access to unannounced product info",
      "Optimized an audit tool for analyzing over 8 million MongoDB documents. 3+ hours => ~5 minutes",
    ],
  },
  {
    title: "Co-Founder/Principal Engineer",
    company: "OinkChing",
    companyBg: "bg-purple-600",
    icon: <IconPigMoney size={20} />,
    date: "2020 - 2022",
    description:
      "Make and implement all design and development decisions. Develop features, fix bugs, and maintain the platform.",
    accomplishments: [
      "Created a feature-rich financial literacy platform where users could simulate financial decisions (stocks, purchase a house, checking account).",
      "Utilizing services like Stripe, AWS Lambda, and Vimeo, created a platform that allowed users to purchsase and watch a series of course videos.",
      "Implemented an extensible Admin CMS for managing users, courses, and simulator content.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "PhishMe",
    companyBg: "bg-red-400",
    icon: <IconFishHook size={18} />,
    date: "2015 - 2018",
    description:
      "Developed and maintained a suite of security awareness training products. Worked with a team of developers to implement new features, fix bugs, and maintain existing code.",
    accomplishments: [
      "Co-created a Vue based style library (Koi) for the Phishing Simulator",
      "Led the presentation, training, and implimentation of Koi",
    ],
  },
];

export default function Experience() {
  return (
    <div className="grid gap-10">
      {xpItems.map((item, idx) => (
        <BlurFade key={idx} duration={0.75} delay={idx * 0.2 + 0.5}>
          <div className="grid gap-4 border-b-2 pb-10" key={item.title}>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-4">
                <h3 className="text-2xl">{item.title}</h3>

                <div
                  className={`flex gap-1 items-center py-1 px-2 text-white text-sm rounded ${item.companyBg}`}
                >
                  {item.icon}
                  {item.company}
                </div>
              </div>
              <span>{item.date}</span>
            </div>
            {item.description}

            <h4 className="text-xl text-emerald-800">Accomplishments</h4>
            <ul className="list-disc ml-4">
              {item.accomplishments.map((accomplishment, idx) => (
                <li key={idx}>{accomplishment}</li>
              ))}
            </ul>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
