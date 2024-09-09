import { GridPattern } from "@components/magicui/animated-grid-pattern";
import BlurFade from "@components/magicui/blur-fade";
export default function Header() {
  return (
    <header className="bg-gray-300 rounded-t-xl p-8 relative">
      <BlurFade yOffset={-6}>
        <h1 className="text-opal-600 p-1 relative z-10 text-6xl">Ted Waller</h1>
      </BlurFade>
      <BlurFade delay={0.25} yOffset={6}>
        <h2 className="text-opal-600 p-1 text-3xl z-10 relative">
          Senior Full Stack Developer
        </h2>
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
