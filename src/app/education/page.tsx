'use client'

import TextSection from '@/components/common/TextSection'

import 'react-loading-skeleton/dist/skeleton.css'
import ExperienceTimeline from '@/components/common/ExperienceTimelime'
import { education } from '@/utils/constant/Education'

export default function Education() {


  return (
    <div className="xl:px-40 2xl:px-64">
      <TextSection
        icon="🎓"
        text="My Education"
        classNames="mb-10 text-center"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
          {education.map((data, index: number) => (
            <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}
