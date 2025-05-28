"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faLock,
  faFaceGrinTears,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import TweetCarousel from "../components/TweetCarousel";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {isSignedIn}  = useUser();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-emerald-950 text-white px-4 py-8 md:px-12 lg:px-24">
      <header className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo and Brand Name */}
        <CameraIcon className="text-white w-50 h-10 animate-spin" />
        <div className="font-bold text-2xl font-vest text-primary">Chakam</div>
        <div className="flex gap-4">
          { isSignedIn ? (
            <>
                <Button onClick={() => router.push('/dashboard') } className="bg-[#fff] text-primary px-4 py-2 rounded-md shadow-md border border-primary hover:bg-primary/90 hover:text-[#fff] transition-colors duration-200">
                  Dashboard
                </Button>
            </>
          )
          :
          (
            <>
              <SignInButton>
                <Button className="bg-[#fff] text-primary/100 px-4 py-2 rounded-md hover:bg-primary/100 hover:text-[#fff]">Login</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="bg-primary text-[#fff] px-4 py-2 rounded-md shadow-md border border-primary hover:bg-primary/90 transition-colors duration-200">
                  Register
                </Button>
              </SignInButton>
            </>

          )
        }
          
          
        </div>
      </header>
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight mb-2 ">
              <div>Lock the Meme.</div>
              <div>Forget the Meme.</div>
              <div>Remember the Meme.</div>
            </h1>

            <p className="text-emerald-300 text-md mb-10">
              Upload your screenshots, lock them for a year, and get a surprise
              email next year.
            </p>

            <Button className="bg-emerald-400 hover:bg-emerald-500
             text-emerald-900 font-bold py-4 px-8 rounded-md text-md uppercase w-fit">
              CREATE YOUR CAPSULE
            </Button>
          </div>

          <div className="lg:col-span-2 flex justify-center items-center">
            {/* Add treasure chest with meme image */}
            {/* Comment: Add the treasure chest with meme image here */}
            <Image width={800} height={800} src="/chest.png" alt="chest" />
          </div>
        </div>

        <main className="flex flex-col items-center justify-center">
          <TweetCarousel />
        </main>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className=" text-2xl md:text-4xl font-bold mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="bg-emerald-950 border border-emerald-400 p-3 rounded-md mr-4 text-emerald-400">
                <FontAwesomeIcon icon={faFileArrowUp} size="lg" />
              </div>
              <span className="text-2xl font-bold">
                Upload.
                <p className="font-normal text-sm">
                  Choose your funniest screenshots or meme images.
                </p>
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-emerald-950 border border-emerald-400 p-3 rounded-md mr-4 text-emerald-400">
                <FontAwesomeIcon icon={faLock} size="lg" />
              </div>
              <span className="text-2xl font-bold">
                Lock.
                <p className="font-normal text-sm">
                  Seal them in your digital time capsule for 1 year.
                </p>
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-emerald-950 border border-emerald-400 p-3 rounded-md mr-4 text-emerald-400">
                <FontAwesomeIcon icon={faFaceGrinTears} size="lg" />
              </div>
              <span className="text-2xl font-bold">
                Laugh Later.
                <p className="font-normal text-sm">
                  Get an email next year and relive the laughs!
                </p>
              </span>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-900 p-8 rounded-xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-2">Coming soon:</h3>
            <h2 className="text-4xl font-bold mb-8">Chakam Community</h2>

            <div className="text-center">
              {/* Comment: Add the lock icon image here */}
            </div>
          </div>

          <div className="bg-emerald-900 p-8 rounded-xl flex items-center">
            <div className="flex-1">
              <div className="bg-white text-emerald-950 p-4 rounded-xl mb-4 inline-block">
                I remember that!
              </div>
              {/* Comment: Add the image of the person with phone here */}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-emerald-950 text-white px-4 pt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-emerald-400 text-emerald-950 p-1 rounded mr-2">
              <FontAwesomeIcon
                icon={["fas", "square-poll-vertical"]}
                className="w-4 h-4"
              />
            </div>
            <span className="font-bold text-lg">Chakam Capsule</span>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-sm text-gray-300">
            © 2024 Chakam Capsule. All memes reserved.
            <br />
           
          </div>
        </div>
      </footer>
    </main>
  );
}
