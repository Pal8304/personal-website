"use client";
import { useGSAP } from "@gsap/react";
import BlogLink from "./blog-link";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogList({
  blogs,
}: {
  blogs: {
    title: string;
    subtitle: string;
    slug: string;
    date: string;
    tags: string[];
  }[];
}) {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const el = container.current;
      if (!el) return;

      const blogWrappers = Array.from(
        el.querySelectorAll<HTMLElement>(".blog-link-wrapper"),
      );

      const tl = gsap.timeline();

      tl.from(blogWrappers, {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });

      blogWrappers.forEach((wrapper) => {
        const tags = wrapper.querySelectorAll<HTMLElement>(".blog-tag");
        tl.from(tags, {
          autoAlpha: 0,
          y: 10,
          scale: 0.95,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.08,
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="flex flex-col items-start justify-start gap-2 overflow-scroll"
    >
      {blogs.map((blog, index) => {
        return (
          <div
            key={index}
            className="blog-link-wrapper flex w-full"
            style={{ willChange: "transform, opacity" }}
          >
            <BlogLink
              blogtitle={blog.title}
              blogsubtitle={blog.subtitle}
              blogurl={`/blog/${blog.slug}`}
              blogdate={blog.date}
              blogtags={blog.tags}
            />
          </div>
        );
      })}
    </div>
  );
}
