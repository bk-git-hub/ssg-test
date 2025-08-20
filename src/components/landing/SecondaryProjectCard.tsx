import { ProjectC } from "@/types/project";
import { User } from "@/types/user";
import Link from "next/link";
import CategoryBadge from "../common/CategoryBadge";

interface ProjectCardProps {
  project: ProjectC;
}

export default function SecondaryProjectCard({ project }: ProjectCardProps) {
  const { id, collaborators, projectThumbNailUrl, projectTitle, categories } = project;

  return (
    <div
      className="group relative flex h-[200px] w-full flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-5 text-white shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${projectThumbNailUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <CategoryBadge key={category.categoryName} categoryName={category.categoryName} postType="projects" />
        ))}
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex items-center">
          {collaborators.slice(0, 3).map((user: User) => (
            <img
              key={user.id}
              src={user.profileImageUrl}
              alt={user.name}
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <h3 className="mt-3 text-xl font-bold">
          <Link href={`/projects/${id}`} className="after:absolute after:inset-0">
            {projectTitle}
          </Link>
        </h3>
      </div>
    </div>
  );
}
