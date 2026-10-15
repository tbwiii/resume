import "./App.css";
import Header from "@components/header";
import Experience from "@components/experience";
import Skills from "@components/skills";
import { IconExternalLink } from "@tabler/icons-react";

function App() {
  return (
    <div className="sheet grid lg:grid-cols-[320px_1fr] max-w-6xl mx-auto lg:my-8 bg-paper shadow-xl lg:rounded-sm overflow-hidden">
      <aside className="sidebar bg-ink text-paper">
        <div className="sidebar-inner lg:sticky lg:top-0 grid gap-10 p-8 lg:p-10">
          <Header />
          <Skills />
        </div>
      </aside>

      <main className="settle p-8 lg:p-14 grid gap-14 content-start">
        <p className="font-display text-2xl lg:text-[1.7rem] leading-snug max-w-[34ch] lg:max-w-[40ch]">
          Senior full stack developer focused on component-based web
          applications. A self-starter who keeps learning and sharing, looking
          for a collaborative team that values experimentation and iteration.
        </p>

        <section aria-labelledby="experience">
          <h2 id="experience" className="font-display text-3xl mb-8">
            Experience
          </h2>
          <Experience />
          <a
            className="mt-10 inline-flex gap-2 items-center font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:decoration-4"
            href="https://www.linkedin.com/in/tbwiii"
          >
            Full history on LinkedIn
            <IconExternalLink size={18} />
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
