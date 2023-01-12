import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Text2Speech = dynamic(() => import("../components/examples/Text2Speech"));
const Animation = dynamic(() => import("../components/examples/Animation"));
const Wallpaper = dynamic(() => import("../components/examples/Wallpaper"));
const Unsplash = dynamic(() => import("../components/examples/Unsplash"));
const Youtube = dynamic(() => import("../components/examples/Youtube"));
const Shorten = dynamic(() => import("../components/examples/Shorten"));
const Hentai = dynamic(() => import("../components/examples/Hentai"));
const Anime = dynamic(() => import("../components/examples/Anime"));
const Manga = dynamic(() => import("../components/examples/Manga"));
const Nsfw = dynamic(() => import("../components/examples/Nsfw"));

export default function magneum() {
  return (
    <>
      <Head>
        <title>Magneum Ui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-zinc-900 to-slate-900 font-serif backdrop-blur-3xl">
        <section>
          <div className="relative block w-full mx-auto md:mt-0">
            <Image
              alt="blob"
              width={700}
              height={700}
              src="/Next_By_Vercel_White.png"
              className="max-w-xs m-auto md:max-w-2xl animate-pulse"
            ></Image>
            <div className="relative flex items-center backdrop-blur-3xl">
              <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
                <div className="flex flex-col">
                  <h1 className="underline decoration-blue-50 w-full text-5xl font-light text-center uppercase sm:text-5xl text-blue-50">
                    Get Started With Magneum Api
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================================================================================================== */}
        <section>
          <div className="container px-6 mx-auto">
            <h1 className="text-2xl text-gray-400 capitalize lg:text-3xl text-left">
              explore all <br></br> awesome{" "}
              <span className=" decoration-blue-500 text-blue-400">
                magneum Endpoints
              </span>
            </h1>
            <h1 className="italic text-md text-gray-400 capitalize lg:text-lg text-left">
              Api:{" "}
              <span href="https://magneum.vercel.app/api/"
              className="text-blue-400 lowercase">
                https://magneum.vercel.app/api/
              </span>
            </h1>
            {/* ============================================================================================================== */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Shorten
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Shorten />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">♚ Api/Anime</h1>
                <p className="text-gray-400 italic lowercase">
                  <Anime />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Youtube
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Youtube />
                </p>
              </div>
            </div>
            {/* ============================================================================================================== */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Animation
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Animation />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Hentai
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Hentai />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">♚ Api/Nsfw</h1>
                <p className="text-gray-400 italic lowercase">
                  <Nsfw />
                </p>
              </div>
            </div>
            {/* ============================================================================================================== */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">♚ Api/Manga</h1>
                <p className="text-gray-400 italic lowercase">
                  <Manga />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Text2Speech
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Text2Speech />
                </p>
              </div>
              {/* ============================================================================================================== */}
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Unsplash
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Unsplash />
                </p>
              </div>
            </div>
            {/* ============================================================================================================== */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Wallpaper
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Wallpaper />
                </p>
              </div>
              {/* ============================================================================================================== */}
              {/* <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Text2Speech
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Text2Speech />
                </p>
              </div> */}
              {/* ============================================================================================================== */}
              {/* <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl hover:scale-105 duration-500 hover:contrast-125 bg-slate-900">
                <h1 className="text-lg text-blue-200 uppercase">
                  ♚ Api/Unsplash
                </h1>
                <p className="text-gray-400 italic lowercase">
                  <Unsplash />
                </p>
              </div> */}
            </div>
            {/* ============================================================================================================== */}
          </div>
        </section>
      </main>
      <footer className="footer footer-center p-10 bg-slate-900 text-base-content rounded">
        <div>
          <p className="font-bold italic text-slate-400">
            Copyright © 2023 - All right reserved by Magneum Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
