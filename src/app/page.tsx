import { Component } from "@/components/component";
import Image from "next/image";

export default function Home() {
  if (typeof window !== "undefined") {
    const tokenHistory = localStorage.getItem("TOKEN_HISTORY");
    if (tokenHistory) {
      console.log(JSON.parse(tokenHistory));
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center min-w-screen">
      <Component />
    </main>
  );
}
