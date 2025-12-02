import {
  WORK_EXPERIENCE,
  PUBLICATIONS,
  WORKSHOP_SLIDES,
  EMAIL_DISPLAY,
  SOCIAL_LINKS,
  ABOUT_TEXT,
  CONTACT_TEXT,
  WORKSHOP_DESCRIPTION,
} from './data'
import { ProjectsSection } from './components/projects-section'

// Force static generation - this page will be cached at the edge
export const dynamic = 'force-static'

function SocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <a
      href={link}
      className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  )
}

export default function Personal() {
  return (
    <main className="space-y-24">
      {/* About Section */}
      <section>
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">{ABOUT_TEXT}</p>
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <h3 className="mb-5 text-lg font-medium">Publications</h3>
        <div className="flex flex-col space-y-4">
          {PUBLICATIONS.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="space-y-2">
                <h4 className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-50">
                  {pub.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {pub.authors}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Published: {pub.published}
                </p>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {pub.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-4">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id}>
              {job.link ? (
                <a
                  className="relative block overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative z-10 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="space-y-3">
                      <div className="flex w-full flex-row items-start justify-between">
                        <div className="flex-1">
                          <h4 className="relative z-10 font-medium text-zinc-900 dark:text-zinc-100">
                            {job.title}
                          </h4>
                          <p className="relative z-10 text-zinc-700 dark:text-zinc-300">
                            {job.company}
                          </p>
                          <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                            {job.location}
                          </p>
                        </div>
                        <p className="relative z-10 ml-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-400">
                          {job.start}
                          {job.start && ' - '}
                          {job.end}
                        </p>
                      </div>
                      <ul className="relative z-10 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="text-sm">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                  <div className="relative z-10 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                    <div className="space-y-3">
                      <div className="flex w-full flex-row items-start justify-between">
                        <div className="flex-1">
                          <h4 className="relative z-10 font-medium text-zinc-900 dark:text-zinc-100">
                            {job.title}
                          </h4>
                          <p className="relative z-10 text-zinc-700 dark:text-zinc-300">
                            {job.company}
                          </p>
                          <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                            {job.location}
                          </p>
                        </div>
                        <p className="relative z-10 ml-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-400">
                          {job.start}
                          {job.start && ' - '}
                          {job.end}
                        </p>
                      </div>
                      <ul className="relative z-10 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="text-sm">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section - Client Island */}
      <ProjectsSection />

      {/* Workshop Slides Section */}
      <section>
        <h3 className="mb-3 text-lg font-medium">Workshop Slides</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {WORKSHOP_DESCRIPTION}
        </p>
        <div className="flex flex-col space-y-0">
          {WORKSHOP_SLIDES.map((slide) => (
            <a
              key={slide.id}
              className="-mx-3 block rounded-xl px-3 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900/80"
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">{slide.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {slide.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h3 className="mb-5 text-lg font-medium">Contact</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {CONTACT_TEXT} reach out to me via email at {EMAIL_DISPLAY}
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} link={link.link}>
              {link.label}
            </SocialLink>
          ))}
        </div>
      </section>
    </main>
  )
}
