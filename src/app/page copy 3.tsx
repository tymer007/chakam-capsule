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
import { CameraIcon } from "lucide-react";
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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <CameraIcon className="text-emerald-500 w-8 h-8" />
          <div className="font-bold text-2xl text-gray-900">Chakam</div>
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
                <Button className="bg-transparent text-gray-900 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                  Sign up
                </Button>
              </SignInButton>
            </>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center py-16 md:py-24">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <CameraIcon className="text-emerald-500 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Chakam</h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Today be story, tomorrow go be throwback make we save am for you
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Sign up. Upload your Chakam. Keep am for your mind weed. Easy.
          </p>

          {/* Upload Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {/* Comment: Add screenshot/meme images stack here */}
                <div className="relative">
                  {/* Placeholder for stacked images - replace with actual images */}
                  <div className="bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                    <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-500">Screenshot 1</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 transform -rotate-2 absolute top-4 left-4">
                    <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-500">Screenshot 2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 text-center">
                <div className="space-y-4">
                  <div className="text-emerald-600 text-lg font-medium">
                    Drag and drop your <span className="text-emerald-500 font-bold">Chakam</span>
                  </div>
                  <div className="text-gray-600">or <span className="text-emerald-500 underline cursor-pointer">browse to upload</span></div>
                  <Button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
                    Upload your files
                  </Button>
                  <div className="text-xs text-gray-500">
                    *Maximum file size: 25MB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chakam Styles Section */}
        <div className="py-16 bg-gradient-to-b from-emerald-50 to-emerald-100 -mx-4 md:-mx-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your Chakam style</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose the correct way to lock your screenshots, them come back next one we dey with surprise, clean mind, or small ginger.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Chakam Capsule */}
              <div className="bg-emerald-800 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">#</span>
                    <h3 className="text-xl font-bold">Chakam Capsule</h3>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-emerald-100 mb-6 text-sm">
                    Lock your images make you locked for 1 year. On exact day you locked am you go receive am for your mail.
                  </p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg">
                    Create Capsule
                  </Button>
                </div>
                {/* Comment: Add character illustration here - person with time capsule */}
                <div className="absolute right-4 bottom-4">
                  {/* Placeholder for character illustration */}
                </div>
              </div>

              {/* Chakam Lock */}
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">🔒</span>
                    <h3 className="text-xl font-bold">Chakam Lock</h3>
                    <span className="text-2xl">💝</span>
                  </div>
                  <p className="text-orange-100 mb-6 text-sm">
                    Lock it for a set time! 1 month to 1 week or 2 months, you set gbeging!
                  </p>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium">
                    Set Challenge
                  </Button>
                </div>
                {/* Comment: Add character illustration here - person with lock/gift */}
                <div className="absolute right-4 bottom-4">
                  {/* Placeholder for character illustration */}
                </div>
              </div>

              {/* Chakam Vault */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">🔐</span>
                    <h3 className="text-xl font-bold">Chakam Vault</h3>
                  </div>
                  <p className="text-blue-100 mb-6 text-sm">
                    You lock your images with secret code. If you forget the code... sorry them no dey for you again. We no go fit help.
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium">
                    Create Vault
                  </Button>
                </div>
                {/* Comment: Add character illustration here - person with vault/security */}
                <div className="absolute right-4 bottom-4">
                  {/* Placeholder for character illustration */}
                </div>
              </div>
            </div>

            {/* Feature descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Chakam Capsule</h4>
                <p className="text-gray-600">
                  You no fit forget am. Them goan send when Chakam time reach, but you remind say any gaps for brain go clear.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Chakam Lock</h4>
                <p className="text-gray-600">
                  You set time. Forget about. Do something. When time reach, we go remind you say 'Your Chakam ready!'
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Chakam Vault</h4>
                <p className="text-gray-600">
                  You lock your images with secret code. If you forget the code wey you lock am with be play.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Chakam'd Tweets Section */}
        <div className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Chakam'd Tweets</h2>
          <TweetCarousel />
        </div>

        {/* How It Works Section */}
        <div className="py-16 bg-emerald-900 text-white -mx-4 md:-mx-8 px-4 md:px-8">
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
        <div className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet the team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Comment: Add team member photo here */}
              </div>
              <h3 className="font-bold text-lg">Tanna Freeman</h3>
              <p className="text-gray-600 mb-4">Chief Dream Officer</p>
              <p className="text-sm text-gray-500 mb-4">Addicted to Chakam</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Comment: Add team member photo here */}
              </div>
              <h3 className="font-bold text-lg">Kat Bones</h3>
              <p className="text-gray-600 mb-4">Creative Operator</p>
              <p className="text-sm text-gray-500 mb-4">Quora</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Comment: Add team member photo here */}
              </div>
              <h3 className="font-bold text-lg">Full Name</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <p className="text-sm text-gray-500 mb-4">Quote</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Comment: Add team member photo here */}
              </div>
              <h3 className="font-bold text-lg">Full Name</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <p className="text-sm text-gray-500 mb-4">Quote</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 -mx-4 md:-mx-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center mb-4 md:mb-0">
            <CameraIcon className="text-emerald-400 w-6 h-6 mr-2" />
            <span className="font-bold text-xl">Chakam</span>
          </div>

          {/* Copyright text */}
          <div className="text-sm text-emerald-200 text-center">
            © 2024 Chakam, All memes reserved.
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-emerald-200 hover:text-emerald-400"
            >
              <span
                className={`transition-transform ${
                  isSpinning ? "animate-spin" : ""
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