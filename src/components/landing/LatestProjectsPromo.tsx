import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ShowAllLink from "../common/ShowAllLink";

export default function LatestProjectPromo() {
  return (
    <div className="flex h-full flex-1 flex-col justify-around rounded-2xl p-6">
      <div>
        <h2 className="text-5xl font-extrabold tracking-tight">
          LATEST
          <br />
          PROJECTS
        </h2>
        <p className="mt-4 text-gray-600">SSG에서 진행된 최신 프로젝트를 확인해보세요.</p>
      </div>

      <ShowAllLink href="projects" />
    </div>
  );
}
