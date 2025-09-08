export type SkillListType = {
  title: string;
  skills: SkillType[];
  librarys?: LibraryType[];
};

export type SkillType = {
  name: string;
  url_path: string;
};
export type LibraryType = {
  name: string;
  color: string;
};

export const skillList: SkillListType[] = [
  {
    title: "Language",
    skills: [
      {
        name: "TypeScript",
        url_path: "/images/svg/ic_typescript.svg",
      },
      {
        name: "Kotlin",
        url_path: "/images/svg/ic_kotlin.svg",
      },
      {
        name: "C++",
        url_path: "/images/svg/ic_Cplus.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        url_path: "/images/svg/ic_react.svg",
      },
      {
        name: "React-Native",
        url_path: "/images/svg/ic_react.svg",
      },
      {
        name: "NextJS",
        url_path: "/images/svg/ic_nextJS.svg",
      },
      {
        name: "Tauri",
        url_path: "/images/svg/ic_tauri.svg",
      },
    ],
    librarys: [
      {
        name: "Tanstack-Query",
        color: "rgb(255,56,75)",
      },
      {
        name: "Redux",
        color: "rgb(111,77,177)",
      },
      {
        name: "Recoil",
        color: "rgb(8,123,245)",
      },
      {
        name: "Jotai",
        color: "rgb(78,78,78)",
      },
      {
        name: "Tailwind CSS",
        color: "rgb(8,177,205)",
      },
      {
        name: "Styled-Components",
        color: "rgb(134,45,101)",
      },
      {
        name: "Sass",
        color: "rgb(208,97,144)",
      },
      {
        name: "Jest",
        color: "rgb(194,19,37)",
      },
      {
        name: "React Testing Library",
        color: "rgb(236,89,144)",
      },
      {
        name: "Framer Motion",
        color: "rgb(0,85,255)",
      },
      {
        name: "Recharts",
        color: "rgb(255,99,132)",
      },
      {
        name: "Matter.js",
        color: "rgb(75,85,98)",
      },
      {
        name: "Three.js",
        color: "rgb(0,0,0)",
      },
      {
        name: "Cannon",
        color: "rgb(59,164,183)",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "firebase",
        url_path: "/images/svg/ic_firebase.svg",
      },
      {
        name: "express.js",
        url_path: "/images/svg/ic_express.svg",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        url_path: "/images/svg/ic_mySQL.svg",
      },
      {
        name: "Redis",
        url_path: "/images/svg/ic_redis.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        url_path: "/images/svg/ic_AWS.svg",
      },
      {
        name: "Docker",
        url_path: "/images/svg/ic_docker.svg",
      },
    ],
  },
  {
    title: "Design",
    skills: [
      {
        name: "Figma",
        url_path: "/images/svg/ic_figma.svg",
      },
    ],
  },
];
