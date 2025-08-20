import { ProjectC } from "@/types/project";
import { User } from "@/types/user";
import CategoryBadge from "../common/CategoryBadge";
import TagBadge from "../common/TagBadge";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectC;
}

export default function FeaturedProjectCard({ project }: ProjectCardProps) {
  const { id, collaborators, projectThumbNailUrl, projectTitle, projectSummary, categories, tags } = project;
  const maxAvatarsToShow = 5; // Show more avatars on the larger card
  const remainingCollaborators = collaborators.length - maxAvatarsToShow;

  return (
    <div
      className="group relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-8 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      style={{ backgroundImage: `url(${projectThumbNailUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-colors duration-300 group-hover:from-black/80" />

      <div className="relative z-10 flex h-full flex-col">
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
                className="-ml-2 h-9 w-9 rounded-full border-2 border-white"
              />
            ))}
            {collaborators.length > maxAvatarsToShow && (
              <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-sm font-semibold">
                +{remainingCollaborators}
              </div>
            )}
          </div>
          <h3 className="mt-4 text-3xl font-bold">
            <Link href={`/projects/${id}`} className="after:absolute after:inset-0">
              {projectTitle}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-3 text-base">{projectSummary}</p>
          <ul className="relative z-10 mt-4 flex flex-wrap gap-2">
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
