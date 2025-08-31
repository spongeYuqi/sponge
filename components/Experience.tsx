// "use client"

// import React from "react"
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css"
// import {
//   experiencesData,
//   experiencesDataZn,
//   headerLanguageMap,
// } from "@/lib/data"
// import SectionHeading from "./SectionHeading"
// import { motion } from "framer-motion"
// import { useTheme } from "@/context/theme-context"
// import { ExperienceLabel } from "./ExperienceLabel"
// import { useLocale } from "next-intl"

// export default function Experience({ isMobile }: { isMobile: boolean }) {
//   const { theme } = useTheme()
//   const variants = {
//     left: {
//       hidden: { x: -200, opacity: 0 },
//       visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     },
//     right: {
//       hidden: { x: 200, opacity: 0 },
//       visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     },
//   }

//   const activeLocale = useLocale()

//   const experienceDataShown =
//     activeLocale == "zh" ? experiencesDataZn : experiencesData

//   return (
//     <section className="sm:mb-40 relative mb-20">
//       <ExperienceLabel />
//       <SectionHeading>
//         {" "}
//         {activeLocale === "zh"
//           ? headerLanguageMap["Timeline"]
//           : "My Timeline"}
//       </SectionHeading>
//       {!isMobile ? (
//         <VerticalTimeline lineColor={theme == "light" ? "#e9e9ea" : "#3b3d4f"}>
//           {experienceDataShown.map((item, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={variants[index % 2 === 0 ? "right" : "left"]}
//               className="mb-20"
//             >
//               <VerticalTimelineElement
//                 position={index % 2 === 0 ? "left" : "right"}
//                 visible={true}
//                 contentStyle={{
//                   background:
//                     theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                   boxShadow: "none",
//                   border: "1px solid rgba(0, 0, 0, 0.05)",
//                   textAlign: "left",
//                   padding: "1.3rem 2rem",
//                 }}
//                 contentArrowStyle={{
//                   borderRight:
//                     theme === "light"
//                       ? "0.4rem solid #9ca3af"
//                       : "0.4rem solid rgba(255, 255, 255, 0.5)",
//                 }}
//                 date={item.date}
//                 icon={<>{item.icon}</>}
//                 iconStyle={{
//                   background:
//                     theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 <h3 className="font-bold capitalize">{item.title}</h3>
//                 <p className="font-normal !mt-0">{item.location}</p>
//                 <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                   {item.description}
//                 </p>
//               </VerticalTimelineElement>
//             </motion.div>
//           ))}
//         </VerticalTimeline>
//       ) : (
//         <div className="flex flex-col gap-6">
//           {experienceDataShown.map((item, index) => (
//             <div
//               key={index}
//               className={`flex dark:bg-slate-800 dark:text-slate-100 bg-slate-100 border-1 border-opacity-80 rounded-lg p-6 pb-8 flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 `}
//             >
//               <div className="w-10 h-5 sm:w-24 sm:h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//                 {item.icon}
//               </div>
//               {item.date}
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold capitalize">{item.title}</h3>
//                 <p className="font-normal !mt-0">{item.location}</p>
//                 <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }

//改成箭头
// "use client"

// import React, { useEffect } from "react"
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css"
// import {
//   experiencesData,
//   experiencesDataZn,
//   headerLanguageMap,
// } from "@/lib/data"
// import SectionHeading from "./SectionHeading"
// import { motion } from "framer-motion"
// import { useTheme } from "@/context/theme-context"
// import { ExperienceLabel } from "./ExperienceLabel"
// import { useLocale } from "next-intl"

// export default function Experience({ isMobile }: { isMobile: boolean }) {
//   const { theme } = useTheme()
//   const variants = {
//     left: {
//       hidden: { x: -200, opacity: 0 },
//       visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     },
//     right: {
//       hidden: { x: 200, opacity: 0 },
//       visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     },
//   }

//   const activeLocale = useLocale()

//   const experienceDataShown =
//     activeLocale == "zh" ? experiencesDataZn : experiencesData

//   // 动态添加自定义样式
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       .vertical-timeline::before {
//         background: ${theme == "light" ? "#e9e9ea" : "#3b3d4f"} !important;
//         width: 4px !important; /* 加粗线条 */
//       }
      
//       /* 箭头样式 */
//       .vertical-timeline::after {
//         content: '';
//         position: absolute;
//         left: 50%;
//         top: -4px; /* 向上移动，使箭头覆盖线条 */
//         transform: translateX(-50%);
//         width: 0;
//         height: 0;
//         border-left: 12px solid transparent;
//         border-right: 12px solid transparent;
//         border-bottom: 20px solid ${theme == "light" ? "#e9e9ea" : "#3b3d4f"}; /* 增加高度 */
//         z-index: 2; /* 提高层级确保覆盖 */
//       }
//     `;
//     document.head.appendChild(style);
  
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, [theme]);

//   return (
//     <section className="sm:mb-40 relative mb-20">
//       <ExperienceLabel />
//       <SectionHeading>
//         {" "}
//         {activeLocale === "zh"
//           ? headerLanguageMap["Timeline"]
//           : "My Timeline"}
//       </SectionHeading>
//       {!isMobile ? (
//         <VerticalTimeline lineColor="transparent">
//           {experienceDataShown.map((item, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={variants[index % 2 === 0 ? "right" : "left"]}
//               className="mb-20"
//             >
//               <VerticalTimelineElement
//                 position={index % 2 === 0 ? "left" : "right"}
//                 visible={true}
//                 contentStyle={{
//                   background:
//                     theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                   boxShadow: "none",
//                   border: "1px solid rgba(0, 0, 0, 0.05)",
//                   textAlign: "left",
//                   padding: "1.3rem 2rem",
//                 }}
//                 contentArrowStyle={{
//                   borderRight:
//                     theme === "light"
//                       ? "0.4rem solid #9ca3af"
//                       : "0.4rem solid rgba(255, 255, 255, 0.5)",
//                 }}
//                 date={item.date}
//                 icon={<>{item.icon}</>}
//                 iconStyle={{
//                   background:
//                     theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 <h3 className="font-bold capitalize">{item.title}</h3>
//                 <p className="font-normal !mt-0">{item.location}</p>
//                 <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                   {item.description}
//                 </p>
//               </VerticalTimelineElement>
//             </motion.div>
//           ))}
//         </VerticalTimeline>
//       ) : (
//         // 移动端视图保持不变
//         <div className="flex flex-col gap-6">
//           {experienceDataShown.map((item, index) => (
//             <div
//               key={index}
//               className={`flex dark:bg-slate-800 dark:text-slate-100 bg-slate-100 border-1 border-opacity-80 rounded-lg p-6 pb-8 flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 `}
//             >
//               <div className="w-10 h-5 sm:w-24 sm:h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
//                 {item.icon}
//               </div>
//               {item.date}
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold capitalize">{item.title}</h3>
//                 <p className="font-normal !mt-0">{item.location}</p>
//                 <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }


//改成渐变箭头
"use client"

import React, { useEffect } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {
  experiencesData,
  experiencesDataZn,
  headerLanguageMap,
} from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"
import { ExperienceLabel } from "./ExperienceLabel"
import { useLocale } from "next-intl"

export default function Experience({ isMobile }: { isMobile: boolean }) {
  const { theme } = useTheme()
  const variants = {
    left: {
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    right: {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  }

  const activeLocale = useLocale()

  const experienceDataShown =
    activeLocale == "zh" ? experiencesDataZn : experiencesData

  // 动态添加自定义样式 - 实现渐变时间线
  useEffect(() => {
    const style = document.createElement('style');
    const lightColor = "#e9e9ea";
    const darkColor = "#3b3d4f";
    const currentColor = theme == "light" ? lightColor : darkColor;
    
    style.textContent = `
      .vertical-timeline::before {
        background: linear-gradient(to bottom, 
          ${currentColor} 0%,
          ${currentColor}aa 25%, 
          ${currentColor}88 50%, 
          ${currentColor}55 75%, 
          ${currentColor}22 100%
        ) !important;
        width: 8px !important; /* 起始宽度 */
        border-radius: 4px !important; /* 圆角 */
        /* 使用clip-path实现渐变变细效果 */
        clip-path: polygon(
          0% 0%, 
          100% 0%, 
          75% 25%, 
          50% 50%, 
          25% 75%, 
          10% 100%, 
          0% 100%
        ) !important;
      }
      
      /* 增强箭头样式 */
      .vertical-timeline::after {
        content: '';
        position: absolute;
        left: calc(50% + 2px);
        top: -8px; 
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 24px solid ${currentColor};
        z-index: 3;
        /* 添加阴影效果 */
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
      }

      /* 为时间线添加更多视觉层次 */
      .vertical-timeline-element-icon {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        border: 3px solid ${currentColor} !important;
      }

      /* 渐变连接线效果 */
      .vertical-timeline-element-content::before {
        border-right-color: ${theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5)"} !important;
        border-width: 8px 8px 8px 0 !important;
      }
      .vertical-timeline-element--left .vertical-timeline-element-content::before {
        border-left-color: ${theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5)"} !important;
        border-right-color: transparent !important;
        border-width: 8px 0 8px 8px !important;
      }
    `;
    document.head.appendChild(style);
  
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return (
    <section className="sm:mb-40 relative mb-20">
      <ExperienceLabel />
      <SectionHeading>
        {" "}
        {activeLocale === "zh"
          ? headerLanguageMap["Timeline"]
          : "My Timeline"}
      </SectionHeading>
      {!isMobile ? (
        <VerticalTimeline lineColor="transparent">
          {experienceDataShown.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants[index % 2 === 0 ? "right" : "left"]}
              className="mb-20"
            >
              <VerticalTimelineElement
                position={index % 2 === 0 ? "left" : "right"}
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderRadius: "12px",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.5rem solid #9ca3af"
                      : "0.5rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={<>{item.icon}</>}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-bold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </VerticalTimeline>
      ) : (
        // 移动端视图保持不变
        <div className="flex flex-col gap-6">
          {experienceDataShown.map((item, index) => (
            <div
              key={index}
              className={`flex dark:bg-slate-800 dark:text-slate-100 bg-slate-100 border-1 border-opacity-80 rounded-lg p-6 pb-8 flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 `}
            >
              <div className="w-10 h-5 sm:w-24 sm:h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                {item.icon}
              </div>
              {item.date}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}