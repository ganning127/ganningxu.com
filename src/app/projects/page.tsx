import React from "react";
import ProjectsJson from "@/data/projects.json";
import ProjectCategoryDescs from "@/data/project-category-desc.json";
import { Project } from "@/interfaces/Project";
import { ProjectSection } from "@/components/Sections/ProjectSection";
import { Metadata } from "next";
import { PageHeader } from "@/components/Sections/PageHeader";

const projectOrdering = ["web app", "website", "app", "bot"];
const typeToProjects: { [key: string]: Project[] } = {};
for (const project of ProjectsJson) {
  if (!typeToProjects[project.type]) {
    typeToProjects[project.type] = [];
  }
  typeToProjects[project.type].push(project);
}

const siteDesc = `So far, my projects fall into three categories: ${projectOrdering
  .map((type) => type + "s")
  .join(
    ", "
  )}. Perhaps this will expand in the future :) If you're interested in working on a project together, please reach out!`;

export const metadata: Metadata = {
  title: "Projects",
  description: siteDesc,
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Projects" desc={siteDesc} />

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
