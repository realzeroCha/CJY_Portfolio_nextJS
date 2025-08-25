export type CareerListType = {
  title: string;
  careers: CareerType[];
};

export type CareerType = {
  career_title: string;
  url_path: string | null;
  career_period: string;
  descriptions: DescriptionType[] | string[];
};

export type DescriptionType = {
  description_title: string;
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

        descriptions: [
          {
            description_title: "WEB & Windows",
            description_content: [
              "React, NextJS 기반 웹서비스 및 Tauri 기반 Windows POS 프로그램 개발",
              "반응형 UI 구현 및 크로스 브라우징 테스트를 통한 유연성 향상",
            ],
          },
          {
            description_title: "MOBILE & TV",
            description_content: [
              "React-Native 기반 하이브리드 앱, Android TV DID 앱 개발",
              "PG 결제 연동, 바코드 리더기·카드 리더기 등의 하드웨어 제어 기능 개발",
            ],
          },
          {
            description_title: "주요 프로젝트 개발",
            description_content: [
              "반응형 UI, 다국어 지원 기능 구현",
              "외부 배달대행 플랫폼 API 연동 및 주문 매크로 연동",
              "WebSocket, WebRTC 기반 실시간 통신 기능 개발",
              "위치 기반 데이터 제공, Excel 통계 추출 기능 개발",
              "Google Analytics 등록 및 SEO 최적화",
            ],
          },
          {
            description_title: "성과 및 개선",
            description_content: [
              "미디어 쿼리를 이용한 반응형 웹 구현 및 크로스 브라우징 테스트를 통한 유연성 향상",
              "TanStack-Query 기반 상태 관리 및 아키텍처 재설계로 LCP·INP 성능 최적화",
              "Jest를 통한 테스트 개발 주도",
              "Google Analytics 등록 및 SEO 최적화",
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
        career_title: "Dynamic-list",
        url_path: null,
        career_period: "2025.06 - 2025.08",
        descriptions: [
          "React 라이브러리",
          "드래그 앤 드롭 기반의 동적인 변경이 가능한 리스트 제공",
        ],
      },
      {
        career_title: "포트폴리오 웹페이지",
        url_path: null,
        career_period: "2025.05 - 2025.08",
        descriptions: [
          "서버 사이드 렌더링(SSR)을 적용하여 검색엔진 최적화",
          "Three.js를 적용한 모델링 애니메이션 적용",
        ],
      },
      {
        career_title: "대학 통학 정보를 제공하는 애플리케이션",
        url_path: null,
        career_period: "2022.10 - 2023.05",
        descriptions: [
          "메트로 OPEN API를 통해 실시간 교통 상황 제공",
          "Google Maps API를 연동하여 지도 기반 데이터 제공",
          "WebSocket 실시간 채팅 기능 개발",
        ],
      },
      {
        career_title: "스터디카페 결제 및 좌석대여 크로스플랫폼 애플리케이션",
        url_path: null,
        career_period: "2023.01 - 2023.03",
        descriptions: [
          "예약 좌석을 시각적으로 보여주어 UI/UX 개선",
          "서버로부터 제공된 예약 가능 시간을 시각적으로 제공",
        ],
      },
      {
        career_title: "YOLO를 이용한 식단관리 Kotlin Android 애플리케이션",
        url_path: null,
        career_period: "2021.01 - 2022.10",
        descriptions: [
          "YOLO AI를 통해 이미지 음식 데이터 검출",
          "데이터 통계를 시각적 데이터로 제공",
        ],
      },
    ],
  },
];
