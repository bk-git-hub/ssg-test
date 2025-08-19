import ActivitiesTabs from "@/components/mypage/ActivitiesTab";

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl font-bold">나의 활동</h2>
      <ActivitiesTabs />

      <div>{children}</div>
    </div>
  );
}
