"use client";
import { useEffect, useState, useRef } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

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
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="flex flex-col items-center gap-8 mb-2">
        <h2 className="text-4xl font-bold text-start w-full max-w-7xl px-4">
          Popular 'Chakam' Tweets
        </h2>

        <div
          ref={containerRef}
          className="no-scrollbar w-full max-w-7xl overflow-x-auto flex items-center whitespace-nowrap scroll-smooth"
          style={{ scrollSnapType: "x mandatory", height: "600px" }} // adjust height as needed
        >
          {tweetIds.map((id) => (
            <div
              key={id}
              className="inline-block px-4"
              style={{ scrollSnapAlign: "start", minWidth: "320px" }}
            >
              <TwitterTweetEmbed tweetId={id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}