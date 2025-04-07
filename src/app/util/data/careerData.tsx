export type CareerListType = {
  title: string;
  careers: CareerType[];
};

export type CareerType = {
  career_title: string;
  url_path: string | null;
  career_period: string;
  tags: string[];
  descriptions: DescriptionType[] | string[];
};

export type DescriptionType = {
  description_title: string;
  description_period: string;
  description_tags?: string[];
  description_content: string[];
};

export const CareerList: CareerListType[] = [
  {
    title: "EXPERIENCES",
    careers: [
      {
        career_title: "(주) 인비저블아이디어",
        url_path:
          "https://web-image-file.s3.ap-northeast-2.amazonaws.com/ivid/ividWebLogo.png",
        career_period: "2023.08 - 재직중",
        tags: [
          "Front-end 개발",
          "React",
          "React-Native",
          "Tauri",
          "styled-components",
        ],
        descriptions: [
          {
            description_title:
              "차량 디스플레이 버전 드라이브스루 솔루션 웹 개발",
            description_period: "2023 하반기 - ",
            description_tags: ["React", "ccos", "STT/TTS"],
            description_content: [],
          },
          {
            description_title:
              "웹 기반의 호텔 플랫폼 주문 접수 Windows POS 개발",
            description_period: "2024 상반기 -",
            description_tags: ["Tauri", "React"],
            description_content: [],
          },
          {
            description_title: "호텔 솔루션 관리자 웹페이지 개발",
            description_period: "2024 상반기 - ",
            description_tags: ["React"],
            description_content: [],
          },
          {
            description_title: "호텔 객실 스마트오더 솔루션 웹앱 개발",
            description_period: "2024 상반기 - ",
            description_tags: ["React-Native", "React", "WebView"],
            description_content: [],
          },
          {
            description_title: "주문 접수 관리 솔루션 POS 개발",
            description_period: "2023 하반기 - ",
            description_tags: ["React-Native"],
            description_content: [],
          },
          {
            description_title: "Android TV DID 웹앱 개발",
            description_period: "2023 하반기 - 2024 하반기",
            description_tags: ["React-Native", "React", "WebView"],
            description_content: [],
          },
          {
            description_title: "사용자 개인 매장 웹페이지 개발",
            description_period: "2023 하반기",
            description_tags: ["React"],
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
        career_title: "포트폴리오 웹페이지",
        url_path: null,
        career_period: "2022.10 - 2023.05",
        tags: ["Front-end", "NextJS", "tailwindCSS"],
        descriptions: [
          "ssr을 적용하여 검색엔진 최적화 및 초기 로딩 속도를 개선",
        ],
      },
      {
        career_title: "대학 통학 정보를 제공하는 크로스플랫폼 애플리케이션",
        url_path: null,
        career_period: "2022.10 - 2023.05",
        tags: [
          "기획",
          "Front-end",
          "React-Native",
          "styled-components",
          "open API",
        ],
        descriptions: [
          "메일 인증을 통한 회원가입 기능 개발, token이 유효 기간까지 로그인을 유지하는 검증 로직 개발",
          "메트로 open API를 통해 실시간 교통 상황을 직관적으로 제공, 스크롤 이벤트를 통한 리프레시 로직을 구현하여 사용자 UX 개선",
          "Google Maps API를 연동하여 정류장 위치를 시각적 데이터로 제공",
          "웹소켓 채팅 기능 개발 - 상단 스크롤 이벤트를 감지하여 이전 채팅 내역을 순차적으로 로드하는 방식으로 데이터 로딩을 최적화",
        ],
      },
      {
        career_title: "스터디카페 결제 및 좌석대여 크로스플랫폼 애플리케이션",
        url_path: null,
        career_period: "2023.01 - 2023.03",
        tags: ["기획", "Front-end", "React-Native", "styled-components"],
        descriptions: [
          "전화번호와 비밀번호를 입력받아 1회성 로그인 기능 구현",
          "calendar와 moment를 사용하여 서버로부터 받은 date 값을 분석하여 예약기능 수행",
        ],
      },
      {
        career_title: "YOLO를 이용한 식단관리 안드로이드 애플리케이션",
        url_path: null,
        career_period: "2021.01 - 2022.10",
        tags: ["기획", "Front-end", "Kotlin", "YOLO AI"],
        descriptions: [
          "YOLO AI를 통해 카메라 촬영 이미지 내 음식 데이터 검출 및 데이터 적용",
          "사용자의 입력 데이터를 캘린더로 보여주고 피드백 기능 제공",
          "다수의 사용자 데이터 통계를 가공, 필터링 데이터를 차트로 보여주어 UX 개선",
        ],
      },
    ],
  },
];
