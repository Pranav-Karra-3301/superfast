'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/pranav.png"
          alt="Pranav Karra"
          width={56}
          height={56}
          className="rounded-xl"
        />
        <div>
          <Link href="/" className="font-[family-name:var(--font-pt-serif)] text-2xl font-medium text-black dark:text-white">
            Pranav Karra
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Founding Engineer @ [redacted], sidequesting @ Penn State
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
