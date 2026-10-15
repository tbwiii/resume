import { jobs, links, profile, skillGroups } from "../data";

// C: type-first. An oversized name over a gridded mint field, one reading
// column, and measurable results set at display size.
export default function Editorial() {
  return (
    <div className="v-editorial min-h-screen bg-white text-[#0d2a22]">
      <header className="v-editorial-hero border-b-2 border-[#0d2a22]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-8 grid gap-10">
          <h1 className="text-[clamp(4.5rem,13vw,11rem)] leading-[0.86] font-medium tracking-[-0.03em]">
            Ted
            <br />
            Waller
          </h1>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="font-display italic text-2xl lg:text-3xl">
              {profile.title}
            </p>
            <nav aria-label="Contact" className="flex flex-wrap gap-2">
              {links.map(({ href, text, Icon }) => (
                <a
                  key={text}
                  href={href}
                  className="flex gap-2 items-center bg-white border border-[#0d2a22] rounded-full px-4 py-1.5 text-sm font-medium hover:bg-[#0d2a22] hover:text-white transition-colors"
                >
                  <Icon size={16} />
                  {text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <p className="font-display text-2xl lg:text-4xl leading-snug max-w-[30ch] lg:max-w-[36ch] py-14 lg:py-20">
          {profile.summary}
        </p>

        <section aria-labelledby="c-exp">
          <h2
            id="c-exp"
            className="font-display text-3xl border-b-2 border-[#0d2a22] pb-3"
          >
            Recent experience
          </h2>
          <ol>
            {jobs.map((job) => (
              <li
                key={job.id}
                className="grid gap-x-12 gap-y-4 lg:grid-cols-[11rem_1fr] border-b border-[#0d2a22]/25 py-10 lg:py-12"
              >
                <p className="text-sm font-medium pt-2">
                  <span className="inline-block bg-[#e3f1ea] rounded-full px-3 py-1">
                    {job.date}
                  </span>
                </p>
                <div className="grid gap-5 max-w-3xl">
                  <div>
                    <h3 className="font-display text-4xl lg:text-5xl font-medium leading-none flex items-center gap-3">
                      <job.Icon size={34} stroke={1.5} aria-hidden="true" />
                      {job.company}
                    </h3>
                    <p className="font-display italic text-xl mt-2">
                      {job.title}
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">{job.description}</p>
                  {job.metric && (
                    <p className="font-display leading-none my-2">
                      <span className="inline bg-[#bfe8d4] px-2 text-6xl lg:text-7xl font-medium [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                        {job.metric.from
                          ? `${job.metric.from} → ${job.metric.to}`
                          : job.metric.to}
                      </span>
                      <span className="block font-sans text-sm mt-3">
                        {job.metric.caption}
                      </span>
                    </p>
                  )}
                  <ul className="grid gap-3 text-[1.05rem]">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="leading-relaxed pl-6 relative before:content-['\2014'] before:absolute before:left-0"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <a
            className="inline-block mt-8 underline decoration-[#bfe8d4] decoration-4 underline-offset-4 hover:decoration-[#0d2a22]"
            href="https://www.linkedin.com/in/tbwiii"
          >
            More on LinkedIn
          </a>
        </section>
      </div>

      <section
        aria-labelledby="c-skills"
        className="v-editorial-hero border-t-2 border-[#0d2a22] mt-16"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <h2 id="c-skills" className="font-display text-3xl mb-8">
            Skills & technologies
          </h2>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="font-display italic text-xl mb-1">{g.title}</h3>
                <p className="leading-relaxed">{g.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
