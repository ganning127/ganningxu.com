import { Heading } from "@/components/Typography/Heading";
import { Link } from "@/components/Typography/Link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { UnorderedList } from "@/components/Typography/UnorderedList";
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
import { TimelineSection } from "@/components/Sections/TimelineSection";

const projectsToShow = [
  "Focale",
  "GT Academic Calendars",
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
            <Heading.H2 className="italic">TLDR...</Heading.H2>
            <TimelineSection />

            {/* <UnorderedList className="mt-2">
              <li>
                Studying CS at <b>Georgia Tech</b>
                <UnorderedList>
                  <li>CS 2110 (Computer Architecture) Teaching Assistant</li>
                  <li>
                    Technology Co-Director of HexLabs (we host HackGT for 1000+
                    students yearly)
                  </li>
                  <li>
                    <b>Apache Software Foundation</b> Committer for Apache
                    Airavata
                  </li>
                </UnorderedList>
              </li>
              <li>
                Interned at:
                <UnorderedList>
                  <li>
                    <b>Wealthfront</b> (2025 Summer)
                  </li>
                  <li>
                    <b>Fidelity Investments</b> (2024 Summer)
                  </li>
                  <li>
                    <b>iRODS</b> (2023 Summer)
                  </li>
                </UnorderedList>
              </li>
            </UnorderedList> */}
          </section>

          <section>
            <Heading.H2>The longer version</Heading.H2>
            <p className="mt-2">
              I&apos;m a Computer Science student at Georgia Tech with
              concentrations in{" "}
              <HoverCard>
                <HoverCardTrigger>Information Internetworks</HoverCardTrigger>
                <HoverCardContent>
                  <p>
                    <b>About:</b>
                  </p>
                  <UnorderedList>
                    <li>Cloud Computing</li>
                    <li>Networking</li>
                    <li>Security</li>
                    <li>Distributed Systems</li>
                  </UnorderedList>
                  <p className="mt-2">
                    <b>Link:</b>{" "}
                    <Link href="https://www.cc.gatech.edu/academics/threads/information-internetworks">
                      https://www.cc.gatech.edu/academics/threads/information-internetworks
                    </Link>
                  </p>
                </HoverCardContent>
              </HoverCard>{" "}
              and{" "}
              <HoverCard>
                <HoverCardTrigger>Systems &amp; Architecture</HoverCardTrigger>
                <HoverCardContent>
                  <p>
                    <b>About:</b>
                  </p>
                  <UnorderedList>
                    <li>Computer Architecture</li>
                    <li>Operating Systems</li>
                    <li>Compilers</li>
                    <li>Performance Optimization</li>
                    <li>Parallel Computing</li>
                  </UnorderedList>

                  <p className="mt-2">
                    <b>Link:</b>{" "}
                    <Link href="https://www.cc.gatech.edu/academics/threads/systems-architecture">
                      https://www.cc.gatech.edu/academics/threads/systems-architecture
                    </Link>
                  </p>
                </HoverCardContent>
              </HoverCard>
              . When I read my first programming book in 8th grade, I actually
              did not like it! It wasn&apos;t until one year later, during my
              9th grade first Python I class, that I realized my true passion:{" "}
              <em>
                I genuinely love building things that solve problems in my (and
                my friends) daily lives
              </em>
              . In the past, I&apos;ve built{" "}
              <Link href="https://chromewebstore.google.com/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc">
                Chrome extensions
              </Link>
              ,{" "}
              <Link href="https://www.thewanglab.org/">
                websites for local organizations
              </Link>
              , and{" "}
              <Link href="https://cybershuttle.org/">
                computational science tools
              </Link>
              . Currently, I&apos;m working on an app for cyclists to find
              nearby bicycle racks for bike parking.
            </p>
          </section>

          <section>
            <Heading.H2>Hackathons</Heading.H2>
            <p className="mt-2">
              We always spend a few all-nighters writing new features, chasing
              down bugs, and underestimating the size of our project. But, I
              wouldn&apos;t trade these experiences for anything else. From the
              people I&apos;ve met to the projects we build together, it&apos;s
              always so fun.
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
                description="From dawn to dusk :)"
                imgSrc="/images/beltline_cycling.jpg"
                href="/cycling"
              />
              <HobbyCard
                title="Airplanes"
                description="and aviation photography"
                imgSrc="/images/airplane_atl.jpg"
                href=""
              />
              <HobbyCard
                title="Traveling"
                description="Fun, fun, fun"
                imgSrc="/images/china_mountains.jpg"
                href=""
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
