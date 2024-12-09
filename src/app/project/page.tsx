'use client'

import TextSection from '@/components/common/TextSection'

import 'react-loading-skeleton/dist/skeleton.css'
import { logoLinks } from '@/utils/constant/LogoLinks'
import { motion } from 'framer-motion'
import { project } from '@/utils/constant/Project'
import Image from 'next/image'

export default function Project() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen xl:px-4">
      <TextSection icon="⚒️" text="it's My Projects." classNames="mb-10" />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {project.map((data, index) => {
          return (
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex cursor-pointer items-center gap-5 rounded-xl border-2 border-black-primary bg-white p-3 text-black-primary shadow-button-card transition-all duration-200 hover:scale-105 hover:shadow-image-card"
              key={index}
            >
              {data.type === 'image' ? (
                <Image
                  src={data.url}
                  width={200}
                  height={200}
                  alt={data.type}
                  className="h-full w-full object-cover"
                />

              ): (
                <video
                  width={500}
                  height={500}
                  controls
                >
                  <source src={data.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
