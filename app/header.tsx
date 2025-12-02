import Link from 'next/link'
import Image from 'next/image'

// Blur placeholder generated from optimized image
const blurDataURL =
  'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoKAAoABUB8JZgCdAD7rYB4gAD4LEZdRtDsVgxNSvQcqDYzmRBO1RAZrYzCaoniEAA='

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/pranav-optimized.webp"
          alt="Pranav Karra"
          width={56}
          height={56}
          className="rounded-xl"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div>
          <Link
            href="/"
            className="font-[family-name:var(--font-pt-serif)] text-2xl font-medium text-black dark:text-white"
          >
            Pranav Karra
          </Link>
          <p className="text-zinc-600 dark:text-zinc-500">
            Founding Engineer @ unlaunched startup , sidequesting @ Penn State
            and UC Berkeley
          </p>
        </div>
      </div>
    </header>
  )
}
