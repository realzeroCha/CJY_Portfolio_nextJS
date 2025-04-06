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
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        url_path: "/images/svg/ic_javascript.svg",
      },
      {
        name: "TypeScript",
        url_path: "/images/svg/ic_typescript.svg",
      },
      {
        name: "HTML",
        url_path: "/images/svg/ic_html.svg",
      },
      {
        name: "CSS",
        url_path: "/images/svg/ic_css.svg",
      },
      {
        name: "Kotlin",
        url_path: "/images/svg/ic_kotlin.svg",
      },
    ],
  },
  {
    title: "",
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
        name: "Flutter",
        url_path: "/images/svg/ic_flutter.svg",
      },
    ],
    librarys: [
      {
        name: "React-Query",
        color: "rgb(255,56,75)",
      },
      {
        name: "Redux",
        color: "rgb(111,77,177)",
      },
      {
        name: "Justand",
        color: "rgb(255,180,60)",
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
        name: "Sass",
        color: "rgb(208,97,144)",
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
        name: "Mocha",
        color: "rgb(133,88,63)",
      },
    ],
  },
  {
    title: "Backend\nDB",
    skills: [
      {
        name: "firebase",
        url_path: "/images/svg/ic_firebase.svg",
      },
      {
        name: "MySQL",
        url_path: "/images/svg/ic_mySQL.svg",
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
    title: "etc",
    skills: [
      {
        name: "Figma",
        url_path: "/images/svg/ic_figma.svg",
      },
      {
        name: "Notion",
        url_path: "/images/svg/ic_notion.svg",
      },
    ],
  },
];
