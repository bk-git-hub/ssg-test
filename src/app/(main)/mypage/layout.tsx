import MyPageTabs from "@/components/mypage/MyPageTabs";

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-neutral-100 p-5">
      <div className="mx-auto flex w-full max-w-[1440px] px-4">
        <MyPageTabs />
        {children}
      </div>
    </div>
  );
}
