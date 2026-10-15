import { jobs, links, profile, skillGroups } from "../data";

// D: career as a map. The rail draws each role to scale against the calendar
// (gaps included); the cards on the right follow the same order.
const TOP = 2026.8;
const BOTTOM = 2015;
const PX_PER_YEAR = 46;
const years = Array.from({ length: 12 }, (_, i) => 2026 - i);
const y = (year: number) => (TOP - year) * PX_PER_YEAR;

export default function Timeline() {
  return (
    <div className="v-timeline min-h-screen bg-[#eaf1f3] text-[#10252c] px-4 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <header className="grid gap-6 lg:flex lg:items-end lg:justify-between pb-8 border-b border-[#10252c]/20">
          <div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-none">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl text-[#35575f]">{profile.title}</p>
          </div>
          <nav aria-label="Contact" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ href, text, Icon }) => (
              <a
                key={text}
                href={href}
                className="flex gap-2 items-center font-medium hover:text-[#0d7a8f]"
              >
                <Icon size={18} />
                {text}
              </a>
            ))}
          </nav>
        </header>

        <p className="font-display text-2xl lg:text-3xl leading-snug max-w-[44ch] py-10">
          {profile.summary}
        </p>

        <div className="grid lg:grid-cols-[9rem_1fr] gap-x-12 gap-y-10">
          <div
            aria-hidden="true"
            className="hidden lg:block sticky top-6 self-start"
            style={{ height: (TOP - BOTTOM) * PX_PER_YEAR }}
          >
            <div className="relative h-full border-l border-[#10252c]/30 ml-12">
              {years.map((yr) => (
                <span
                  key={yr}
                  className="absolute -left-12 w-9 text-right text-xs text-[#35575f] -translate-y-1/2"
                  style={{ top: y(yr + 0.5) }}
                >
                  {yr}
                </span>
              ))}
              {jobs.map((job) => {
                const end = job.end ?? TOP;
                return (
                  <a
                    key={job.id}
                    href={`#${job.id}`}
                    className="absolute left-3 w-24 rounded-sm bg-[#0d7a8f] text-white text-xs font-medium px-2 py-1 overflow-hidden hover:bg-[#0a5f70]"
                    style={{
                      top: y(end),
                      height: (end - job.start) * PX_PER_YEAR - 2,
                    }}
                  >
                    {job.company}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8">
            {jobs.map((job) => (
              <article
                key={job.id}
                id={job.id}
                className="scroll-mt-6 bg-white rounded-lg p-6 lg:p-8 grid gap-4 shadow-[0_1px_0_rgba(16,37,44,0.08)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <job.Icon size={22} className="text-[#0d7a8f]" />
                    {job.company}
                  </h2>
                  <p className="text-sm text-[#35575f]">{job.date}</p>
                </div>
                <p className="font-display text-xl">{job.title}</p>
                <p className="leading-relaxed max-w-[66ch]">{job.description}</p>
                {job.metric && (
                  <p className="flex flex-wrap items-baseline gap-x-4 border-t border-b border-[#10252c]/15 py-3">
                    <span className="font-display text-4xl font-semibold text-[#0d7a8f]">
                      {job.metric.from && (
                        <span className="text-[#35575f] line-through decoration-2 font-normal mr-3">
                          {job.metric.from}
                        </span>
                      )}
                      {job.metric.to}
                    </span>
                    <span className="text-sm">{job.metric.caption}</span>
                  </p>
                )}
                <ul className="grid gap-2 max-w-[66ch]">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="pl-5 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:rounded-full before:bg-[#0d7a8f]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <section
              aria-labelledby="d-skills"
              className="bg-[#10252c] text-white rounded-lg p-6 lg:p-8"
            >
              <h2 id="d-skills" className="text-2xl font-semibold mb-5">
                Skills & technologies
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div key={g.title}>
                    <h3 className="text-sm font-semibold text-[#8fc9d4] mb-1">
                      {g.title}
                    </h3>
                    <p className="leading-relaxed">{g.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
