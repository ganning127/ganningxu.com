"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FaGithub, FaLink } from "react-icons/fa6";
import { Link } from "../Typography/Link";
import { Project } from "@/interfaces/Project";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="h-32 md:h-58 relative cursor-pointer rounded-t-lg overflow-hidden">
              <Image
                src={project.img}
                alt={project.alt || project.title}
                fill
                className="object-cover"
              />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>{project.title}</DialogTitle>
            <Image
              src={project.img}
              alt={project.alt || project.title}
              width={500}
              height={500}
              className="object-cover"
            />
          </DialogContent>
        </Dialog>

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {project.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-sm">
            {project.text}
          </p>

          <div className="flex place-content-between items-center">
            <p className="text-sm p-1 bg-sky-100 rounded-md">
              {project.timeframe}
            </p>
            <div className="flex gap-3">
              {project.github && (
                <Link href={project.github}>
                  <FaGithub className="text-xl text-black hover:text-sky-500 hover:cursor-pointer" />
                </Link>
              )}
              {project.link && (
                <Link href={project.link}>
                  <FaLink className="text-xl text-black hover:text-sky-500 hover:cursor-pointer" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
