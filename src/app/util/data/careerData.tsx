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
        career_title: "(주)인비저블아이디어",
        url_path:
          "https://web-image-file.s3.ap-northeast-2.amazonaws.com/ivid/ividWebLogo.png",
        career_period: "2023.08 - 재직중",
        tags: [
          "Front-end 개발",
          "TypeScript",
          "React",
          "React-Native",
          "Tauri",
          "styled-components",
        ],
        descriptions: [
          {
            description_title:
              "관리자 웹페이지 및 어드민 백오피스 웹페이지 개발",
            description_period: "2024 상반기 -",
            description_tags: ["React"],
            description_content: [
              "다양한 환경에서 사용감을 개선하기 위한 반응형 UI 개발",
              "사내 자동화 정산 데이터 시각적 통계 제공 및 Excel 추출 기능 개발",
            ],
          },
          {
            description_title:
              "차량 디스플레이 버전 드라이브스루 솔루션 웹 개발",
            description_period: "2024 상반기",
            description_tags: ["React", "STT/TTS"],
            description_content: [
              "클라우드 기반 STT/TTS 백업 엔진을 적용하여 범용성 확보",
              "사용자의 현재 위치 데이터에 기반한 맞춤형 데이터 제공",
            ],
          },
          {
            description_title:
              "웹 기반의 호텔 플랫폼 주문 접수 Windows POS 개발",
            description_period: "2024 상반기 -",
            description_tags: ["Tauri", "React"],
            description_content: [
              "간단하게 주문을 확인할 수 있는 백그라운드 위젯 적용",
              "외부 배달대행 플랫폼 API 연동 및 주문 매크로 연동",
            ],
          },
          {
            description_title: "호텔 객실 스마트오더 솔루션 하이브리드 앱 개발",
            description_period: "2024 상반기 -",
            description_tags: ["React-Native", "React", "WebView"],
            description_content: [
              "카드 리더기를 통한 결제 기능 개발",
              "실시간 채팅 기능 및 알람 서비스 개발",
              "다국어 설정 기능 적용",
              "기기의 하드웨어적 기능 제어 및 조작 기능 개발",
            ],
          },
          {
            description_title: "주문 접수 관리 솔루션 POS 개발",
            description_period: "2023 하반기 - 2024 하반기",
            description_tags: ["React-Native"],
            description_content: [
              "로컬 DB를 활용하여 최소한의 서버 데이터 호출로 주문 주문 관리",
              "바코드 리더기 물리 키보드 등의 하드웨어 장비 연동 기능 개발",
            ],
          },
          {
            description_title: "Android TV DID 웹앱 개발",
            description_period: "2023 하반기 - 2024 상반기",
            description_tags: ["React-Native", "React", "WebView"],
            description_content: [
              "웹뷰로 리뉴얼하여 리모콘 조작 사용감 및 업데이트 편의성 개선",
            ],
          },
          {
            description_title: "사용자 개인 매장 웹페이지 개발",
            description_period: "2023 하반기",
            description_tags: ["React"],
            description_content: [
              "현재 위치를 기반으로 매장과의 거리를 측정, 최적화 데이터 제공",
              "백그라운드 푸시알림 기능 개발",
              "온라인 PG와 등록된 카드를 결제하는 빌링 결제를 통한 간편 결제 기능 개발",
            ],
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
        tags: ["Front-end", "NextJS", "tailwindCSS", "styled-components"],
        descriptions: ["서버 사이드 렌더링(SSR)을 적용하여 검색엔진 최적화"],
      },
      {
        career_title: "대학 통학 정보를 제공하는 크로스플랫폼 애플리케이션",
        url_path: null,
        career_period: "2022.10 - 2023.05",
        tags: ["Front-end", "React-Native", "styled-components", "open API"],
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
        tags: ["Front-end", "React-Native", "styled-components"],
        descriptions: [
          "예약 좌석을 시각적으로 보여주어 UI/UX 개선",
          "서버로부터 제공된 예약 정보를 분석하여 예약 가능 시간을 시각적으로 제공",
        ],
      },
      {
        career_title: "YOLO를 이용한 식단관리 안드로이드 애플리케이션",
        url_path: null,
        career_period: "2021.01 - 2022.10",
        tags: ["Front-end", "Kotlin", "YOLO AI"],
        descriptions: [
          "YOLO AI를 통해 카메라 촬영 이미지 내 음식 데이터 검출 및 데이터 적용",
          "사용자의 입력 데이터를 캘린더로 보여주고 피드백 기능 제공",
          "다수의 사용자 데이터 통계를 가공, 필터링 데이터를 차트로 보여주어 UX 개선",
        ],
      },
    ],
  },
];
