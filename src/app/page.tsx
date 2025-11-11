import { Heading } from "@/components/Typography/Heading";
import { Link } from "@/components/Typography/Link";
import TiltImage from "@/components/TiltImage";
import { HobbyCard } from "@/components/Cards/HobbyCard";
import { ProjectCard } from "@/components/Cards/ProjectCard";

import ProjectsJson from "@/data/projects.json";
import LanguagesJson from "@/data/languages.json";
import HackathonsJson from "@/data/hackathons.json";

import { LanguageCard } from "@/components/Cards/LanguageCard";
import { MdMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Hackathoncard } from "@/components/Cards/HackathonCard";
import { IntroSection } from "@/components/Sections/IntroSection";

const projectsToShow = [
  "Bike Rack Finder",
  "Flight Time Remaining",
  "Cybershuttle Local Agent",
];

export default function Home() {
  const projects = ProjectsJson.filter((project) =>
    projectsToShow.includes(project.title)
  );

  return (
    <>
      <main>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center gap-4">
            <TiltImage />

            <div>
              <h1 className="text-3xl md:text-5xl">
                Hi, I&apos;m <span className="text-sky-500">Ganning Xu</span>
              </h1>
              <div className="flex flex-row gap-4 mt-2">
                <Link href="mailto:ganning.xu@gatech.edu">
                  <MdMailOutline className="text-2xl text-black hover:text-sky-600" />
                </Link>
                <Link href="https://github.com/ganning127">
                  <FaGithub className="text-2xl text-black hover:text-sky-600" />
                </Link>
                <Link href="https://www.linkedin.com/in/ganningxu/">
                  <FaLinkedin className="text-2xl text-black hover:text-sky-600" />
                </Link>
              </div>
            </div>
          </div>

          <section>
            <IntroSection />
          </section>

          <section>
            <Heading.H2>Hackathons</Heading.H2>
            <p className="mt-2">
              I&apos;ve pulled an unhealthy amount of all-nighters writing new
              features, chasing down bugs, and enjoying free food at hackathons.
              But, I wouldn&apos;t trade these experiences for anything else.
              From the lifelong friends I&apos;ve made to the projects we built
              together, the memories are priceless.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {HackathonsJson.map((hackathon) => (
                <Hackathoncard
                  key={hackathon.hackathon}
                  hackathon={hackathon}
                />
              ))}
            </div>
          </section>

          <section>
            <Heading.H2>Projects</Heading.H2>
            <p className="mt-2">
              For a full list of my projects, check out my{" "}
              <Link href="/projects">projects page</Link>!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={{
                    ...project,
                    alt: project.alt || "",
                  }}
                />
              ))}
            </div>
          </section>

          <section>
            <Heading.H2>Languages</Heading.H2>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {LanguagesJson.map((language) => (
                <LanguageCard key={language.title} info={language} />
              ))}
            </div>
          </section>

          <section>
            <Heading.H2>Hobbies</Heading.H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <HobbyCard
                title="Cycling"
                description="from dawn to dusk :)"
                imgSrc="/images/beltline_cycling.jpg"
                href="/cycling"
              />
              <HobbyCard
                title="Traveling"
                description="fun, fun, fun"
                imgSrc="/images/china_mountains.jpg"
                href="/traveling"
              />
              <HobbyCard
                title="Aviation"
                description="and aviation photography"
                imgSrc="/images/airplane_atl.jpg"
                href="/aviation"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
