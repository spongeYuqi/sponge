"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-xl md:text-2xl font-bold italic">大家好!</span> <span className="text-xl md:text-2xl font-bold">😘</span>我是一个充满激情、热爱学习与探索实践的人。</div>
          <div>
          虽然我的专业是电气工程😳，背景偏向传统工科📟，但我对新兴的技术领域充满了浓厚的兴趣，包括但不限于AI、编程和开发💻等方面。此外，在不断的挖掘潜力中，我逐渐发现跨领域的知识融合能带来更开阔的解决问题视角，也让我慢慢明确了 “将传统工科思维与新兴技术结合” 的成长方向。
          </div>
          <div> 
          目前我正处于毕业准备阶段，虽暂未正式踏入职场，但始终以 “多尝试、多积累”💪 的心态丰富经历：过去喜欢用绘画记录生活，如今更倾向于通过技术实践沉淀成长✌。从需求梳理到技术选型，每一步都在弥补自己从 “工科思维” 到 “产品化思维” 的差距，以及每一次从 “看不懂” 到 “能落地” 的过程，也都在帮我补齐从 “工科背景” 到 “技术实践” 的认知差距。
          </div>
          <div>
          为了留存成长轨迹，也为了找到同频交流的伙伴，我在多个平台分享自己的思考😂：微信公众号 “芥泥糖” 和 B 站 “憨憨 burg” 曾记录过技术学习笔记与生活点滴（目前因专注毕业准备暂未更新）；个人朋友圈更像 “成长树洞”😌，会高频分享学习中遇到的难题、踩过的坑，以及偶尔的情绪碎片，既怕 “忘事”，也盼着能和朋友碰撞出思路。
          </div>
          <div>
          此外，作为网易云音乐合伙人（芥泥糖：享受永久VIP待遇😎），“听歌” 是我调节状态的首选方式，在理性的技术学习之外，也让我保留了一份对生活的感性观察。总之，大量的经历让我学会了从逆境、冲突甚至失败事件中快速恢复。我坚信，坚韧、专注和自信是我最重要的品质之一。
          </div>
          <div>
          我清楚自己仍处于成长初期，无论是技术能力还是职场认知都需要打磨✍，但从过去尝试不同兴趣、应对学习难题的经历中，我练就了 “快速调整状态、及时复盘总结” 的能力🧘‍♂️，也愿意主动接纳新鲜事物。未来，我希望能在兼具技术氛围与成长空间的团队中🤝，以 “踏实做事” 的态度，把更多的潜力探索转化为实际价值，同时也期待在与同事的协作中，学到更多系统化的工作方法，找到属于自己的职场节奏👍。
          </div>
          <div>
          真心希望每一位朋友都能对未来满怀期待，愿我们的勇气，永远滚烫！🚀🚀🚀
          </div>

          {/* <div>
            目前，我在准备开发一款AI设备。同时在自己的 微信公众号 、
            <a
              className="text-xl md:text-2xl font-bold italic underline"
              href="https://music.163.com/#/user/home?id=7816209974"
              target="_blank"
            >
              网易云
            </a>
            和 <a
              className="text-xl md:text-2xl font-bold italic underline"
              href="https://space.bilibili.com/1994639130?spm_id_from=333.1007.0.0"
              target="_blank"
            >
              b站
            </a> 记录技术和生活。
          </div> */}
        </div>
      ) : (
        <>
          <p className="mb-3">
          <span className="text-xl md:text-2xl font-bold italic underline">Hello everyone!</span> <span className="text-xl md:text-2xl font-bold">😘</span>I am a passionate person who loves learning and hands-on exploration. Currently an undergraduate majoring in
           <span className="font-medium italic"> electrical engineering</span> <span className="text-xl md:text-2xl font-bold">😳</span>.
           While my background is in traditional engineering📟, I have a deep interest in emerging tech fields like 
           <span className="font-medium italic"> AI, programming </span> 
           and 
           <span className="font-medium italic"> development</span> 💻. Through continuous learning, I&apos;ve discovered that interdisciplinary knowledge integration provides broader problem-solving perspectives, gradually shaping my direction of &quot;combining traditional engineering thinking with new technologies&quot;.
          </p>

          <p className="mb-3">
           To document my growth journey and find like-minded peers, I share my thoughts on multiple platforms😂: WeChat public account 
           <span className="font-medium italic"> &quot;JieNitang&quot; </span> 
           and Bilibili 
           <span className="font-medium italic"> &quot;Hanburg&quot; </span>  
           have recorded technical notes and life snippets (currently paused for graduation preparations). My personal moments serve as a &quot;growth diary&quot;😌, frequently sharing learning challenges, pitfalls, and occasional emotional fragments - both to avoid forgetting and to spark ideas with friends.
          </p>

          <p className="mb-3">
          As a NetEase Cloud Music partner (<span className="font-medium italic"> &quot;JieNitang&quot; </span>: enjoying permanent VIP benefits😎), &quot;listening to music&quot; is my preferred way to recharge. Beyond technical learning, it preserves my emotional connection to life. Numerous experiences have taught me resilience in adversity, conflict and even failure. I firmly believe perseverance, focus and confidence are among my most valuable qualities.
          </p>

          <p className="mb-3">
          I recognize I&apos;m still in early growth stages, needing to refine both technical skills and professional awareness✍. But diverse experiences have cultivated my ability to &quot;quickly adapt and reflect&quot;🧘‍♂. Moving forward, I hope to join a team combining technical atmosphere with growth space🤝, translating potential into value through diligent work while learning systematic approaches from colleagues.   
          </p>  

          <p className="mb-3">
          I sincerely hope that every friend can be full of expectations for the future. May our courage always be burning hot!
          <span className="text-xl md:text-2xl font-bold italic underline">Go forward!🚀🚀🚀</span>
          </p>

          

          
        </>
      )}
    </motion.section>
  )
}
