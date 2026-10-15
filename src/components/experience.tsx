import {
  IconBrandAppleFilled,
  IconPigMoney,
  IconFishHook,
  IconMessage,
} from "@tabler/icons-react";

type xpItem = {
  title: string;
  company: string;
  icon: JSX.Element;
  date: string;
  description: string;
  highlights: string[];
  metric?: { from?: string; to: string; caption: string };
};

const xpItems: xpItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TextUs",
    icon: <IconMessage size={18} />,
    date: "2024 - Present",
    description:
      "Build features across a Rails and React monorepo for the TextUs business messaging platform, working alongside Claude as an AI pair.",
    metric: {
      to: "+10-12%",
      caption: "Increase in response rates from the AI Rewrite feature",
    },
    highlights: [
      "Built the self-serve purchase flow for new customers, including an embedded Paystand payment step and terms consent captured at checkout.",
      "Created the Message Quality Indicator (MQI), which flags risky content as users compose messages and blocks sending while any message fails the check. Tuned thresholds and admin hints.",
      "Contributed to multi-factor authentication and the broader Security 2.0 effort.",
      "Established a repeatable workflow for shipping tickets with AI agents: one background session per ticket, automated review before any PR, and a human test pass before anything is pushed.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Apple",
    icon: <IconBrandAppleFilled size={18} />,
    date: "2022 - 2024",
    description: `Enhance Conversation Kit Studio for managing multi region and multi lingual application content. Develop new features, write and execute migrations, troubleshoot erroneous data, and strategically plan and decompose feature stories.`,
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
    title: "Co-Founder/Principal Engineer",
    company: "OinkChing",
    icon: <IconPigMoney size={18} />,
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
    title: "Software Engineer",
    company: "PhishMe",
    icon: <IconFishHook size={18} />,
    date: "2015 - 2018",
    description:
      "Developed and maintained a suite of security awareness training products. Worked with a team of developers to implement new features, fix bugs, and maintain existing code.",
    highlights: [
      "Co-created a Vue based style library (Koi) for the Phishing Simulator",
      "Led the presentation, training, and implementation of Koi",
    ],
  },
];

export default function Experience() {
  return (
    <ol className="grid gap-14">
      {xpItems.map((item) => (
        <li
          key={item.title}
          className="grid gap-x-10 gap-y-3 lg:grid-cols-[8.5rem_1fr]"
        >
          <p className="text-sm font-medium text-opal-600 lg:pt-2">
            {item.date}
          </p>
          <div className="grid gap-4">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                {item.title}
              </h3>
              <p className="flex gap-2 items-center mt-1 text-opal-700 font-medium">
                {item.icon}
                {item.company}
              </p>
            </div>
            <p className="max-w-[62ch] leading-relaxed">{item.description}</p>

            {item.metric && (
              <figure className="my-2 border-l-4 border-signal pl-5">
                <div className="font-display text-4xl lg:text-5xl leading-none flex flex-wrap items-baseline gap-x-3">
                  {item.metric.from && (
                    <>
                      <span className="text-opal-500 line-through decoration-2">
                        {item.metric.from}
                      </span>
                      <span>to</span>
                    </>
                  )}
                  <span className="font-semibold">{item.metric.to}</span>
                </div>
                <figcaption className="mt-2 text-sm text-opal-700">
                  {item.metric.caption}
                </figcaption>
              </figure>
            )}

            <ul className="grid gap-2 max-w-[62ch]">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="pl-5 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-0.5 before:bg-opal-500"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
