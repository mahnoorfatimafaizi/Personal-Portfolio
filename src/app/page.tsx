"use client";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <Projects />
      <Certificates />
    </div>
  );
}
