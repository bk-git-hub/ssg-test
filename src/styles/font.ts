import localFont from "next/font/local";

export const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920", // 가변 폰트의 두께 범위
  variable: "--font-pretendard", // CSS 변수 방식으로 사용
});
