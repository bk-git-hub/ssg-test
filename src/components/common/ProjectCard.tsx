import { ProjectCard as ProjectCardType } from "@/types/project";
import { User } from "@/types/user";
import CategoryBadge from "../common/CategoryBadge";
import TagBadge from "../common/TagBadge";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectCardType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, collaborators, projectThumbNailUrl, projectTitle, projectSummary, categories, tags } = project;
  const maxAvatarsToShow = 3;
  const remainingCollaborators = collaborators.length - maxAvatarsToShow;

  return (
    // 1. Resized the main container
    <div
      className="group relative flex h-[368px] w-[352px] flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-5 text-white shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${projectThumbNailUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-colors duration-300 group-hover:from-black/80" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative z-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <CategoryBadge key={category.categoryName} categoryName={category.categoryName} postType="projects" />
          ))}
        </div>

        <div className="mt-auto">
          {/* 2. Resized the avatars */}
          <div className="flex items-center">
            {collaborators.slice(0, maxAvatarsToShow).map((user: User) => (
              <img
                key={user.id}
                src={user.profileImageUrl}
                alt={user.name}
                className="-ml-2 h-7 w-7 rounded-full border-2 border-white" // h-8 w-8 -> h-7 w-7
              />
            ))}
            {collaborators.length > maxAvatarsToShow && (
              <div className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-[10px] font-semibold">
                {" "}
                {/* Resized and font size down */}+{remainingCollaborators}
              </div>
            )}
          </div>
          {/* 3. Resized text and spacing */}
          <h3 className="mt-3 text-xl font-bold">
            {" "}
            {/* mt-4 -> mt-3, text-2xl -> text-xl */}
            <Link href={`/projects/${id}`} className="after:absolute after:inset-0">
              {projectTitle}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-2 text-xs">{projectSummary}</p> {/* text-sm -> text-xs */}
          <ul className="relative z-10 mt-2 flex flex-wrap gap-1.5">
            {" "}
            {/* mt-3 -> mt-2, gap-2 -> gap-1.5 */}
            {tags.map((tag) => (
              <li key={tag}>
                <TagBadge tagName={tag} postType="projects" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
