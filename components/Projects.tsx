// "use client"

// import React from "react"
// import { headerLanguageMap, projectsData } from "@/lib/data"
// import { useSectionInView } from "@/lib/hooks"
// import SectionHeading from "./SectionHeading"
// import Project from "./Project"
// import { useLocale } from "next-intl"
// import Link from "next/link"
// import { FaAngleRight } from "react-icons/fa6"

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.1)
//   const activeLocale = useLocale()

//   return (
//     <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
//       <SectionHeading>
//         {" "}
//         {activeLocale === "zh"
//           ? headerLanguageMap["Projects"]
//           : "Practices & Highlights"}
//       </SectionHeading>
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Project {...project} />
//           </React.Fragment>
//         ))}
//       </div>
//       {/* <Link
//         className="group tracing-wide font-semibold hover:underline hover:underline-offset-4 hover:decoration-[#80bef9] text-slate-800 dark:text-slate-400 w-full flex gap-1 items-center justify-center mt-10"
//         target="_blank"
//         href="https://github.com/spongeYuqi"
//       >
//         View All Projects
//         <FaAngleRight className="group-hover:translate-x-2 transition" />
//       </Link> */}
//     </section>
//   )
// }

//3个锚点
// "use client"
// import React from "react"
// import { headerLanguageMap, projectsData } from "@/lib/data"
// import { useSectionInView } from "@/lib/hooks"
// import SectionHeading from "./SectionHeading"
// import Project from "./Project"
// import { useLocale } from "next-intl"
// import Link from "next/link"
// import { FaAngleRight } from "react-icons/fa6"

// export default function Projects() {
//   // 关键：为3个锚点分别创建监测ref（复用useSectionInView，统一指向"Projects"区域）
//   const { ref: refTop } = useSectionInView("Projects", 0.1)
//   const { ref: refMiddle } = useSectionInView("Projects", 0.1)
//   const { ref: refBottom } = useSectionInView("Projects", 0.1)
  
//   const activeLocale = useLocale()

//   return (
//     <section id="projects" className="scroll-mt-28 mb-28 relative">
//       {/* 1. 顶部锚点：定位在区域最顶部（与SectionHeading同位置） */}
//       <div 
//         ref={refTop}
//         className="absolute top-0 left-0 w-full h-1 opacity-0" // 隐藏且不占空间，高度1px确保可监测
//       />

//       {/* 原有标题内容 */}
//       <SectionHeading>
//         {activeLocale === "zh"
//           ? headerLanguageMap["Projects"]
//           : "Practices & Highlights"}
//       </SectionHeading>

//       {/* 2. 中部锚点：定位在区域中间位置（通过计算项目列表高度实现） */}
//       <div 
//         ref={refMiddle}
//         className="absolute left-0 w-full h-1 opacity-0"
//         style={{ 
//           top: '50%', // 垂直居中
//           transform: 'translateY(-50%)' // 抵消自身高度，精准居中
//         }}
//       />

//       {/* 原有项目列表内容 */}
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Project {...project} />
//           </React.Fragment>
//         ))}
//       </div>

//       {/* 3. 底部锚点：定位在区域最底部（与底部margin上方对齐） */}
//       <div 
//         ref={refBottom}
//         className="absolute bottom-28 left-0 w-full h-1 opacity-0" // 底部mb-28，锚点在mb上方
//       />
//     </section>
//   )
// }

//5个锚点
"use client"
import React from "react"
import { headerLanguageMap, projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import { useLocale } from "next-intl"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6"

export default function Projects() {
  // 关键：新增2个锚点ref，共5个，统一指向"Projects"区域
  const { ref: refTop } = useSectionInView("Projects", 0.1) // 顶部（0%高度）
  const { ref: refUpperMiddle } = useSectionInView("Projects", 0.1) // 上中部（25%高度）
  const { ref: refMiddle } = useSectionInView("Projects", 0.1) // 中部（50%高度）
  const { ref: refLowerMiddle } = useSectionInView("Projects", 0.1) // 下中部（75%高度）
  const { ref: refBottom } = useSectionInView("Projects", 0.1) // 底部（100%高度）
  
  const activeLocale = useLocale()

  return (
    <section id="projects" className="scroll-mt-28 mb-28 relative">
      {/* 1. 顶部锚点：区域最顶部（与标题同位置，0%高度） */}
      <div 
        ref={refTop}
        className="absolute top-0 left-0 w-full h-1 opacity-0" // 隐藏且不占空间
      />

      {/* 原有标题内容 */}
      <SectionHeading>
        {activeLocale === "zh"
          ? headerLanguageMap["Projects"]
          : "Practices & Highlights"}
      </SectionHeading>

      {/* 2. 上中部锚点：区域25%高度处（顶部与中部之间） */}
      <div 
        ref={refUpperMiddle}
        className="absolute left-0 w-full h-1 opacity-0"
        style={{ 
          top: '25%', // 垂直方向25%位置
          transform: 'translateY(-50%)' // 抵消自身高度，精准定位
        }}
      />

      {/* 3. 中部锚点：区域50%高度处（原中部锚点，位置不变） */}
      <div 
        ref={refMiddle}
        className="absolute left-0 w-full h-1 opacity-0"
        style={{ 
          top: '50%', // 垂直居中
          transform: 'translateY(-50%)'
        }}
      />

      {/* 原有项目列表内容 */}
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* 4. 下中部锚点：区域75%高度处（中部与底部之间） */}
      <div 
        ref={refLowerMiddle}
        className="absolute left-0 w-full h-1 opacity-0"
        style={{ 
          top: '75%', // 垂直方向75%位置
          transform: 'translateY(-50%)'
        }}
      />

      {/* 5. 底部锚点：区域最底部（内容底部，非margin区，100%高度） */}
      <div 
        ref={refBottom}
        className="absolute left-0 w-full h-1 opacity-0"
        style={{ 
          bottom: '28px', // 与section的mb-28（28px）对齐，避免落在空白margin区
          transform: 'translateY(50%)' // 抵消自身高度，贴紧内容底部
        }}
      />
    </section>
  )
}