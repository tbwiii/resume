import {
  IconBrandAppleFilled,
  IconPigMoney,
  IconFishHook,
  IconStarFilled,
} from "@tabler/icons-react";
import BlurFade from "./magicui/blur-fade";

type xpItem = {
  title: string;
  company: string;
  theming: string;
  icon: JSX.Element;
  date: string;
  description: string;
  accomplishments: string[];
};

const xpItems: xpItem[] = [
  {
    title: "Senior Full Stack Engineer",
    company: "Apple",
    theming: "text-black",
    icon: <IconBrandAppleFilled size={20} />,
    date: "2022 - Present",
    description:
      "Enhance Conversation Kit Studio for managing multi region and multi lingual application content. Develop new features, write and execute migrations, troubleshoot erroneous data, and strategically plan and decompose feature stories.",
    accomplishments: [
      "Implemented a sensitive-information roll-out tool for managing user access to unannounced product info",
      "Optimized an audit tool for analyzing over 8 million MongoDB documents. 3+ hours => ~5 minutes",
      "Create a messaging system for recording publish data and user activity with Kafka and MongoDB",
    ],
  },
  {
    title: "Co-Founder/Principal Engineer",
    company: "OinkChing",
    theming: "text-purple-600",
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
    theming: "text-red-400",
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
            <div className="lg:flex gap-2 justify-between">
              <div className="lg:flex gap-4">
                <h3 className="text-2xl">{item.title}</h3>
                <div
                  className={`inline-block py-2 text-sm rounded ${item.theming}`}
                >
                  <span className="flex gap-1 items-center">
                    {item.icon}
                    {item.company}
                  </span>
                </div>
              </div>
              <span>{item.date}</span>
            </div>
            {item.description}

            <h4 className="text-xl text-emerald-800">Accomplishments</h4>
            <ul>
              {item.accomplishments.map((accomplishment, idx) => (
                <li className="flex gap-4 items-center mb-2" key={idx}>
                  <span className="shrink-0 text-opal-500">
                    <IconStarFilled size={14} />
                  </span>
                  <span>{accomplishment}</span>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
