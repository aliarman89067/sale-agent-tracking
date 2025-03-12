"use client";
import { EmptyPaperPlaneCTA } from "@/components/EmptyPaperPlaneCTA";
import React from "react";

const Organizations = () => {
  const isUser = false;
  return (
    <section className="max-w-screen-xl w-full mx-auto">
      {isUser ? (
        <div></div>
      ) : (
        <EmptyPaperPlaneCTA title="Create Your First Organization" />
      )}
    </section>
  );
};

export default Organizations;
