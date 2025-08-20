import { ProjectCard } from "@/types/project";
import { mockUsers } from "./mockUsers"; // Import your mock users
import { securityCategories } from "./mockCategories"; // Import your sample categories

export const mockProjects: ProjectCard[] = [
  {
    id: "proj-011",
    projectTitle: "Open Source Intelligence (OSINT) Dashboard",
    projectSummary:
      "A web-based dashboard that aggregates and visualizes publicly available data from various online sources for security analysis.",
    collaborators: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3], mockUsers[4], mockUsers[5], mockUsers[6]],
    projectThumbNailUrl: "https://picsum.photos/seed/osint/400/300",
    categories: [securityCategories[3]], // Assuming this category exists
    tags: ["OSINT", "Data Visualization", "React", "Dashboard"],
  },
  {
    id: "proj-001",
    projectTitle: "SSG Hub: 동아리 협업 플랫폼",
    projectSummary:
      "Next.js와 TypeScript를 사용하여 동아리 회원들의 프로젝트 관리, 아티클 공유, 지식 교류를 돕는 통합 협업 플랫폼을 구축합니다.",
    collaborators: [mockUsers[0], mockUsers[1], mockUsers[2]],
    projectThumbNailUrl: "https://picsum.photos/seed/ssghub/400/300",
    categories: [securityCategories[0], securityCategories[2]],
    tags: ["Next.js", "TypeScript", "Collaboration", "Platform"],
  },
  {
    id: "proj-002",
    projectTitle: "자동화된 웹 취약점 스캐너",
    projectSummary:
      "Python 기반의 스캐너로, 지정된 웹사이트의 SQL Injection, XSS 등 주요 취약점을 자동으로 탐지하고 리포트를 생성합니다.",
    collaborators: [mockUsers[3], mockUsers[4]],
    projectThumbNailUrl: "https://picsum.photos/seed/scanner/400/300",
    categories: [securityCategories[0]],
    tags: ["Python", "Web Security", "Automation", "Scanner"],
  },
  {
    id: "proj-003",
    projectTitle: "악성코드 동적 분석 샌드박스",
    projectSummary:
      "Cuckoo Sandbox를 커스터마이징하여, 의심스러운 파일을 격리된 환경에서 실행하고 그 행위를 상세히 로깅하는 시스템을 구축합니다.",
    collaborators: [mockUsers[5], mockUsers[6], mockUsers[7]],
    projectThumbNailUrl: "https://picsum.photos/seed/sandbox/400/300",
    categories: [securityCategories[1], securityCategories[3]],
    tags: ["Malware Analysis", "Sandbox", "Virtualization"],
  },
  {
    id: "proj-004",
    projectTitle: "CTF 문제 풀이 플랫폼",
    projectSummary:
      "해킹 대회(CTF) 문제들을 출제하고, 사용자들이 직접 풀어보며 순위를 경쟁할 수 있는 웹 기반의 교육용 플랫폼입니다.",
    collaborators: [mockUsers[8], mockUsers[9]],
    projectThumbNailUrl: "https://picsum.photos/seed/ctf/400/300",
    categories: [securityCategories[0], securityCategories[2]],
    tags: ["CTF", "Education", "Gamification"],
  },
  {
    id: "proj-005",
    projectTitle: "리눅스 커널 익스플로잇 연구",
    projectSummary:
      "최신 리눅스 커널의 CVE(보안 취약점)를 분석하고, 해당 취약점을 트리거하여 권한 상승을 시도하는 PoC 코드를 작성합니다.",
    collaborators: [mockUsers[1], mockUsers[5]],
    projectThumbNailUrl: "https://picsum.photos/seed/kernelpwn/400/300",
    categories: [securityCategories[2]],
    tags: ["Linux", "Kernel", "Exploit", "Pwnable"],
  },
  {
    id: "proj-006",
    projectTitle: "안드로이드 앱 모의 침투 테스트",
    projectSummary:
      "Frida와 MobSF를 활용하여 실제 금융 앱의 보안을 진단하고, API 통신 암호화, 루팅 탐지 우회 등의 취약점을 분석합니다.",
    collaborators: [mockUsers[0], mockUsers[3], mockUsers[8]],
    projectThumbNailUrl: "https://picsum.photos/seed/androidsec/400/300",
    categories: [securityCategories[1]],
    tags: ["Android", "Mobile Security", "Pentesting"],
  },
  {
    id: "proj-007",
    projectTitle: "AI 기반 피싱 이메일 탐지 시스템",
    projectSummary:
      "자연어 처리(NLP) 모델을 학습시켜, 이메일의 내용과 헤더를 분석하고 피싱 사기일 확률을 실시간으로 계산하는 시스템을 개발합니다.",
    collaborators: [mockUsers[2], mockUsers[6]],
    projectThumbNailUrl: "https://picsum.photos/seed/phishingai/400/300",
    categories: [securityCategories[3]],
    tags: ["AI", "NLP", "Phishing", "Machine Learning"],
  },
  {
    id: "proj-008",
    projectTitle: "JWT 인증 라이브러리 보안 감사",
    projectSummary:
      "널리 사용되는 오픈소스 JWT 라이브러리의 코드를 분석하여, 서명 위조(alg:none), 키 혼동 등 알려진 취약점이 존재하는지 감사합니다.",
    collaborators: [mockUsers[4], mockUsers[7]],
    projectThumbNailUrl: "https://picsum.photos/seed/jwtsec/400/300",
    categories: [securityCategories[0]],
    tags: ["JWT", "Security Audit", "Open Source"],
  },
  {
    id: "proj-009",
    projectTitle: "Windows API 후킹을 통한 악성 행위 탐지",
    projectSummary:
      "Windows OS의 핵심 API 호출을 후킹(Hooking)하여, 랜섬웨어나 키로거와 같은 악성 프로그램의 특정 행위를 사전에 탐지하고 차단합니다.",
    collaborators: [mockUsers[9], mockUsers[0]],
    projectThumbNailUrl: "https://picsum.photos/seed/apihook/400/300",
    categories: [securityCategories[1], securityCategories[3]],
    tags: ["Windows", "Reversing", "EDR"],
  },
  {
    id: "proj-010",
    projectTitle: "블록체인 스마트 컨트랙트 취약점 분석",
    projectSummary:
      "Solidity로 작성된 이더리움 스마트 컨트랙트의 코드에서 Re-entrancy, 정수 오버플로우 등의 잠재적 취약점을 찾아내는 정적 분석 도구를 개발합니다.",
    collaborators: [mockUsers[1], mockUsers[8]],
    projectThumbNailUrl: "https://picsum.photos/seed/solidity/400/300",
    categories: [securityCategories[2]],
    tags: ["Blockchain", "Smart Contract", "Solidity"],
  },
];
