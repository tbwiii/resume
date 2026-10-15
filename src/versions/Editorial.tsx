import { jobs, links, profile, skillGroups } from "../data";

// C: type-first. An oversized name, a single reading column, and the
// measurable results set at display size.
export default function Editorial() {
  return (
    <div className="v-editorial min-h-screen bg-white text-[#0d2a22]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <header className="grid gap-10">
          <h1 className="text-[clamp(4.5rem,13vw,11rem)] leading-[0.86] font-medium tracking-[-0.03em]">
            Ted
            <br />
            Waller
          </h1>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end border-t-2 border-[#0d2a22] pt-5">
            <p className="font-display italic text-2xl lg:text-3xl">
              {profile.title}
            </p>
            <nav aria-label="Contact" className="flex flex-wrap gap-x-6 gap-y-1">
              {links.map(({ href, text }) => (
                <a
                  key={text}
                  href={href}
                  className="underline decoration-[#bfe8d4] decoration-4 underline-offset-4 hover:decoration-[#0d2a22]"
                >
                  {text}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <p className="font-display text-2xl lg:text-4xl leading-snug max-w-[30ch] lg:max-w-[36ch] mt-16 lg:mt-24">
          {profile.summary}
        </p>

        <section aria-labelledby="c-exp" className="mt-20 lg:mt-28">
          <h2 id="c-exp" className="sr-only">
            Experience
          </h2>
          <ol>
            {jobs.map((job) => (
              <li
                key={job.id}
                className="grid gap-x-12 gap-y-4 lg:grid-cols-[11rem_1fr] border-t border-[#0d2a22]/30 py-10 lg:py-14"
              >
                <p className="text-sm font-medium pt-2">{job.date}</p>
                <div className="grid gap-5 max-w-3xl">
                  <div>
                    <h3 className="font-display text-4xl lg:text-5xl font-medium leading-none">
                      {job.company}
                    </h3>
                    <p className="font-display italic text-xl mt-2">
                      {job.title}
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">{job.description}</p>
                  {job.metric && (
                    <p className="font-display leading-none my-2">
                      <span className="inline bg-[#bfe8d4] px-2 text-6xl lg:text-7xl font-medium [box-decoration-break:clone]">
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
        </section>

        <section
          aria-labelledby="c-skills"
          className="border-t-2 border-[#0d2a22] pt-8 mt-4"
        >
          <h2 id="c-skills" className="font-display text-3xl mb-8">
            Skills & technologies
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="font-display italic text-xl mb-1">{g.title}</h3>
                <p className="leading-relaxed">{g.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
