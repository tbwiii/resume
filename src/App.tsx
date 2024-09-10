import "./App.css";
import Header from "@components/header";
import { DotPattern } from "@components/magicui/dot-pattern";
import BlurFade from "@components/magicui/blur-fade";
import Experience from "@components/experience";
import Skills from "@components/skills";
import { IconExternalLink } from "@tabler/icons-react";

const colTitleClasses = "text-2xl mb-4";

function App() {
  return (
    <>
      <div className="container m-auto bg-white rounded-xl shadow text-slate-900">
        <Header />
        <div className="p-8 text-lg text-white drop-shadow shadow-inner bg-gradient-to-tl from-opal-400 to-opal-600">
          <BlurFade delay={0.25} duration={0.75}>
            <p>
              Senior Full Stack Developer with a <strong>focus</strong> on{" "}
              <strong>component-based web applications</strong>. Experienced{" "}
              self-starter with a dedication to learning and sharing. Seeking a{" "}
              <strong>collaborative</strong> environment that encourages{" "}
              experimentation and <strong>iteration</strong>.
            </p>
          </BlurFade>
        </div>
        <BlurFade delay={0.25} duration={0.75}>
          <div className="grid lg:grid-cols-8 gap-20 p-8">
            <div className="lg:col-span-6">
              <h3 className={colTitleClasses}>Recent Experience</h3>
              <div className="grid gap-8">
                <Experience />
                <div className="flex justify-between">
                  <h4 className="text-2xl">
                    <a
                      className="hover:underline transition-all text-opal-500"
                      href="https://www.linkedin.com/in/tbwiii"
                    >
                      <span className="flex gap-2 items-center">
                        More on LinkedIn
                        <IconExternalLink />
                      </span>
                    </a>
                  </h4>

                  <span>2007 - 2024</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className={colTitleClasses}>Skills & Technologies</h3>
              <Skills />
            </div>
          </div>
        </BlurFade>
      </div>
      <DotPattern className="-z-10 main-bg" />
    </>
  );
}

export default App;
