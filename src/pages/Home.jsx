import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const router = useNavigate();

  const goToForm = () => {
    router("/form");
  };
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center">
        {/* logo */}
        <div className="flex items-center justify-center gap-4 w-full mt-6">
          <img
            src="/imgs/NIA.png"
            alt=""
            className="w-[213px] h-[143px] object-contain"
          />
          <img
            src="/imgs/silpakorn.png"
            alt=""
            className="w-[141px] h-[141px] object-contain"
          />
        </div>
        {/* end logo */}

        {/* nft */}
        <div className="relative flex justify-center items-center w-full">
          <img
            src="/imgs/leftLine.png"
            alt=""
            className="absolute top-[2.5rem] md:left-0 md:top-[6rem] z-10"
          />
          <div className="absolute md:top-2">
            <div className="relative mt-[20rem] md:mt-0">
              <img
                src="/imgs/v1.png"
                alt=""
                className="md:w-full md:h-[800px] object-contain opacity-10 z-20"
              />
              <img
                src="/imgs/v2.png"
                alt=""
                className="absolute top-0 md:-top-4 md:w-full md:h-[800px] object-contain z-30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"
              />
              <img
                src="/imgs/nftText.png"
                alt=""
                className="absolute top-[8.5rem] left-[5.5rem] md:top-[15.5rem] md:left-[12.5rem]  lg:top-[11rem] lg:left-[16rem] w-[260px] md:w-[430px] lg:w-[460px] lg:h-[468px] object-contain z-40 animate-[bounce_14s_ease-in-out_infinite]"
              />
            </div>
          </div>
          <img
            src="/imgs/rightLine.png"
            alt=""
            className="absolute top-[14rem] md:right-0 md:top-[34.2rem] z-10"
          />
        </div>
        {/* end nft */}
      </div>
      {/* link */}
      <div className="w-full absolute bottom-[-5rem] text-center py-6">
        <button
          onClick={goToForm}
          type="button"
          className="transform transition-transform duration-500 hover:scale-105 z-50 text-2xl py-4 w-full md:w-64 border-2 border-b-8 rounded-md bg-[white] text-secondary font-bold"
        >
          ส่ง NFT
        </button>
      </div>
      {/* link */}
    </MainLayout>
  );
};

export default Home;
