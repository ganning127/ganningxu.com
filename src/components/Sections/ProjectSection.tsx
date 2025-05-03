"use client";

import { useState } from "react";
import { Project } from "@/interfaces/Project";
import { ProjectCard } from "../Cards/ProjectCard";
import { Button } from "../ui/button";

export const ProjectSection = ({
  type,
  desc,
  projects,
}: {
  type: string;
  desc: string;
  projects: Project[];
}) => {
  const maxShow = 4;
  const [showAll, setShowAll] = useState(false);
  const capitalizedType = type.charAt(0).toLocaleUpperCase() + type.slice(1);
  const displayedProjects = showAll
    ? [...projects].reverse()
    : [...projects].reverse().slice(0, maxShow);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">{capitalizedType}s</h2>
      <p className="text-gray-600">{desc}</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={{ ...project, alt: "" }} />
        ))}
      </div>

      {projects.length > maxShow && (
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
