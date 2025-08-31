import React from "react"
import beian from "@/public/beian.png";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Yuqi(SpongeBob). All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
      <p className="text-xs">
        <span className="font-semibold">Last Update:</span> 08/31/2025
        <span className="font-semibold ml-4">Prior Site Update: </span> 02/13/2025
      </p>
      {/* 添加ICP和公安备案信息在同一行 */}
      <div className="mt-4 flex justify-center space-x-2 items-center text-xs text-gray-500 space-x-3">
        {/* 公安备案信息在前 */}
        <div className="flex items-center space-x-1">
          {/* <Image src={beian} alt="Police Badge Icon" width={15} height={15} /> */}
          {' '}
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33060202001784" target="_blank" rel="noopener noreferrer" className="hover:underline">
            浙公网安备33060202001784号
          </a>
        </div>
        {/* ICP备案信息 */}
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:underline">
          赣ICP备2025054538号   
        </a>
      </div>
    </footer>
  )
}
