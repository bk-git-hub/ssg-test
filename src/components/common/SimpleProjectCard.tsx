import { ProjectC } from "@/types/project";
import Link from "next/link";

interface SimpleProjectCardProps {
  project: ProjectC;
}

export default function SimpleProjectCard({ project }: SimpleProjectCardProps) {
  const { id, collaborators, projectThumbNailUrl, projectTitle } = project;

  return (
    <Link
      href={`/projects/${id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* --- Thumbnail --- */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={projectThumbNailUrl}
          alt={projectTitle}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* --- Content --- */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-bold">{projectTitle}</h3>

        {/* Collaborators */}
        <div className="mt-auto flex items-center pt-3">
          <div className="flex -space-x-2">
            {collaborators.map((user) => (
              <img
                key={user.id}
                src={user.profileImageUrl}
                alt={user.name}
                className="h-7 w-7 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
