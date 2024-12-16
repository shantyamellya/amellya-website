'use client'

import TextSection from '@/components/common/TextSection'
import Image from 'next/image'
import ExperienceTimeline from '@/components/common/ExperienceTimelime'
import { experience } from '@/utils/constant/Experience'

export default function About() {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05 * index,
      },
    }),
  }

  return (
    <section className="text-black-primary">
      <TextSection icon="😎" text="it's More About Me." />
      <div className="mx-auto mb-12 mt-8 flex flex-col items-center justify-center md:gap-10 lg:flex-row">
        <div className="relative aspect-auto h-60 w-60 items-baseline justify-center rounded-3xl border-4 border-black-primary bg-amber-50 object-cover shadow-image-card shadow-black-primary md:h-96 md:w-1/2 xl:w-96">
          <div
            className="absolute right-0 flex h-12 w-16 translate-x-8 translate-y-6 items-center justify-center rounded-t-xl rounded-br-xl border-4 border-black-primary bg-amber-50 shadow-image-card shadow-black-primary md:h-16 md:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="200"
              height="200"
            >
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <rect
                  x="20"
                  y="40"
                  width="60"
                  height="40"
                  fill="lightblue"
                  stroke="darkblue"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="200"
                    to="0"
                    dur="2s"
                    fill="freeze"
                  />
                </rect>

                <path
                  d="M30 40 Q50 20 70 40"
                  fill="none"
                  stroke="darkblue"
                  strokeDasharray="80"
                  strokeDashoffset="80"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="80"
                    to="0"
                    begin="1s"
                    dur="1s"
                    fill="freeze"
                  />
                </path>
              </g>

              <line
                x1="35"
                y1="60"
                x2="65"
                y2="60"
                stroke="darkblue"
                strokeWidth="2"
                strokeDasharray="30"
                strokeDashoffset="30"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="30"
                  to="0"
                  begin="2s"
                  dur="1s"
                  fill="freeze"
                />
              </line>
            </svg>
          </div>
          <Image
            src={'/amel.jpeg'}
            alt="Shanty Amellya Avatar"
            width={1000}
            height={1000}
            className="aspect-auto h-full w-full rounded-lg object-cover px-8"
          />
        </div>
        <p className="mt-5 text-justify text-base md:mt-0 lg:w-1/2 xl:text-lg">
Hai! Saya Shanty Amellya, seorang mahasiswa yang penuh semangat untuk mengeksplorasi keindahan Indonesia. Saya percaya bahwa setiap sudut negeri ini memiliki cerita yang unik dan menarik untuk dijelajahi. Melalui perjalanan saya, saya ingin berbagi pengalaman, keindahan, dan inspirasi dari tempat-tempat menakjubkan yang saya temukan. Mari bersama menjelajahi pesona Indonesia!
	  </p>
      </div>
      <TextSection
        icon="💼"
        text="My Experience"
        classNames="mb-10 text-center"
      />
      <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {experience.map((data, index: number) => (
          <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
        ))}
      </div>
    </section>
  )
}
