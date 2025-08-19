import MyPageTabs from "@/components/mypage/MyPageTabs";

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-neutral-100">
      <MyPageTabs />
      {children}
    </div>
  );
}
