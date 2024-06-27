import React from "react";
import Title from "../components/Title";
import MetaData from "../components/MetaData";
import Header from "./Header";
import Footer from "./Footer";

const Learn = () => {
  return (
    <div>
      <div className="h-screen bg-white">
        <Header />
        <div class="mt-8 h-screen bg-white">
          <div class="ml-40 mr-40">
            <div class="font-bold text-left text-4xl">Learn</div>
            <div class="flex items-center">
              <div>
                <img
                  class="w-full max-w-full h-auto pr-12 pt-12 pb-4"
                  src="pict.png"
                  alt="pict"
                ></img>
                <div>
                  <Title />
                  <MetaData />
                </div>
              </div>
              <div class="w-1/2 max-w-full h-auto">
                <div>
                  <Title />
                  <MetaData />
                </div>
                <div>
                  <Title />
                  <MetaData />
                </div>
                <div>
                  <Title />
                  <MetaData />
                </div>
                <div class="mb-2">
                  <Title />
                  <MetaData />
                </div>
                <div class="pt-4">
                  <button class="px-4 py-2 border border-black rounded text-lg text-black">
                    More Blog Posts
                  </button>
                </div>
              </div>
            </div>

            <div class="my-20 bg-white text-black">
              <div class="text-left  bg-secondary">
                <div class="ml-40 py-12">
                  <div class="font-bold text-xl ">
                    New to Spring? Start here.
                  </div>
                  <div class="text-sm pt-2">
                    With the Spring Quickstart guide you'll build a classic
                    "Hello World!" endpoint.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Learn;
