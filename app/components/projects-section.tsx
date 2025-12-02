'use client'

import { useState, useMemo } from 'react'
import { PROJECTS } from '../data'

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(PROJECTS.map((p) => p.category))]
    return cats
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section>
      <h3 className="mb-5 text-lg font-medium">Projects</h3>

      <div className="mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors ${
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
            className="relative block overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              {project.preview && (
                <div className="pointer-events-none absolute right-0 top-0 h-full w-44 overflow-hidden opacity-25 transition-opacity duration-300 hover:opacity-35 dark:opacity-20 dark:hover:opacity-30">
                  <img
                    src={project.preview}
                    alt={`${project.name} preview`}
                    className="h-full w-full scale-110 object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement
                      if (parent) parent.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10 dark:from-zinc-950 dark:via-zinc-950/70 dark:to-zinc-950/10" />
                </div>
              )}
              <div className="space-y-2">
                <div className="flex w-full flex-row items-start justify-between">
                  <div className="flex-1">
                    <h4 className="relative z-10 font-medium text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="relative z-10 mb-1 text-xs text-zinc-500 dark:text-zinc-500">
                      {project.category}
                    </p>
                    <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
                {project.install && (
                  <div className="relative z-10 flex flex-wrap gap-2">
                    <code className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      {project.install}
                    </code>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
