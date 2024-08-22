"use client";

import Image from "next/image";
import { useState } from "react";

import qm from "@/assets/images/question-mark.png";
import rock from "@/assets/images/rock.png";
import paper from "@/assets/images/paper.png";
import scissor from "@/assets/images/scissor.png";

import winitAlg from "@/libs/winitAlg";

export default function Main({ getCashFunc }) {
  const [isChange, setIsChange] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayAgain, setIsPlayAgain] = useState(false);

  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [taruhan, setTaruhan] = useState(0);

  function handlePlay() {
    setIsPlay(!isPlay);
    setTimeout(() => {
      setIsChange(!isChange);
      setIsPlayAgain(!isPlayAgain);

      const profile = JSON.parse(window.localStorage.getItem("winit-profile"));
      const cashInit = profile.cash;
      const result = winitAlg(cashInit, taruhan, player);

      setComputer(result.computer);
      getCashFunc(result.cashNow);

      profile.cash = result.cashNow;
      window.localStorage.setItem("winit-profile", JSON.stringify(profile));
    }, 3000);
  }

  function handlePlayAgain() {
    setIsPlay(!isPlay);
    setIsChange(!isChange);
    setIsPlayAgain(!isPlayAgain);
  }

  function handleSetPlayer(playerChoice) {
    setPlayer(playerChoice);
  }

  function handleTaruhan(jumlahTaruhan) {
    setTaruhan(jumlahTaruhan);
  }

  return (
    <main className=" w-full flex flex-col gap-2 justify-center items-center text-slate-900">
      <div className="flex gap-10 items-center">
        <div className="w-52 h-72 border-[4px] border-slate-900 overflow-hidden ">
          {!isChange && (
            <Image
              src={qm}
              width={500}
              height={500}
              className="object-cover transition-all duration-1000"
            />
          )}
          {isChange && (
            <Image
              src={
                player === "kertas" ? paper : player === "batu" ? rock : scissor
              }
              width={500}
              height={500}
              className="object-cover transition-all duration-1000"
            />
          )}
        </div>

        <p className="text-4xl font-bold">VS</p>

        <div className="w-52 h-72 border-[4px] border-slate-900 overflow-hidden ">
          {!isChange && (
            <Image
              src={qm}
              width={500}
              height={500}
              className="object-cover transition-all duration-1000"
            />
          )}
          {isChange && (
            <Image
              src={
                computer === "kertas"
                  ? paper
                  : computer === "batu"
                  ? rock
                  : scissor
              }
              width={500}
              height={500}
              className="object-contain transition-all duration-1000"
            />
          )}
        </div>
      </div>
      <div className="flex gap-10 items-center mt-4">
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-44 text-center"
            onClick={() => handleSetPlayer("gunting")}
          >
            Gunting
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-44 text-center"
            disabled
          >
            Gunting
          </button>
        )}
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-44 text-center"
            onClick={() => handleSetPlayer("batu")}
          >
            Batu
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-44 text-center"
            disabled
          >
            Batu
          </button>
        )}
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-44 text-center"
            onClick={() => handleSetPlayer("kertas")}
          >
            Kertas
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-44 text-center"
            disabled
          >
            Kertas
          </button>
        )}
      </div>
      <div className="flex gap-10 items-center">
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-32 text-center"
            onClick={() => handleTaruhan(100)}
          >
            100
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-32 text-center"
            disabled
          >
            100
          </button>
        )}
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-32 text-center"
            onClick={() => handleTaruhan(1000)}
          >
            1000
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-32 text-center"
            disabled
          >
            1000
          </button>
        )}
        {!isPlay && (
          <button
            className=" bg-slate-900 text-white p-1 w-32 text-center"
            onClick={() => handleTaruhan(10000)}
          >
            10000
          </button>
        )}
        {isPlay && (
          <button
            className=" bg-slate-500 text-white p-1 w-32 text-center"
            disabled
          >
            10000
          </button>
        )}

      </div>
      {!isPlay && (
        <button
          className="bg-slate-900 text-white mt-1 p-1 w-[50%]"
          onClick={handlePlay}
        >
          MAIN
        </button>
      )}
      {isPlay && (
        <button className="bg-slate-500 text-white mt-1 p-1 w-[50%]" disabled>
          MAIN
        </button>
      )}

      {isPlayAgain && (
        <button
          className="bg-slate-900 text-white p-1 w-[50%]"
          onClick={handlePlayAgain}
        >
          MAIN LAGI
        </button>
      )}
      {!isPlayAgain && (
        <button className="bg-slate-500 text-white p-1 w-[50%]" disabled>
          MAIN LAGI
        </button>
      )}
    </main>
  );
}
