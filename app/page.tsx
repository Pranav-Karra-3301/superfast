'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { useState, useMemo, useRef, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
import {
  WORK_EXPERIENCE,
  PUBLICATIONS,
  PROJECTS,
  WORKSHOP_SLIDES,
  EMAIL_DISPLAY,
  SOCIAL_LINKS,
  ABOUT_TEXT,
  CONTACT_TEXT,
  WORKSHOP_DESCRIPTION,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
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
    </Magnetic>
  )
}

function GitHubCalendarSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [blockSize, setBlockSize] = useState(10)

  useEffect(() => {
    const calculateBlockSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        // GitHub calendar typically shows 53 weeks + legend space (~100px)
        // Each block needs space for the block itself + margin
        const availableWidth = containerWidth - 100
        const numWeeks = 53
        const margin = 3

        // Calculate block size: (availableWidth - (margins between blocks)) / numWeeks
        const calculatedSize = Math.floor((availableWidth - (numWeeks * margin)) / numWeeks)

        // Set a reasonable min and max
        const size = Math.max(8, Math.min(calculatedSize, 15))
        setBlockSize(size)
      }
    }

    calculateBlockSize()
    window.addEventListener('resize', calculateBlockSize)

    return () => window.removeEventListener('resize', calculateBlockSize)
  }, [])

  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <a
        href="https://github.com/Pranav-Karra-3301"
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <div ref={containerRef}>
          <GitHubCalendar
            username="Pranav-Karra-3301"
            colorScheme="light"
            blockSize={blockSize}
            blockMargin={3}
            fontSize={11}
            style={{
              color: 'inherit',
            }}
          />
        </div>
      </a>
    </motion.section>
  )
}

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(PROJECTS.map(p => p.category))]
    return cats
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS
    return PROJECTS.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3 className="mb-5 text-lg font-medium">Projects</h3>

      <div className="mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 block"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 z-10 overflow-hidden">
              {project.preview && (
                <div className="absolute top-0 right-0 w-40 h-full overflow-hidden opacity-[0.12] dark:opacity-[0.08] transition-opacity duration-300 hover:opacity-20 dark:hover:opacity-15 pointer-events-none">
                  <img
                    src={project.preview}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-center scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement
                      if (parent) parent.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-950/20" />
                </div>
              )}
              <div className="space-y-2">
                <div className="flex w-full flex-row justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100 relative z-10">
                      {project.name}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 relative z-10 mb-1">
                      {project.category}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 relative z-10">
                      {project.description}
                    </p>
                  </div>
                </div>
                {project.install && (
                  <div className="flex flex-wrap gap-2 relative z-10">
                    <code className="text-xs bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded text-zinc-700 dark:text-zinc-300">
                      {project.install}
                    </code>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            {ABOUT_TEXT}
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
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
                <h4 className="font-medium text-zinc-900 dark:text-zinc-50 group-hover:underline">
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
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-4">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id}>
              {job.link ? (
                <a
                  className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 block"
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 z-10">
                    <div className="space-y-3">
                      <div className="flex w-full flex-row justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-zinc-900 dark:text-zinc-100 relative z-10">
                            {job.title}
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 relative z-10">
                            {job.company}
                          </p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 relative z-10">
                            {job.location}
                          </p>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap ml-4 relative z-10">
                          {job.start}{job.start && ' - '}{job.end}
                        </p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 relative z-10">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="text-sm">{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 z-10">
                    <div className="space-y-3">
                      <div className="flex w-full flex-row justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-zinc-900 dark:text-zinc-100 relative z-10">
                            {job.title}
                          </h4>
                          <p className="text-zinc-700 dark:text-zinc-300 relative z-10">
                            {job.company}
                          </p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 relative z-10">
                            {job.location}
                          </p>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap ml-4 relative z-10">
                          {job.start}{job.start && ' - '}{job.end}
                        </p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 relative z-10">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="text-sm">{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <ProjectsSection />

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Workshop Slides</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {WORKSHOP_DESCRIPTION}
        </p>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {WORKSHOP_SLIDES.map((slide) => (
              <a
                key={slide.id}
                className="-mx-3 rounded-xl px-3 py-3 block"
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                data-id={slide.id}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {slide.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {slide.date}
                  </p>
                </div>
              </a>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Contact</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {CONTACT_TEXT} reach out to me via email at {EMAIL_DISPLAY}
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>

      <GitHubCalendarSection />
    </motion.main>
  )
}
