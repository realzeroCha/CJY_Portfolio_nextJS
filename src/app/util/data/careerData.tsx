export type CareerListType = {
  title: string;
  careers: CareerType[];
};

export type CareerType = {
  career_title: string;
  url_path: string;
  career_period: string;
  occupation: string[];
  descriptions: DescriptionType[];
};

export type DescriptionType = {
  description_title: string;
  description_period: string;
  description_skills?: string[];
  description_content: string[];
};

export const CareerList: CareerListType[] = [
  {
    title: "CAREER",
    careers: [
      {
        career_title: "Invisible Adeas",
        url_path:
          "https://web-image-file.s3.ap-northeast-2.amazonaws.com/ivid/ividWebLogo.png",
        career_period: "2023.08 - 재직중",
        occupation: ["Front-end 개발", "React", "React-Native"],
        descriptions: [
          {
            description_title:
              "호텔 솔루션 영업 및 운영을 위한 직원 마스터 관리자 웹페이지 개발",
            description_period: "2024.06 - ",
            description_skills: ["React"],
            description_content: [],
          },
          {
            description_title:
              "웹 기반의 호텔 플랫폼 주문 접수 Windows POS 개발",
            description_period: "2024.02 - ",
            description_skills: ["Tauri", "React"],
            description_content: [],
          },
          {
            description_title: "호텔 솔루션 매장, 호텔 관리자용 웹페이지 개발",
            description_period: "2024.02 - ",
            description_skills: ["React"],
            description_content: [],
          },
          {
            description_title: "호텔 객실 스마트오더 솔루션 웹앱 개발",
            description_period: "2024.01 - ",
            description_skills: ["React-Native", "React", "WebView"],
            description_content: [],
          },
          {
            description_title: "주문 접수 관리 솔루션 POS 개발",
            description_period: "2023.09 - ",
            description_skills: ["React-Native"],
            description_content: [],
          },
          {
            description_title:
              "Android TV에서 주문 상태를 보여주는 DID 웹앱 개발",
            description_period: "2023.09 - 2024.04",
            description_skills: ["React-Native", "React", "WebView"],
            description_content: [],
          },
          {
            description_title: "React 기반 사용자 개인 매장 웹페이지 개발",
            description_period: "2023.09 - 2023.11",
            description_skills: ["React"],
            description_content: [],
          },
        ],
      },
    ],
  },
  {
    title: "PROJECTS",
    careers: [
      {
        career_title:
          "OPEN API를 사용한 대학교 통학 정보를 제공하는 크로스플랫폼 앱 개발",
        url_path: "",
        career_period: "2022.01 - 2022.10",
        occupation: ["기획", "Front-end 개발", "React-Native"],
        descriptions: [],
      },
      {
        career_title: "YOLO를 이용한 식단관리 안드로이드 앱 개발",
        url_path: "",
        career_period: "2022.01 - 2022.10",
        occupation: ["Front-end 개발", "Kotlin"],
        descriptions: [],
      },
    ],
  },
];
