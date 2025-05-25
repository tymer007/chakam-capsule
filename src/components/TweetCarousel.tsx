"use client";
import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

export default function TweetCarousel() {
  const [tweetIds, setTweetIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchTweetIds() {
      await new Promise((r) => setTimeout(r, 500));
      setTweetIds([
        "1923778823113376165",
        "1923812426144792956",
        "1923406029951308221",
        "1923067105584218556",
        "1923095378271842644",
        "1923101011326992645",
        "1923120930680709631",
        "1922948370919748001",
      ]);
    }
    fetchTweetIds();
  }, []);

  // Load Twitter script
  useEffect(() => {
    if (typeof window === "undefined" || tweetIds.length === 0) return;

    const scriptId = "twitter-widgets-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-render widgets if script already present
      window.twttr?.widgets?.load();
    }
  }, [tweetIds]);

  // Auto-scroll carousel
  useEffect(() => {
    if (tweetIds.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % tweetIds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tweetIds]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const childWidth = container.children[0]?.clientWidth || 0;

    container.scrollTo({
      left: childWidth * currentIndex,
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <h2 className="text-2xl md:text-4xl font-bold text-center w-full px-4">
        Popular Chakam Tweets
      </h2>
      <div className="flex flex-col items-center gap-8 mb-2">
       

        <div
          ref={containerRef}
          className="no-scrollbar w-full max-w-7xl overflow-x-auto flex items-center whitespace-nowrap scroll-smooth"
          style={{ scrollSnapType: "x mandatory", height: "600px" }}
        >
          {tweetIds.map((id) => (
            <div
              key={id}
              className="inline-block px-4"
              style={{ scrollSnapAlign: "start", minWidth: "320px" }}
            >
              <blockquote
                className="twitter-tweet"
                data-theme="light"
                data-width="320"
              >
                <a href={`https://twitter.com/x/status/${id}`} />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
