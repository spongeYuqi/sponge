import React from "react";
import { FaReact, FaVuejs, FaGithub, FaWeixin, FaGlobe, FaRegHandshake, FaHandshake, FaHandPointUp, FaHandPointer  } from "react-icons/fa";
import { LuGraduationCap, LuMusic, LuGlobe2, LuBaby,  } from "react-icons/lu";
import tank from '@/public/tank.png';
import NetEasemusic from "@/public/NetEasemusic.png";
import cupt from "@/public/cupt.jpg";
import xb2 from "@/public/xb2-node.jpg";
import airiot from "@/public/airiot.png";
import draws from "@/public/draws.jpg";
import second02 from "@/public/second02.jpg";
import tankv3 from '@/public/tankv3.jpg';
import Dig2 from '@/public/Dig2.jpg';
import air2 from '@/public/air2.jpg';
import backweb from '@/public/backweb.jpg';
import xd2 from '@/public/xd2.jpg';
import pw from '@/public/pw.jpg';
import coze3 from '@/public/coze3.jpg';
import moho2 from '@/public/moho2.jpg';
import music3 from '@/public/music3.jpg';
import art1 from '@/public/art1.jpg';


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Competencies",
        hash: "#competencies",
    },
    {
        name: "Timeline",
        hash: "#timeline",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '实践・亮点',
    Competencies: '能力・特质',
    Timeline: '时间线',
}

export const experiencesData = [
    {
        title: "Trae on campus live",
        location: "First Speaker(4.24)",
        description:
            "Self-driven to break barriers, identified potential in campus second-hand market feature and implemented improvements - creativity lies not in resources but in how you combine them.",
        icon: React.createElement(FaHandPointer),
        date: "2025 Apr",
    },
    {
        title: "Personal website building",
        location: "spongebob.vip",
        description:
            "Self-taught to build personal website from scratch, handling server setup to deployment (Feb 6). Despite bugs, the learning process brought joy and motivation.",
        icon: React.createElement(FaGlobe),
        date: "2025 Feb",
    },
    {
        title: "Digital Innovation Competition",
        location: "Cross-school Coaching",
        description:
            "Led team to win school championship and national 2nd prize; later coached teams from 15+ provinces, earning over 10,000 RMB in consulting fees while gaining project management experience.",
        icon: React.createElement(FaHandshake),
        date: "2024 Dec",
    },
    {
        title: "Personal wechat public account creation",
        // location: React.createElement("span", {},
        //     React.createElement("a", {
        //         href: "https://www.nio.com/",
        //         style: { textDecoration: 'underline' },
        //         target: "_blank"
        //     }, "NIO Inc."),
        //     " Wuhan, China"
        // ),
        location: "JieNitang",
        description:
            "Created WeChat public account (Oct 5) during website development, published 3 posts. Currently refining content direction to share portfolio and reflections.",
        icon: React.createElement(FaWeixin),
        date: "2024 Oct",
    },
    {
        title: "NetEase cloud music partner",
        location: "JieNitang",
        description:
            "Officially became NetEase Cloud Music partner (Oct 18). Music energizes me and helps overcome challenges. Occasionally create videos for favorite songs.",
        icon: React.createElement(LuMusic),
        date: "2024 Oct",
    },
    {
        title: "Join Github",
        location: "SpongeYuqi",
        description:
            "Joined GitHub (Sep 12) late at night in dorm. This new attempt made me realize life is about continuous exploration and self-improvement.",
        icon: React.createElement(FaGithub),
        date: "2024 Sep",
    },
    {
        title: "Provincial Physics Competition",
        location: "Main Debater (2/3 rounds)",
        description:
            "Represented university at Harbin Institute of Technology (May 13). Though inexperienced, this marked my starting point for public speaking and active exploration.",
        icon: React.createElement(LuBaby),
        date: "2023 May",
    },
]

export const experiencesDataZn = [
    {
        "title": "Trae on campus live",
        "location": "首期主讲人[4.24]",
        "description": "进一步自我驱动，跨维认知，踏出壁垒，发现学校已有的小程序中的二手信息板块有很大的挖掘提升空间后即刻启动执行 —— 今天的创造力，不取决于你手里有多少牌，而在于你怎么组合它们。",
        icon: React.createElement(FaHandPointer),
        "date": "2025 年 4 月"
    },
    {
        "title": "个人网站搭建",
        "location": "spongebob.vip",
        "description": "凭借探索实践的兴趣，自主学习搭建起个人网站，相当于完成了一个心愿。从服务器和域名的购买注册到最终项目的全部部署上线（2 月 6 日），一个人通过大量的学习和查阅资料走完了全程，这期间遇到的Bug不少，但是不断地学习让我感到快乐！动力十足！",
        icon: React.createElement(FaGlobe),
        "date": "2025 年 2 月"
    },
    {
        "title": "数字化创新大赛",
        "location": "跨校辅导",
        "description": "带队斩获校赛冠军与全国 A 类竞赛二等奖；后续将项目经验转化为辅导能力，为 15 余个省份的高校团队提供从选题、建模到答辩的全环节支持，凭借技术咨询服务获利超万元，期间同步积累了项目管控、团队协调及技术传授的实战经验。",
        icon: React.createElement(FaHandshake),
        "date": "2024 年 12 月"
    },
    {
        "title": "个人微信公众号创建运营",
        "location": "芥泥糖",
        "description": "网站搭建期间，我同步注册了微信公众号（10 月 5 日注册），仅发布过 3 篇内容，10 月 8 日后便暂未更新。目前正像打磨个人网站一样梳理内容定位，待明确方向后，会继续在这里记录作品集、成长历程与感悟，借分享推动自我反思，也期待能给他人带来启发。",
        "icon": React.createElement(FaWeixin),
        "date": "2024 年 10 月"
    },
    {
        "title": "网易云音乐合伙人",
        "location": "芥泥糖",
        "description": "10 月 18 日正式成为网易云音乐合伙人，异常高兴！自从上大学后，选择的娱乐方式最多的就是听歌，音乐能振奋我，让我积极的面对种种的困难，是我在学习生活中舒缓压力的不可缺少的一部分。偶尔会为心仪旋律投入创作，会为喜爱的歌制作专属视频，在音乐中享受表达的乐趣。",
        "icon": React.createElement(LuMusic),
        "date": "2024 年 10 月"
    },
    {
        "title": "入驻Github",
        "location": "SpongeYuqi",
        "description": "9 月 12 日深夜我记着我还在开着电脑在寝室进行学习，室友们都已经躺床上了，我开着台灯操作到入驻Github这个大家庭成功这一步骤，我深感喜悦，因为我意识到，这是又一次的新尝试，人生就是不断的尝试和历练自己，接触不同的领域就是不断地刷新自我，提升自我，我乐在其中！",
        "icon": React.createElement(FaGithub),
        "date": "2024 年 9 月"
    },
    {
        "title": "省物理学术竞赛",
        "location": "主辩 2/3 场",
        "description": "大一 5 月 13 日，我作为代表前往哈尔滨工业大学参加这项比赛。那时虽显稚嫩，研究与辩论能力都尚在起步阶段，但这次经历却成了我大学期间的重要起点 —— 让我敢于站上讲台、乐于展现自己，更埋下了持续提升、主动探索的种子！",
        "icon": React.createElement(LuBaby),
        "date": "2023 年 5 月"
    },
    
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "ByteDance Trae on campus keynote speaker",
        "title_zh": "字节跳动 Trae on campus 首期直播主讲人",
        "description":
            "Built a campus second-hand marketplace WeChat mini-program (Trae AI IDE) with login, publishing and categorization features. Recognized as Trae's outstanding case; served as keynote speaker with 7k+ viewers.<a href='https://mp.weixin.qq.com/s/dndejmn03CYUM_pkbeHksQ' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ Tweet ]</a>",
            "desc_zh": "运用国内首个AI IDE Trae制作校园二手仓微信小程序，集用户登录，信息发布，数据分类等功能于一体，入选 Trae on campus 知识库优秀案例；作为优秀项目作者，受邀担任主讲人，分享开发历程、交流技术经验，吸引7000+在线观众。<a href='https://mp.weixin.qq.com/s/dndejmn03CYUM_pkbeHksQ' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ 推文 ]</a>",
        "tags": ["AI", "Trae", "Wechat Developer"],
        "imageUrl": second02,
        //"projectUrl": "https://b23.tv/bEJYAIN",
        "demoUrl": "https://lcnziv86vkx6.feishu.cn/wiki/DoBtwiinliUM60keIRcc35C3nbe?from=from_copylink"
    },
    {
        "title": "Multi-functional fire tank 3D digital innovation design",
        "title_zh": "绝境卫戍—全维度智能应急平台",
        "description":
            "It aims to innovate the design of a multi-functional anti-disaster tank track vehicle, which integrates multiple functional modules in one, and this highly integrated design greatly improves the comprehensive rescue capability of a single platform.",
        "desc_zh": "旨在创新设计一款多功能抗灾坦克履带车，其集成了高强度履带、深度相机、热融合夜视仪、消防喷头、液压破拆钳、激光雷达、爆闪警示灯以及UWB定位系统等多个功能模块于一身，这种高度集成化设计极大地提高了单一平台的综合救援能力。",
        "tags": ["Fusion360", "C4D", "PR", "PS"],
        "imageUrl": tankv3,
        //"projectUrl": "https://b23.tv/bEJYAIN",
        "demoUrl": "https://b23.tv/bEJYAIN"
    },
    {
        "title": "Tech Value: Cross-Campus Coaching & Tech Fusion",
        "title_zh": "技术价值拓展：跨校项目辅导与技术融合落地",
        "description":
        "With the 'innovation design' project above, I led as captain—overseeing core 3D modeling and final defense—winning 1st in school and 2nd in national Category A contests. Later, I coached teams from various universities, earning over 10k RMB via consulting and gaining project management & tech teaching experience.",
        "desc_zh": "依托上序「绝境卫戍」项目，以队长身份牵头核心建模与最终答辩环节，统筹团队节奏，从校赛突围至全国 A 类竞赛，最终斩获校赛第一、国赛二等奖。后续结合项目经验，为 15 余个省份的高校本研团队提供全流程辅导（选题 / 建模 / 答辩），通过咨询服务获利过万元，同步沉淀项目统筹与技术教学经验。",
        "tags": ["Leadership", "Coaching"],
        "imageUrl": xd2,
        //"projectUrl": "https://b23.tv/bEJYAIN",
        "demoUrl": "https://b23.tv/VNILYWC"
    },
    {
        title: "Digital Twin & Machine Vision Sorting Line",
        title_zh: '基于数字孪生的视觉分拣流水线',
        description:
            "A collaborative system using Digitaltwinfactory for virtual production line mapping and Sgvision for material recognition, significantly improving sorting accuracy and efficiency.",
        desc_zh: "通过 Digitaltwinfactory 搭建实体分拣流水线的虚拟孪生场景，实现产线状态实时映射与可视化监控；依托 Sgvision 的机器视觉算法，精准识别物料特征并驱动分拣执行，二者协同大幅提升分拣精度与产线响应效率。",
        tags: ["Digital twin", "DTF", "Sgvision"],
        imageUrl: Dig2,
        demoUrl: 'https://b23.tv/Ww0aXvX',
    },
    {
        title: "Smart healthcare regulatory system (AIRIOT)",
        title_zh: '基于AIRIOT的智慧医疗监管系统',
        description: "The intelligent medical system monitoring platform is committed to improving hospital operation efficiency and optimizing resource allocation, while strengthening patient experience and service quality, and forming a comprehensive hospital operation monitoring system.",
        desc_zh: "本项目旨在构建一个基于AIRIOT平台的智能医疗系统监管平台，致力于提升医院运营效率、优化资源配置与管理，同时强化患者体验和服务质量，形成全面的医院运营监控体系。通过操作快捷入口，管理者可快速访问各详细管理模块，实现深度数据挖掘与精细化管理。",
        tags: ["AIRIOT", "Mysql", "Navicate", ],
        imageUrl: air2,
        demoUrl: 'https://b23.tv/QsZKsiw',
    },
    {
        title: "Self-developed Site: Docs & Sharing",
        title_zh: '个人网站独立开发：系统化记录与分享',
        description:
            "Self-built personal site for organizing portfolios, growth and insights. Shared via ~100 mins of beginner tutorials with 5k+ site visits. Refined content to boost expression and documentation skills.<a href='https://b23.tv/I8ZcFiO' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ Tutorial ]</a>",
        desc_zh: "独立开发个人网站，用于系统化记录个人作品集、成长历程及感悟，旨在通过分享促进自我反思与他人启发。制作并发布总计约100分钟小白教程，总播放量4000+，网站累计访问量5000+。在实践中不断优化内容形式，提升逻辑表达与文档撰写能力。<a href='https://b23.tv/I8ZcFiO' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ 教程 ]</a>",
        tags: ["Frontend", "Portfolio", "Teaching"],
        imageUrl: pw, // 可替换为实际网站截图
        demoUrl: 'https://spongebob.vip', // 替换为你的网站地址
    },
    {
        title: "Backend service based on Node.js combined with \"express\"",
        title_zh: '基于Node.js结合express框架的后端服务',
        description:
            "The service integrates user login, authentication, comment, upload files, delete resources and other functions, and brings together the basic application framework and interface usage of nodejs.",
        desc_zh: "该服务集成了用户登录、验证、评论、上传文件、删除资源等功能，汇集了nodejs基本的应用框架和接口用法，并使用Navicate作为后台Mysql数据集成管理，通过Insomnia验证项目。",
        tags: ["Mysql", "Navicate", "Insomnia"],
        imageUrl: backweb,
        demoUrl: 'https://github.com/spongeYuqi/xb2-node',
    },
    {
        title: "News Generator & Manager via Coze Workflow",
        title_zh: '基于Coze工作流的新闻生成与管理系统',
        description:
            "Coze Workflow system: 5 latest keyword news (text+images) with data storage. Retrieves from DB if duplicate (non-latest) instead of re-generating. AI summary & audio on detail page.",
        desc_zh: "使用Coze工作流搭建系统，输入关键词即可生成该关键词相关的最新5条新闻（含文字与图片），并实现数据存储功能。若搜索结果与历史存储数据一致（非最新内容），则直接从数据库调取，无需重新生成；详情页支持AI总结新闻内容，同时提供AI朗读总结的功能。",
        tags: ["Coze", "Workflow", "AI Summary"],
        imageUrl: coze3, 
        demoUrl: 'https://www.coze.cn/home', 
    },
    {
        title: "Moho Cross-domain Exploration and Rapid Practice",
        title_zh: "Moho 跨域探索与快速实践",
        description:
            "Curiosity-driven exploration of Moho: mastered in a week with engineering background. Translated cross-domain efforts into visualization deliverables via rapid learning/execution. Launched Captain Patch Healing Station secondary channel. <a href='https://b23.tv/RQ7SN9C' target='_blank' style='font-weight:bold;font-style:italic;text-decoration:underline'>[ Captain Channel ]</a>",
        desc_zh: "出于对新工具的探索欲，以工科背景接触Moho软件，一周内完成掌握；将这种跨领域探索转化为实践成果，完成可视化任务落地，呈现通过快速学习与执行实现领域衔接的过程，并已开设「老船长派奇治愈站」二创频道。<a href='https://b23.tv/RQ7SN9C' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ 船长频道 ]</a>",
        tags: ["Cross-domain", "Implementation"],
        imageUrl: moho2, // 建议使用工具学习过程或跨领域成果的截图
        demoUrl: "https://b23.tv/ACE5umD" // 可替换为项目成果链接
    },    
    {
        title: "NetEase cloud music partner",
        title_zh: "网易云音乐合伙人",
        description:
            `Fueled by love for music and eagerness to share, I excelled in music-related visual/written content. Soon, I got an official invite to be NetEase Cloud Music Partner No. 1080412, with 100-day lifetime VIP. Now I have over 20,000 songs, am Lv10, and share often on the platform.
            `,
        desc_zh: "因为热爱音乐，乐于分享，成为图文笔记达人，不久之后，收到来自官方的邀请，成为第1080412位网易云音乐合伙人，并享受终身VIP权益百天，目前累计听歌2W多首，Lv10，时常在平台分享自己。",
        tags: ["NetEase cloud", "Passion", "Music"],
        imageUrl: music3,
        demoUrl: 'https://music.163.com/#/user/home?id=7816209974',
    },
    {
        title: "Drawing & Reflection",
        title_zh: "绘画 & 反思",
        description:
            `As a kid, I had a knack for painting. Though I set down my brush later amid life changes, my artistic sense remained—letting me spot and create beauty. I strive for refinement in what I do, adding my own touch. Eager to explore new things, building this personal website has been a fresh, meaningful experience.
            `,
        desc_zh: "小时候我对绘画很有天赋，后来虽因成长节奏暂放下画笔，但对艺术的感知一直藏在心里。这份感知让我总能发现生活里的美，也愿意动手创造美。 做事时，我会带着这份对“精致”的追求，试着加入自己的想法和特色；遇到新事物也总想去探索，就像这次亲手搭建个人网站，对我来说就是一次新鲜又有意义的尝试!",
        tags: [ "perseverance", "reproduction"],
        imageUrl: art1,
        demoUrl: '',
    },
    // {
    //     title: "The 11th CUPT",
    //     title_zh: '第十一届大学生物理学术竞赛',
    //     description: "I participated in this competition as a representative of Harbin Institute of Technology in my freshman year. At that time, my research ability and debate ability were relatively weak. This competition laid the foundation for me to dare to go to the platform, be willing to show myself, constantly improve myself and explore myself.",
    //     desc_zh: "这项比赛是我在大一时作为代表前往哈尔滨工业大学参加的，那时候还很稚嫩，无论是研究能力还是辩论能力，都是比较弱的。对于我来说，这次竞赛奠定了我大学敢于上讲台，乐于展现自己，不断提升自我，自我探索的基础。",
    //     tags: ["cupt", "iypt", "gypt", "matlab", ],
    //     imageUrl: cupt,
    //     demoUrl: 'https://gypt.org/',
    // },


]

export const competenciesData = [
    "Innovation",
    "Organizational",
    "Leadership",
    "Responsible",
    "Github",
    "Cmder",
    "CAD",
    "Multisim",
    "Proteus",
    "Keil",
    "Fusion360",
    "Matlab",
    "PLC",
    "C4D",
    "Trae",
    "Coze",
    "MySQL",
    "Navicate",
    "Moho",
    "Coaching",
    "Teaching",
    "RapidLearning",
    "Cross-domain",
    "Implementation"
]