import { ChevronDown } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-primary relative flex flex-col items-center justify-center px-6 py-24 text-center text-white">
      {/* 메인 문구 */}
      <h2 className="mb-4 flex text-4xl font-extrabold md:text-6xl">
        Welcome to <img src={"/logobbr.svg"} width={160} height={80} className="px-4" /> HUB
      </h2>

      {/* 서브 텍스트 */}
      <p className="mb-16 max-w-2xl text-lg text-gray-300 md:text-xl">
        SSG Hub에 오신 걸 환영합니다. 세종대학교 정보보안 동아리{" "}
        <span className="font-semibold text-white">Sejong Security Group(SSG)</span>의 공식 허브 사이트입니다. 정보보안
        학습자료, 프로젝트, 아티클을 공유하며 함께 성장하는 공간입니다.
      </p>

      {/* 스크롤 유도 아이콘 */}
      <div className="absolute bottom-6 flex flex-col items-center">
        <span className="mb-2 text-sm text-gray-400">Scroll Down</span>
        <ChevronDown size={32} className="animate-bounce text-white" />
      </div>

      {/* 배경 텍스처 (선택) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/network-pattern.svg')] bg-cover bg-center opacity-10"></div>
    </section>
  );
}
