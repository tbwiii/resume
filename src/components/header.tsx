import { GridPattern } from "@components/magicui/animated-grid-pattern";
import {
  IconBrandGithub,
  IconMail,
  IconBolt,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import BlurFade from "@components/magicui/blur-fade";
export default function Header() {
  const linkClasses = `
    relative
    z-10
    text-opal-600
    flex
    gap-2
    px-2
    items-center
    hover:underline
    transition-colors
    `;

  const links = [
    {
      href: "https://ted.codes",
      text: "ted.codes",
      icon: <IconBolt />,
    },
    {
      href: "https://github.com/tbwiii",
      text: "Github",
      icon: <IconBrandGithub />,
    },
    {
      href: "https://linkedin.com/in/tbwiii",
      text: "LinkedIn",
      icon: <IconBrandLinkedin />,
    },
    {
      href: "mailto:ted.waller.iii@gmail.com",
      text: "Email",
      icon: <IconMail />,
    },
  ];

  return (
    <header className="bg-gray-300 rounded-t-xl p-8 relative grid gap-4 lg:flex justify-between items-center">
      <div className="">
        <BlurFade yOffset={-6}>
          <h1 className="text-opal-600 p-1 relative z-10 text-6xl">
            Ted Waller
          </h1>
        </BlurFade>
        <BlurFade delay={0.25} yOffset={6}>
          <h2 className="text-opal-600 p-1 text-3xl z-10 relative">
            Senior Full Stack Developer
          </h2>
        </BlurFade>
      </div>

      <BlurFade xOffset={20}>
        <div className="grid gap-2">
          {links.map((link, index) => (
            <a key={index} href={link.href} className={linkClasses}>
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      </BlurFade>

      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="
          header-bg
          absolute
          top-0
          left-0
          z-0"
      />
    </header>
  );
}
