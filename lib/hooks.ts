// 'use client'

// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import { SectionName } from '@/context/action-section-context'
// import { useActiveSectionContext } from '@/context/action-section-context';

// export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
//     const { ref, inView } = useInView({
//         threshold,
//     });

//     const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
//     useEffect(() => {
//         console.log(sectionName, inView, Date.now() - timeOfLastClick);
//         if (inView && Date.now() - timeOfLastClick > 1000) {
//             setActiveSection(sectionName);
//         }
//     }, [inView, setActiveSection, timeOfLastClick, sectionName]);

//     return {
//         ref,
//     };
// }


//移动端导航高亮识别
'use client'

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from '@/context/action-section-context'
import { useActiveSectionContext } from '@/context/action-section-context';

// 判断是否为移动端（屏幕宽度 < 640px）
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

export function useSectionInView(sectionName: SectionName, defaultThreshold = 0.75) {
    // 核心修改：仅移动端的Projects区域使用更低阈值（0.05）
    const threshold = isMobile && sectionName === "Projects" 
        ? 0.05  // 移动端Projects：区域5%可见即触发
        : isMobile 
            ? 0.1   // 移动端其他区域：保持原0.1
            : defaultThreshold;  // 非移动端：不受影响
    
    // 核心修改：仅移动端的Projects区域扩大监测范围
    const rootMargin = isMobile && sectionName === "Projects"
        ? '0px 0px -80% 0px'  // 区域顶部进入视口20%就识别
        : isMobile
            ? '0px 0px -60% 0px'  // 移动端其他区域：保持原设置
            : '0px';  // 非移动端：不受影响

    const { ref, inView } = useInView({
        threshold,
        rootMargin,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isMobile) {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            // 核心修改：移动端Projects区域防抖时间缩短，响应更快
            const debounceTime = sectionName === "Projects" ? 50 : 80;
            debounceRef.current = setTimeout(() => {
                handleInViewChange();
            }, debounceTime);
        } else {
            // 非移动端逻辑完全不变
            handleInViewChange();
        }

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    const handleInViewChange = () => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    };

    return { ref };
}
    