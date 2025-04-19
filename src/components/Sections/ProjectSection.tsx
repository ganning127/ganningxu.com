"use client";

import { useState } from "react";
import { Project } from "@/interfaces/Project";
import { ProjectCard } from "../Cards/ProjectCard";
import { Button } from "../ui/button";

export const ProjectSection = ({
  type,
  projects,
}: {
  type: string;
  projects: Project[];
}) => {
  const [showAll, setShowAll] = useState(false);

  const capitalizedType = type.charAt(0).toLocaleUpperCase() + type.slice(1);
  const displayedProjects = showAll
    ? [...projects].reverse()
    : [...projects].reverse().slice(0, 3);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">{capitalizedType}s</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={{ ...project, alt: "" }} />
        ))}
      </div>

      {projects.length > 3 && (
        <Button
          variant="outline"
          className="hover:cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            "Show Less"
          ) : (
            <span>
              Show all {type}s ({projects.length} total)
            </span>
          )}
        </Button>
      )}
    </div>
  );
};
