import React from "react";
import ProjectsJson from "@/data/projects.json";
import ProjectCategoryDescs from "@/data/project-category-desc.json";
import { Heading } from "@/components/Typography/Heading";
import { Project } from "@/interfaces/Project";
import { ProjectSection } from "@/components/Sections/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  const projectOrdering = ["web app", "website", "app", "bot"];
  const typeToProjects: { [key: string]: Project[] } = {};
  for (const project of ProjectsJson) {
    if (!typeToProjects[project.type]) {
      typeToProjects[project.type] = [];
    }
    typeToProjects[project.type].push(project);
  }

  return (
    <div className="flex flex-col gap-8">
      <Heading.H1>Projects</Heading.H1>
      <p>
        So far, my projects fall into three categories:{" "}
        <b>{projectOrdering.map((type) => type + "s").join(", ")}</b>. Perhaps
        this will expand in the future :) If you&apos;re interested in working
        on a project together, please reach out!
      </p>
      <div className="flex flex-col gap-8">
        {projectOrdering.map((type) => (
          <ProjectSection
            type={type}
            projects={typeToProjects[type]}
            desc={
              ProjectCategoryDescs[type as keyof typeof ProjectCategoryDescs]
            }
            key={type}
          />
        ))}
      </div>
    </div>
  );
}
