import { Article } from "@/types/article";
import { Category } from "@/types/category";

// Sample categories to be used in the articles
const sampleCategories: Category[] = [
  {
    categoryName: "웹 해킹",
    categorySummary: "웹 애플리ケーション의 취약점을 분석합니다.",
    categoryProjectCount: 12,
    categoryArticleCount: 45,
    slug: "dd",
    id: "dd",
  },
  {
    categoryName: "리버싱",
    categorySummary: "컴파일된 프로그램을 역으로 분석합니다.",
    categoryProjectCount: 8,
    categoryArticleCount: 32,
    slug: "dd",
    id: "dd",
  },
  {
    categoryName: "포너블",
    categorySummary: "메모리 취약점을 이용해 시스템 권한을 획득합니다.",
    categoryProjectCount: 15,
    categoryArticleCount: 51,
    slug: "dd",
    id: "dd",
  },
  {
    categoryName: "악성코드 분석",
    categorySummary: "악성코드의 기능과 목적을 파악하고 분석합니다.",
    categoryProjectCount: 9,
    categoryArticleCount: 35,
    slug: "dd",
    id: "dd",
  },
];

export const mockArticles: Article[] = [
  {
    id: "article-013",
    title: "DLL Injection 기법을 이용한 프로세스 제어",
    categories: [sampleCategories[1], sampleCategories[3]],
    tags: ["Reversing", "Windows", "DLL Injection"],
    description:
      "실행 중인 다른 프로세스에 특정 DLL 파일을 강제로 삽입하여 원하는 코드를 실행시키는 DLL Injection의 다양한 기법들을 알아봅니다.",
    authorName: "박지훈", // Reusing an author
    thumbnailUrl: "https://picsum.photos/seed/dll/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=jihoon",
    createdAt: "2025-07-11T23:00:00Z",
    likeCount: 222,
    commentCount: 31,
  },
  {
    id: "article-014",
    title: "JSON Web Token (JWT)의 구조와 보안 취약점",
    categories: [sampleCategories[0]],
    tags: ["JWT", "API Security", "Authentication"],
    description:
      "Stateless 인증 방식인 JWT의 구조(Header, Payload, Signature)를 이해하고, 서명 검증 우회(alg:none), 시크릿 키 추측 등 주요 보안 취약점을 분석합니다.",
    authorName: "최수빈", // Reusing an author
    thumbnailUrl: "https://picsum.photos/seed/jwt/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=subin",
    createdAt: "2025-07-10T15:15:15Z",
    likeCount: 280,
    commentCount: 48,
  },
  {
    id: "article-015",
    title: "웹쉘(Webshell) 탐지 및 대응 방안",
    categories: [sampleCategories[0], sampleCategories[3]],
    tags: ["Webshell", "Incident Response", "Server Security"],
    description:
      "웹 서버에 업로드되어 원격 명령을 실행하는 웹쉘의 종류와 난독화 기법, 그리고 시그니처 기반 및 행위 기반 탐지 시스템의 원리를 설명합니다.",
    authorName: "정하윤", // Reusing an author
    thumbnailUrl: "https://picsum.photos/seed/webshell/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=hayoon",
    createdAt: "2025-07-08T20:20:20Z",
    likeCount: 165,
    commentCount: 20,
  },
];

/*
  {
    id: "article-001",
    title: "SQL Injection A-Z: 기본 원리부터 우회 기법까지",
    categories: [sampleCategories[0]],
    tags: ["SQL Injection", "Web Security", "Database"],
    description:
      "가장 기본적인 웹 취약점인 SQL Injection의 동작 원리를 이해하고, 최신 WAF를 우회하는 다양한 기법들을 알아봅니다.",
    authorName: "김민준",
    thumbnailUrl: "https://picsum.photos/seed/sql/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=minjun",
    createdAt: "2025-08-15T14:30:00Z",
    likeCount: 128,
    commentCount: 15,
  },
  {
    id: "article-002",
    title: "x64 어셈블리 기초와 리버싱 시작하기",
    categories: [sampleCategories[1]],
    tags: ["Reversing", "Assembly", "x64"],
    description:
      "실행 파일 분석의 첫 걸음, x64 아키텍처에서의 어셈블리어와 GDB, IDA Pro와 같은 디버깅 도구 사용법을 익힙니다.",
    authorName: "이서연",
    thumbnailUrl: "https://picsum.photos/seed/asm/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=seoyeon",
    createdAt: "2025-08-12T11:20:15Z",
    likeCount: 256,
    commentCount: 32,
  },
  {
    id: "article-003",
    title: "Heap Exploitation 입문: Use-After-Free (UAF) 이해하기",
    categories: [sampleCategories[2]],
    tags: ["Pwnable", "System Hacking", "UAF"],
    description:
      "동적 메모리 할당 영역인 힙(Heap)에서 발생하는 Use-After-Free 취약점의 원리와 이를 이용한 공격 코드 작성법을 다룹니다.",
    authorName: "박지훈",
    thumbnailUrl: "https://picsum.photos/seed/heap/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=jihoon",
    createdAt: "2025-08-10T09:00:00Z",
    likeCount: 98,
    commentCount: 22,
  },
  {
    id: "article-004",
    title: "랜섬웨어 동작 방식 분석 및 예방 대책",
    categories: [sampleCategories[3]],
    tags: ["Malware", "Ransomware", "Cybersecurity"],
    description:
      "최근 유행하는 랜섬웨어 샘플을 직접 분석하여 파일 암호화 과정과 C2 서버 통신 방식을 알아보고, 효과적인 예방책을 제시합니다.",
    authorName: "최수빈",
    thumbnailUrl: "https://picsum.photos/seed/ransom/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=subin",
    createdAt: "2025-08-09T18:45:00Z",
    likeCount: 177,
    commentCount: 41,
  },
  {
    id: "article-005",
    title: "Cross-Site Scripting (XSS) 유형별 시나리오 분석",
    categories: [sampleCategories[0]],
    tags: ["XSS", "Web Security", "Frontend"],
    description:
      "Stored, Reflected, DOM-based XSS의 차이점을 명확히 이해하고, 실제 서비스에서 발생할 수 있는 공격 시나리오를 통해 대응 방안을 모색합니다.",
    authorName: "정하윤",
    thumbnailUrl: "https://picsum.photos/seed/xss/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=hayoon",
    createdAt: "2025-08-05T22:10:00Z",
    likeCount: 215,
    commentCount: 28,
  },
  {
    id: "article-006",
    title: "패커(Packer) 분석: UPX 언패킹 완벽 가이드",
    categories: [sampleCategories[1]],
    tags: ["Reversing", "Unpacking", "UPX"],
    description:
      "악성코드 분석의 기본, 실행 압축 라이브러리인 UPX의 원리를 이해하고, 수동 및 자동 언패킹 기법을 상세히 설명합니다.",
    authorName: "강도현",
    thumbnailUrl: "https://picsum.photos/seed/upx/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=dohyun",
    createdAt: "2025-07-30T13:00:00Z",
    likeCount: 89,
    commentCount: 12,
  },
  {
    id: "article-007",
    title: "Return Oriented Programming (ROP) 기초 다지기",
    categories: [sampleCategories[2]],
    tags: ["Pwnable", "ROP", "Exploit"],
    description:
      "NX-bit 보호 기법을 우회하기 위한 ROP 공격의 개념을 배우고, 가젯(Gadget)을 수집하여 원하는 코드를 실행하는 과정을 실습합니다.",
    authorName: "윤지우",
    thumbnailUrl: "https://picsum.photos/seed/rop/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=jiwoo",
    createdAt: "2025-07-28T16:25:00Z",
    likeCount: 301,
    commentCount: 55,
  },
  {
    id: "article-008",
    title: "OAuth 2.0 인증 흐름의 보안 취약점 파헤치기",
    categories: [sampleCategories[0]],
    tags: ["OAuth", "API Security", "Authentication"],
    description:
      "널리 사용되는 OAuth 2.0 인증 방식에서 발생할 수 있는 CSRF, Redirect URI 변조 등의 보안 취약점과 대응 방안을 알아봅니다.",
    authorName: "임서준",
    thumbnailUrl: "https://picsum.photos/seed/oauth/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=seojun",
    createdAt: "2025-07-25T10:00:00Z",
    likeCount: 150,
    commentCount: 19,
  },
  {
    id: "article-009",
    title: "리눅스 커널 익스пло잇 환경 구축과 첫 취약점 분석",
    categories: [sampleCategories[2]],
    tags: ["Kernel Exploit", "Linux", "Pwnable"],
    description:
      "리눅스 커널의 취약점을 분석하고 공격 코드를 작성하기 위한 QEMU 기반의 가상 환경 구축 방법과 간단한 커널 모듈 분석 과정을 소개합니다.",
    authorName: "한지아",
    thumbnailUrl: "https://picsum.photos/seed/kernel/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=jia",
    createdAt: "2025-07-22T19:50:00Z",
    likeCount: 199,
    commentCount: 34,
  },
  {
    id: "article-010",
    title: "동적 분석을 통한 안드로이드 악성 앱 행위 분석",
    categories: [sampleCategories[3]],
    tags: ["Android", "Malware Analysis", "Mobile Security"],
    description:
      "Frida와 같은 동적 분석 도구를 사용하여 실제 안드로이드 악성 앱의 네트워크 통신, 파일 시스템 접근 등 숨겨진 행위를 추적합니다.",
    authorName: "오은우",
    thumbnailUrl: "https://picsum.photos/seed/android/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=eunwoo",
    createdAt: "2025-07-20T12:00:00Z",
    likeCount: 133,
    commentCount: 18,
  },
  {
    id: "article-011",
    title: "Server-Side Request Forgery (SSRF) 공격 기법과 방어",
    categories: [sampleCategories[0]],
    tags: ["SSRF", "Web Security", "Cloud Security"],
    description:
      "공격자가 서버로 하여금 임의의 요청을 보내게 하는 SSRF 취약점의 원리와, 이를 통해 내부 시스템을 스캔하거나 클라우드 메타데이터를 탈취하는 공격 사례를 분석합니다.",
    authorName: "김민준", // Reusing an author
    thumbnailUrl: "https://picsum.photos/seed/ssrf/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=minjun",
    createdAt: "2025-07-18T08:30:00Z",
    likeCount: 240,
    commentCount: 40,
  },
  {
    id: "article-012",
    title: "Format String Bug (FSB) 취약점 완벽 이해",
    categories: [sampleCategories[2]],
    tags: ["Pwnable", "FSB", "Memory Corruption"],
    description:
      "printf와 같은 함수에서 포맷 스트링을 잘못 사용했을 때 발생하는 FSB 취약점의 원리와 메모리 읽기/쓰기 공격 기법을 실습합니다.",
    authorName: "이서연", // Reusing an author
    thumbnailUrl: "https://picsum.photos/seed/fsb/400/300",
    authorProfileImageUrl: "https://i.pravatar.cc/150?u=seoyeon",
    createdAt: "2025-07-15T17:00:00Z",
    likeCount: 184,
    commentCount: 25,
  },
  */
