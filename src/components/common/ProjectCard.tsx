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
    // 1. The main container is now a `div` with 'relative' and 'group'.
    // 'group' allows us to change styles on children when the parent is hovered.
    <div
      className="group relative flex h-[400px] w-[384px] flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${projectThumbNailUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-colors duration-300 group-hover:from-black/80" />

      <div className="relative z-10 flex h-full flex-col">
        {/* 3. The category and tag containers need 'relative' and 'z-10' to be clickable on top of the stretched link. */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <CategoryBadge key={category.categoryName} categoryName={category.categoryName} postType="projects" />
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex items-center">
            {collaborators.slice(0, maxAvatarsToShow).map((user: User) => (
              <img
                key={user.id}
                src={user.profileImageUrl}
                alt={user.name}
                className="-ml-2 h-8 w-8 rounded-full border-2 border-white"
              />
            ))}
            {collaborators.length > maxAvatarsToShow && (
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-semibold">
                +{remainingCollaborators}
              </div>
            )}
          </div>

          <h3 className="mt-4 text-2xl font-bold">
            {/* 2. The title is now the primary link. The 'after:*' classes create the invisible overlay. */}
            <Link href={`/projects/${id}`} className="after:absolute after:inset-0">
              {projectTitle}
            </Link>
          </h3>

          <p className="mt-1 line-clamp-2 text-sm">{projectSummary}</p>

          {/* 3. This container also needs 'relative' and 'z-10' to be clickable. */}
          <ul className="relative z-10 mt-3 flex flex-wrap gap-2">
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
