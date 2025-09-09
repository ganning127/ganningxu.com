"use client";

import { useState } from "react";
import { Heading } from "../Typography/Heading";
import { Button } from "../ui/button";
import { TimelineSection } from "./TimelineSection";
import { Link } from "../Typography/Link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { UnorderedList } from "../Typography/UnorderedList";

export function IntroSection() {
  const [showLonger, setShowLonger] = useState(false);
  return (
    <>
      <Heading.H2 className="italic">
        {showLonger ? "Nice to meet you!" : "TLDR..."}
      </Heading.H2>
      <Button
        variant={"link"}
        className="p-0 text-sky-600 hover:text-sky-800 hover:cursor-pointer"
        onClick={() => setShowLonger(!showLonger)}
      >
        see the {showLonger ? "shorter" : "longer"} version
      </Button>

      {showLonger ? (
        <section>
          <p>
            I&apos;m an undergraduate Computer Science student at the{" "}
            <Link href="https://www.gatech.edu/">
              Georgia Institute of Technology,
            </Link>{" "}
            specializing in{" "}
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
            . I started programming when Covid-19 hit, building my first
            project: coronavirus tracker that texted my phone about the number
            of new cases daily in North Carolina (where I live), and in the USA.
            Building this tool taught me my true passion:{" "}
            <em>building things that solve real-world problems</em>.
            <br />
            <br />
            Then, I fell in love with building websites. After learning the
            basics, I built websites for local organizations, including the{" "}
            <Link href="https://thewanglab.org/">
              University of North Carolina at Wilmington&apos;s Wang Lab
            </Link>
            , <Link href="https://bitproject.org/">Bit Project</Link>, and{" "}
            <Link href="https://valencerobotics.com/">Valence Robotics</Link>.
            <br />
            <br />
            Then, I wanted to build dynamic web applications. After applying to
            hundreds of internships, and needing to customize my resume for each
            one, I built{" "}
            <Link href="https://github.com/kambhani/aire">
              an AI tool that customizes your resume (with your own experiences)
              for each job application
            </Link>
            . Around this time, I also realized there were not many study timer
            Chrome extensions. So I built one myself:{" "}
            <Link href="https://chromewebstore.google.com/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc">
              Focale
            </Link>{" "}
            is a study timer Chrome extension that tracks total time studied,
            blocks distracting websites, and sends you focus reminders. This
            Chrome extension now has over 1,000 active users.
            <br />
            <br />
            Recently, frustrated by scrolling through a long list of dates, I
            built{" "}
            <Link href="https://gtacademiccalendar.ganningxu.com/">
              a better way to view Georgia Tech&apos;s academic calendar
            </Link>
            . Additionally, upperclassmen often have advice on specific classes
            they can share with new students, so I built a{" "}
            <Link href="https://gtclassreviews.ganningxu.com/">
              class review system
            </Link>{" "}
            for students to share how to best succeed in each class.
            <br />
            <br />
            Overall, across all my projects, I still hold the principle of
            building things that solve real-world problems very close to my
            heart. I&apos;m always thinking about how I can use technology to
            make people&apos;s lives easier. If you have any ideas or would like
            to chat, please don&apos;t hesitate to{" "}
            <Link href="mailto:ganning.xu@gatech.edu">reach out!</Link>
          </p>
        </section>
      ) : (
        <TimelineSection />
      )}
    </>
  );
}
