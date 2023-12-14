import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import promptaiImg from "@/public/promptai.png";
import shopwiseImg from "@/public/shopwise.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Uni",
    location: "Romania, TM",
    description:
      "I graduated The West University of Timișoara in 2023",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
 
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopWise",
    href: "https://shopwise-mocha.vercel.app/",
    description:
      "Keep updated on price changes for your favourite amazon products.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind", "Cheerio", "BrightData", "CronJob"],
    imageUrl: shopwiseImg,
  },
  {
    title: "PromptAi",
    href:"https://project-prompt-ai-two.vercel.app/",
    description:
      "Web app to share creative prompt you used with chatGPT",
    tags: ["React",  "Next.js", "Tailwind", "MongoDB", "Next-Auth"],
    imageUrl: promptaiImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "FramerMotion",
  "Java",
  "C/C++",
  "GDScript"
] as const;
