import { IconExternalLink, IconStarFilled } from "@tabler/icons-react";
import { jobs, links, profile, skillItems } from "../data";

// A: the original layout and palette, with tighter colour, type and spacing.
export default function Refined() {
  return (
    <div className="v-refined v-refined-bg min-h-screen px-4 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg ring-1 ring-opal-900/5 overflow-hidden text-slate-800">
        <header className="v-refined-header px-8 lg:px-10 py-10 lg:py-12 grid gap-6 lg:flex lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-none">
              {profile.name}
            </h1>
            <p className="mt-2 text-2xl text-opal-100">{profile.title}</p>
          </div>
          <nav
            aria-label="Contact"
            className="flex flex-wrap gap-x-6 gap-y-2 text-opal-50"
          >
            {links.map(({ href, text, Icon }) => (
              <a
                key={text}
                href={href}
                className="flex gap-2 items-center hover:text-white hover:underline underline-offset-4"
              >
                <Icon size={20} />
                {text}
              </a>
            ))}
          </nav>
        </header>

        <div className="bg-opal-50 text-opal-900 border-b border-opal-200 px-8 lg:px-10 py-6">
          <p className="text-lg leading-relaxed max-w-4xl">{profile.summary}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_15rem] gap-10 lg:gap-14 px-8 lg:px-10 py-10">
          <section aria-labelledby="a-exp">
            <h2 id="a-exp" className="text-3xl font-semibold text-opal-800 mb-6">
              Recent experience
            </h2>
            <ol className="grid gap-8">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className="grid gap-3 pb-8 border-b border-opal-100 last:border-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-2xl font-semibold text-opal-800">
                      {job.title}
                      <span className="inline-flex items-center gap-1 ml-3 text-base font-sans font-medium text-opal-500">
                        <job.Icon size={16} />
                        {job.company}
                      </span>
                    </h3>
                    <span className="text-sm text-slate-500">{job.date}</span>
                  </div>
                  <p className="leading-relaxed">{job.description}</p>
                  {job.metric && (
                    <p className="text-sm bg-opal-50 border-l-4 border-opal-400 px-4 py-2 rounded-r">
                      <strong className="text-opal-800">
                        {job.metric.from
                          ? `${job.metric.from} to ${job.metric.to}`
                          : job.metric.to}
                      </strong>{" "}
                      {job.metric.caption}
                    </p>
                  )}
                  <ul className="grid gap-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-relaxed">
                        <IconStarFilled
                          size={12}
                          className="shrink-0 mt-[0.45rem] text-opal-400"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <a
              className="mt-8 inline-flex gap-2 items-center text-lg text-opal-600 hover:underline underline-offset-4"
              href="https://www.linkedin.com/in/tbwiii"
            >
              More on LinkedIn <IconExternalLink size={18} />
            </a>
          </section>

          <section aria-labelledby="a-skills">
            <h2
              id="a-skills"
              className="text-3xl font-semibold text-opal-800 mb-6"
            >
              Skills
            </h2>
            <ul className="grid gap-3 text-[0.95rem]">
              {skillItems.map((s) => (
                <li key={s.name} className="flex gap-3 items-center">
                  <span className="[&>svg]:w-5 [&>svg]:h-5 shrink-0">
                    {s.icon}
                  </span>
                  {s.name}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
