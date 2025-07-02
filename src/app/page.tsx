"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
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
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import TweetCarousel from "../components/TweetCarousel";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { isSignedIn } = useUser();
  const [isSpinning, setIsSpinning] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setIsSpinning(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="mx-auto flex justify-between items-center py-6 px-16 md:px-20 bg-primary">
        {/* Logo and Brand Name */}
        <div>
          <Image src="/chakam-white.png" alt="logo" width={150} height={150} />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          {isSignedIn ? (
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
            >
              Dashboard
            </Button>
          ) : (
            <>
              <SignInButton>
                <Button className="text-white">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="bg-white text-primary px-6 py-2 font-bold hover:bg-emerald-600 transition-colors duration-200 rounded-3xl">
                  Sign up
                </Button>
              </SignInButton>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center py-16 md:py-24">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Image src="/chakam-black.png" alt="logo" width={200} height={200} />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Today be story, tomorrow go be throwback make we save am for you
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Sign up. Upload your Chakam. Keep am for your mind weed. Easy.
        </p>

        {/* Upload Section */}
        <div className="flex flex-col rounded-2xl p-8 md:p-12 mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">

            {/* Screenshot - 1/3 width */}
            <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-4">
              <Image
                src="/screenshot.svg"
                alt="ewe"
                height={350}
                width={350}
                className="object-contain"
              />
            </div>

            {/* Upload box - slightly reduced width */}
            <div className="w-full md:w-3/5 bg-white p-6 rounded-3xl shadow-xl">
              <div className="border-4 border-dashed border-gray-400 rounded-xl py-8 text-center min-h-72">
                <div className="space-y-4">
                  <div className="text-lg font-medium">
                    Drag and drop your <span className="text-orange-500 font-bold">Chakam</span>
                  </div>
                  <div>
                    or <span className="text-orange-500 cursor-pointer">browse to upload</span>
                  </div>
                  <Button className="bg-orange-500 text-white px-8 py-6 rounded-3xl hover:bg-emerald-600 transition-colors">
                    Upload your chakam
                  </Button>
                  <div className="text-xs text-gray-500 m-0 p-0">
                    *Maximum file size: 25MB
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

      {/* Chakam Styles Section */}
      <div className="py-16 bg-gradient-to-b from-emerald-300 to-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your Chakam style</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the correct way to lock your screenshots, them come back next one we dey with surprise, clean mind, or small ginger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chakam Capsule */}
            <div className="flex flex-col rounded-2xl overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/capsule.webp"
                  alt="Chakam Capsule"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-md rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <button className="bg-white hover:bg-gray-100 px-5 py-2 rounded-2xl text-sm font-medium">
                    Create Capsule
                  </button>
                </div>
              </div>

              <div className="pt-2 px-3 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Chakam Capsule</h3>
                <p className="text-sm text-emerald-400 font-semibold">
                  Lock your images make you locked for 1 year. On exact day you locked am you go receive am for your mail.
                </p>
              </div>
            </div>

            {/* Chakam Lock */}
            <div className="flex flex-col rounded-2xl overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/lock.webp"
                  alt="Chakam Lock"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-md rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <button className="bg-white hover:bg-gray-100 px-5 py-2 rounded-2xl text-sm font-medium">
                    Set Challenge
                  </button>
                </div>
              </div>
              <div className="pt-2 px-3 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Chakam Lock</h3>
                <p className="text-sm text-emerald-400 font-semibold">
                  Lock it for a set time! 1 month to 1 week or 2 months, you set gbeging!
                </p>
              </div>
            </div>

            {/* Chakam Vault */}
            <div className="flex flex-col overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/vault.webp"
                  alt="Chakam Vault"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-md rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <button className="bg-white hover:bg-gray-100 px-5 py-2 rounded-2xl text-sm font-medium">
                    Create Vault
                  </button>
                </div>
              </div>
              <div className="pt-2 px-3 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">Chakam Vault</h3>
                <p className="text-sm text-emerald-400 font-semibold">
                  You lock your images with secret code. If you forget the code wey you lock am with be play.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Our Chakam&apos;d Tweets Section */}
      <div className="py-16 bg-primary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Our Chakam&apos;d Tweets</h2>
        <TweetCarousel />
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faFileArrowUp} size="lg" className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Upload.</h3>
              <p className="text-emerald-100">
                Choose your funniest screenshots or meme images and dem go upload.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faLock} size="lg" className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lock.</h3>
              <p className="text-emerald-100">
                Seal them in your digital time and you forget wen you wan take open am.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faFaceGrinTears} size="lg" className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Laugh Later.</h3>
              <p className="text-emerald-100">
                Get an email next year and relive those throwback moments wey go sweet you!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-32 bg-primary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Meet the team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto min-h-72 px-12">
          <div className="text-center border-[#126043] border-2 md:border-l-2 md:border-y-2 md:border-r-0 lg:border-l-2 lg:border-y-2 lg:border-r-2 rounded-t-3xl md:rounded-none md:rounded-ss-3xl lg:rounded-none lg:rounded-l-3xl px-4 flex flex-col justify-around min-h-72">
            <div className="flex flex-row gap-4 items-center py-0">
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/favicon.png"}
                  alt="Team Member 1"
                />
              </div>
              <div className="flex flex-col text-white text-start py-auto">
                <h3 className="font-bold text-base">Tanna Freeman</h3>
                <p className="text-sm">Chief Dream Officer</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-white mb-4">Addicted to Chakam</p>
            </div>

            <div className="flex justify-center space-x-3 border-2 rounded-3xl py-1.5 border-[#126043]">
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center border-[#126043] border-2 border-t-0 md:border-t-2 md:border-2 lg:border-2 lg:border-l-0 rounded-none md:rounded-se-3xl lg:rounded-none px-4 flex flex-col justify-around min-h-72">
            <div className="flex flex-row gap-4 items-center py-0">
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/favicon.png"}
                  alt="Team Member 2"
                />
              </div>
              <div className="flex flex-col text-white text-start py-auto">
                <h3 className="font-bold text-base">Team Member 2</h3>
                <p className="text-sm">Position Title</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-white mb-4">Description here</p>
            </div>

            <div className="flex justify-center space-x-3 border-2 rounded-3xl py-1.5 border-[#126043]">
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center border-[#126043] border-2 border-t-0 md:border-t-2 md:border-2 lg:border-2 lg:border-l-0 rounded-none md:rounded-es-3xl lg:rounded-none px-4 flex flex-col justify-around min-h-72">
            <div className="flex flex-row gap-4 items-center py-0">
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/favicon.png"}
                  alt="Team Member 3"
                />
              </div>
              <div className="flex flex-col text-white text-start py-auto">
                <h3 className="font-bold text-base">Team Member 3</h3>
                <p className="text-sm">Position Title</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-white mb-4">Description here</p>
            </div>

            <div className="flex justify-center space-x-3 border-2 rounded-3xl py-1.5 border-[#126043]">
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center border-[#126043] border-2 border-t-0 md:border-t-2 md:border-r-2 md:border-y-2 md:border-l-0 lg:border-r-2 lg:border-y-2 lg:border-l-0 rounded-b-3xl md:rounded-none md:rounded-ee-3xl lg:rounded-none lg:rounded-r-3xl px-4 flex flex-col justify-around min-h-72">
            <div className="flex flex-row gap-4 items-center py-0">
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/favicon.png"}
                  alt="Team Member 4"
                />
              </div>
              <div className="flex flex-col text-white text-start py-auto">
                <h3 className="font-bold text-base">Team Member 4</h3>
                <p className="text-sm">Position Title</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-white mb-4">Description here</p>
            </div>

            <div className="flex justify-center space-x-3 border-2 rounded-3xl py-1.5 border-[#126043]">
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-500">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brand name */}
          <div>
            <Image src="/chakam-white.png" alt="logo" width={125} height={125} />
          </div>

          {/* Copyright text */}
          <div className="text-sm text-emerald-500 text-center font-bold">
            © 2024 Chakam, All memes reserved.
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-emerald-500 hover:text-emerald-400"
            >
              <span
                className={`transition-transform ${isSpinning ? "animate-spin" : ""
                  }`}
              >
                {theme === "light" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}