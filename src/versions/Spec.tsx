import { jobs, links, profile, skillGroups } from "../data";

// B: the resume as a component-library docs page. Each role is a component
// with its props listed; skills are tokens.
export default function Spec() {
  return (
    <div className="v-spec min-h-screen bg-[#e9ecf1] text-[#161a23] px-4 py-8 lg:py-12">
      <div className="max-w-5xl mx-auto grid gap-6">
        <header className="bg-white border border-[#c4cad6] rounded p-6 lg:p-8 grid gap-6 lg:flex lg:justify-between lg:items-end">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1 text-xl text-[#4a5262]">{profile.title}</p>
          </div>
          <nav aria-label="Contact" className="flex flex-wrap gap-2">
            {links.map(({ href, text, Icon }) => (
              <a
                key={text}
                href={href}
                className="flex gap-2 items-center rounded border border-[#c4cad6] px-3 py-1.5 text-sm font-medium hover:border-[#2c3ee8] hover:text-[#2c3ee8]"
              >
                <Icon size={16} />
                {text}
              </a>
            ))}
          </nav>
        </header>

        <p className="bg-[#2c3ee8] text-white rounded p-6 lg:px-8 text-lg leading-relaxed">
          {profile.summary}
        </p>

        <div className="grid lg:grid-cols-[1fr_17rem] gap-6 items-start">
          <section aria-labelledby="b-exp" className="grid gap-6">
            <h2 id="b-exp" className="sr-only">
              Experience
            </h2>
            {jobs.map((job) => (
              <article
                key={job.id}
                className="bg-white border border-[#c4cad6] rounded overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4 bg-[#f5f6f9] border-b border-[#c4cad6] px-5 py-2 font-mono text-sm text-[#4a5262]">
                  <span className="flex items-center gap-2">
                    <job.Icon size={16} />
                    {job.company}
                  </span>
                  <span>{job.date}</span>
                </div>
                <div className="p-5 lg:p-6 grid gap-4">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {job.title}
                  </h3>
                  <p className="leading-relaxed text-[#2b3140] max-w-[66ch]">
                    {job.description}
                  </p>
                  {job.metric && (
                    <dl className="flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded bg-[#eef0ff] border border-[#c7cdfa] px-4 py-3">
                      <dt className="font-mono text-2xl font-semibold text-[#2c3ee8]">
                        {job.metric.from && (
                          <span className="line-through opacity-60 mr-2">
                            {job.metric.from}
                          </span>
                        )}
                        {job.metric.from && "→ "}
                        {job.metric.to}
                      </dt>
                      <dd className="text-sm text-[#2b3140]">
                        {job.metric.caption}
                      </dd>
                    </dl>
                  )}
                  <ul className="grid gap-2 max-w-[66ch]">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="pl-5 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:rounded-[1px] before:bg-[#2c3ee8]"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <aside
            aria-labelledby="b-skills"
            className="bg-white border border-[#c4cad6] rounded p-5 grid gap-5 lg:sticky lg:top-4"
          >
            <h2 id="b-skills" className="text-lg font-semibold">
              Skills & technologies
            </h2>
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold text-[#4a5262] mb-2">
                  {g.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[0.8rem] rounded border border-[#c4cad6] bg-[#f5f6f9] px-2 py-0.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
