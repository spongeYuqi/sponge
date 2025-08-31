// // "use client"

// // import { useRef } from "react"
// // import { projectsData } from "@/lib/data"
// // import Image from "next/image"
// // import { motion, useScroll, useTransform } from "framer-motion"
// // import { FaGithubSquare } from "react-icons/fa"
// // import Link from "next/link"
// // import { FiExternalLink } from "react-icons/fi"
// // import { useLocale } from "next-intl"

// // type ProjectProps = (typeof projectsData)[number]

// // export default function Project({
// //   title,
// //   description,
// //   desc_zh,
// //   title_zh,
// //   tags,
// //   imageUrl,
// //   //projectUrl,
// //   demoUrl,
// // }: ProjectProps) {
// //   const ref = useRef<HTMLDivElement>(null)
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["0 1", "1.33 1"],
// //   })
// //   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
// //   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
// //   const activeLocale = useLocale()

// //   return (
// //     <motion.div
// //       ref={ref}
// //       style={{
// //         scale: scaleProgess,
// //         opacity: opacityProgess,
// //       }}
// //       className="group mb-3 sm:mb-8 last:mb-0"
// //     >
// //       <section className="bg-[#e8eaea] max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem]  transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 ">
// //         <div className="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[26rem]">
// //           <div className="flex flex-col gap-3 items-start ">
// //             <h3 className="text-2xl font-semibold group-hover:text-[#e9882a] dark:group-hover:text-yellow hover:underline">
// //               <Link href={demoUrl} target="_blank">
// //                 {activeLocale === "zh" ? title_zh : title}
// //               </Link>
// //             </h3>

// //             <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
// //               {" "}
// //               {demoUrl && (
// //                 <Link
// //                   href={demoUrl}
// //                   target="_blank"
// //                   className=" w-full flex items-center gap-1 hover:underline underline-offset-2"
// //                 >
// //                   <span className="break-keep min-w-[4.5rem]">Related Link</span>
// //                   <FiExternalLink className="w-5 h-5 " />
// //                 </Link>
// //               )}
// //             </div>
// //           </div>

// //           <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
// //             {activeLocale === "zh" ? desc_zh : description}
// //           </p>
// //           <ul className="flex flex-wrap mt-auto gap-2">
// //             {tags.map((tag, index) => (
// //               <li
// //                 className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
// //                 key={index}
// //               >
// //                 {tag}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <Image
// //           src={imageUrl}
// //           alt="Project I worked on"
// //           quality={100}
// //           className="absolute hidden sm:block top-8 -right-32 w-[35rem] rounded-t-lg shadow-2xl
// //         transition 
// //         group-hover:scale-[1.04]
// //         group-hover:-translate-x-3
// //         group-hover:translate-y-3
// //         group-hover:-rotate-2

// //         group-even:group-hover:translate-x-3
// //         group-even:group-hover:translate-y-3
// //         group-even:group-hover:rotate-2

// //         group-even:right-[initial] group-even:-left-36"
// //         />
// //       </section>
// //     </motion.div>
// //   )
// // }

// "use client"

// import { useRef, useState } from "react"
// import { projectsData } from "@/lib/data"
// import Image from "next/image"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { FaGithubSquare } from "react-icons/fa"
// import Link from "next/link"
// import { FiExternalLink } from "react-icons/fi"
// import { useLocale } from "next-intl"

// type ProjectProps = (typeof projectsData)[number]

// export default function Project({
//   title,
//   description,
//   desc_zh,
//   title_zh,
//   tags,
//   imageUrl,
//   demoUrl,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   })
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
//   const activeLocale = useLocale()
//   const [showLargeImage, setShowLargeImage] = useState(false)

//   return (
//     <>
//       <motion.div
//         ref={ref}
//         style={{
//           scale: scaleProgess,
//           opacity: opacityProgess,
//         }}
//         className="group mb-3 sm:mb-8 last:mb-0"
//       >
//         <section className="bg-[#e8eaea] max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem]  transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 ">
//           <div className="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[26rem]">
//             <div className="flex flex-col gap-3 items-start ">
//               {/* 核心修改：标题添加 demoUrl 非空判断 */}
//               <h3 className="text-2xl font-semibold group-hover:text-[#e9882a] dark:group-hover:text-yellow hover:underline">
//                 {demoUrl && demoUrl.trim() !== '' ? (
//                   // demoUrl 有效时，渲染可点击链接
//                   <Link href={demoUrl} target="_blank">
//                     {activeLocale === "zh" ? title_zh : title}
//                   </Link>
//                 ) : (
//                   // demoUrl 为空时，渲染纯文本（无链接）
//                   <span>{activeLocale === "zh" ? title_zh : title}</span>
//                 )}
//               </h3>

//               {/* Related Link 原有非空判断逻辑保持不变 */}
//               <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
//                 {" "}
//                 {demoUrl && demoUrl.trim() !== '' && (
//                   <Link
//                     href={demoUrl}
//                     target="_blank"
//                     className=" w-full flex items-center gap-1 hover:underline underline-offset-2"
//                   >
//                     <span className="break-keep min-w-[4.5rem]">Related Link</span>
//                     <FiExternalLink className="w-5 h-5 " />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* 富文本描述渲染保持不变 */}
//             <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
//               {activeLocale === "zh" 
//                 ? <span dangerouslySetInnerHTML={{ __html: desc_zh }} /> 
//                 : <span dangerouslySetInnerHTML={{ __html: description }} />
//               }
//             </p>

//             {/* 标签列表保持不变 */}
//             <ul className="flex flex-wrap mt-auto gap-2">
//               {tags.map((tag, index) => (
//                 <li
//                   className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
//                   key={index}
//                 >
//                   {tag}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 图片点击放大功能保持不变 */}
//           <Image
//             src={imageUrl}
//             alt="Project I worked on"
//             quality={100}
//             className="absolute hidden sm:block top-8 -right-32 w-[35rem] rounded-t-lg shadow-2xl
//         transition 
//         group-hover:scale-[1.04]
//         group-hover:-translate-x-3
//         group-hover:translate-y-3
//         group-hover:-rotate-2
//         group-even:group-hover:translate-x-3
//         group-even:group-hover:translate-y-3
//         group-even:group-hover:rotate-2
//         group-even:right-[initial] group-even:-left-36
//         cursor-pointer"
//             onClick={() => setShowLargeImage(true)}
//           />
//         </section>
//       </motion.div>

//       {/* 图片放大预览层保持不变 */}
//       {showLargeImage && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
//           onClick={() => setShowLargeImage(false)}
//         >
//           {/* 固定容器尺寸：宽最大80vw，高最大80vh，超出显示滚动条 */}
//           <div className="max-w-[80vw] max-h-[80vh] overflow-auto">
//             <Image
//               src={imageUrl}
//               alt="Enlarged project image"
//               quality={100}
//               className="w-auto h-auto min-w-[300px] min-h-[200px]" // 保持原图比例，设置最小尺寸避免过小
//               onClick={(e) => e.stopPropagation()} // 点击图片本身不触发关闭
//             />
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


//增加移动端图片显示功能，点击图片放大显示
"use client"

import { useRef, useState } from "react"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"
import { useLocale } from "next-intl"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  desc_zh,
  title_zh,
  tags,
  imageUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.9", "0.8 0.9"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 0.6], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.9])
  const activeLocale = useLocale()
  const [showLargeImage, setShowLargeImage] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        {/* 外层容器：仅移动端调整内边距，非移动端不变 */}
        <section className="bg-[#e8eaea] max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem] transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 px-4 sm:px-0">
          {/* 移动端图片：标题上方、居中、宽度一致，仅移动端显示 */}
          <div className="block sm:hidden w-full mb-4 pt-3">
            <Image
              src={imageUrl}
              alt="Project I worked on (mobile)"
              quality={100}
              // 移动端图片样式：宽度100%（与卡片同宽）、居中、完整展示
              className="w-full h-auto object-contain rounded-lg cursor-pointer"
              onClick={() => setShowLargeImage(true)}
              // Next.js Image 需显式设置尺寸（移动端自适应）
              width={600} // 适配最大移动端宽度，实际会被w-full压缩
              height={300} // 按比例自动计算高度，确保完整展示
            />
          </div>

          {/* 文本及交互区域：仅移动端调整内边距，非移动端不变 */}
          <div className="group pt-2 sm:pt-10 pb-7 px-1 sm:px-2 sm:pl-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[26rem]">
            <div className="flex flex-col gap-3 items-start ">
              {/* 标题：demoUrl 非空判断逻辑不变 */}
              <h3 className="text-2xl font-semibold group-hover:text-[#e9882a] dark:group-hover:text-yellow hover:underline">
                {demoUrl && demoUrl.trim() !== '' ? (
                  <Link href={demoUrl} target="_blank">
                    {activeLocale === "zh" ? title_zh : title}
                  </Link>
                ) : (
                  <span>{activeLocale === "zh" ? title_zh : title}</span>
                )}
              </h3>

              {/* Related Link：原有逻辑不变 */}
              <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
                {demoUrl && demoUrl.trim() !== '' && (
                  <Link
                    href={demoUrl}
                    target="_blank"
                    className=" w-full flex items-center gap-1 hover:underline underline-offset-2"
                  >
                    <span className="break-keep min-w-[4.5rem]">Related Link</span>
                    <FiExternalLink className="w-5 h-5 " />
                  </Link>
                )}
              </div>
            </div>

            {/* 富文本描述：原有逻辑不变 */}
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {activeLocale === "zh" 
                ? <span dangerouslySetInnerHTML={{ __html: desc_zh }} /> 
                : <span dangerouslySetInnerHTML={{ __html: description }} />
              }
            </p>

            {/* 标签列表：原有逻辑不变 */}
            <ul className="flex flex-wrap mt-auto gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* 非移动端图片：完全保留原有样式（位置、动画、尺寸），仅非移动端显示 */}
          <Image
            src={imageUrl}
            alt="Project I worked on (desktop)"
            quality={100}
            className="absolute hidden sm:block top-8 -right-32 w-[35rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-36
        cursor-pointer"
            onClick={() => setShowLargeImage(true)}
          />
        </section>
      </motion.div>

      {/* 图片放大预览层：原有逻辑完全不变 */}
      {showLargeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setShowLargeImage(false)}
        >
          <div className="max-w-[80vw] max-h-[80vh] overflow-auto">
            <Image
              src={imageUrl}
              alt="Enlarged project image"
              quality={100}
              className="w-auto h-auto min-w-[300px] min-h-[200px]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}