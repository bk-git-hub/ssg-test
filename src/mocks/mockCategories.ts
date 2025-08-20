import { Category } from "@/types/category";

export const securityCategories: Category[] = [
  {
    id: "cat-001",
    slug: "web-hacking",
    categoryName: "웹 해킹",
    categorySummary:
      "웹 애플리케이션의 취약점을 분석하고 모의 해킹을 통해 방어 기술을 학습합니다. SQL Injection, XSS, CSRF 등을 다룹니다.",
    categoryProjectCount: 12,
    categoryArticleCount: 45,
  },
  {
    id: "cat-002",
    slug: "reversing",
    categoryName: "리버싱",
    categorySummary:
      "컴파일된 프로그램을 역으로 분석하여 원래의 소스 코드나 알고리즘을 파악하는 기술입니다. 악성코드 분석의 기초가 됩니다.",
    categoryProjectCount: 8,
    categoryArticleCount: 32,
  },
  {
    id: "cat-003",
    slug: "pwnable",
    categoryName: "포너블",
    categorySummary:
      "시스템 해킹의 꽃으로, 메모리 취약점(BoF, FSB 등)을 이용해 시스템의 실행 흐름을 제어하고 권한을 획득하는 기술을 연구합니다.",
    categoryProjectCount: 15,
    categoryArticleCount: 51,
  },
  {
    id: "cat-004",
    slug: "digital-forensics",
    categoryName: "디지털 포렌식",
    categorySummary:
      "컴퓨터나 디지털 저장 매체에 남아있는 정보를 수집, 분석하여 범죄의 단서를 찾는 과학적인 수사 기법을 배웁니다.",
    categoryProjectCount: 5,
    categoryArticleCount: 28,
  },
  {
    id: "cat-005",
    slug: "cryptography",
    categoryName: "암호학",
    categorySummary:
      "데이터를 안전하게 보호하기 위한 암호화 및 복호화 알고리즘의 원리를 탐구합니다. 현대 보안 시스템의 근간을 이룹니다.",
    categoryProjectCount: 7,
    categoryArticleCount: 40,
  },
  {
    id: "cat-006",
    slug: "network-security",
    categoryName: "네트워크 보안",
    categorySummary:
      "네트워크 통신 과정에서 발생할 수 있는 위협을 탐지하고, 방화벽, IDS/IPS 등의 보안 솔루션을 통해 이를 방어하는 방법을 학습합니다.",
    categoryProjectCount: 11,
    categoryArticleCount: 38,
  },
  {
    id: "cat-007",
    slug: "malware-analysis",
    categoryName: "악성코드 분석",
    categorySummary:
      "악성코드의 정적, 동적 분석을 통해 그 기능과 목적을 파악하고, 이를 무력화하거나 탐지하는 기술을 연구합니다.",
    categoryProjectCount: 9,
    categoryArticleCount: 35,
  },
  {
    id: "cat-008",
    slug: "mobile-hacking",
    categoryName: "모바일 해킹",
    categorySummary:
      "Android 및 iOS 플랫폼의 취약점을 분석하고, 모바일 앱의 보안 문제를 진단하며 안전한 앱 개발 방법을 학습합니다.",
    categoryProjectCount: 10,
    categoryArticleCount: 29,
  },
  {
    id: "cat-009",
    slug: "ctf",
    categoryName: "CTF",
    categorySummary:
      "해킹 대회 문제 풀이. 웹, 리버싱, 포너블 등 다양한 분야의 문제 해결을 통해 실전 감각과 문제 해결 능력을 기릅니다.",
    categoryProjectCount: 25,
    categoryArticleCount: 88,
  },
  {
    id: "cat-010",
    slug: "cloud-security",
    categoryName: "클라우드 보안",
    categorySummary:
      "AWS, Azure, GCP 등 클라우드 환경의 설정 오류와 취약점을 분석하고, 안전한 클라우드 인프라 구축 및 운영 방법을 다룹니다.",
    categoryProjectCount: 6,
    categoryArticleCount: 22,
  },
  {
    id: "cat-011",
    slug: "penetration-testing",
    categoryName: "침투 테스트",
    categorySummary:
      "실제 공격자의 관점에서 시스템, 네트워크, 애플리케이션에 대한 모의 해킹을 수행하여 보안 취약점을 식별하고 평가합니다.",
    categoryProjectCount: 13,
    categoryArticleCount: 30,
  },
  {
    id: "cat-012",
    slug: "bug-bounty",
    categoryName: "버그 바운티",
    categorySummary:
      "기업의 서비스에서 보안 취약점을 찾아내고 신고하여 포상금을 받는 활동입니다. 실존하는 서비스의 보안성을 높이는 데 기여합니다.",
    categoryProjectCount: 18,
    categoryArticleCount: 61,
  },
  {
    id: "cat-013",
    slug: "iot-security",
    categoryName: "IoT 보안",
    categorySummary:
      "스마트 홈, 산업용 센서 등 사물 인터넷 기기의 하드웨어 및 펌웨어 취약점을 분석하고 보안 대책을 연구합니다.",
    categoryProjectCount: 4,
    categoryArticleCount: 19,
  },
  {
    id: "cat-014",
    slug: "osint",
    categoryName: "OSINT",
    categorySummary:
      "웹, 소셜 미디어 등 공개된 정보 소스를 활용하여 특정 대상에 대한 정보를 수집하고 분석하는 기법을 학습합니다.",
    categoryProjectCount: 3,
    categoryArticleCount: 25,
  },
];
