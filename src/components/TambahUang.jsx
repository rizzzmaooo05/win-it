"use client";

import { useState } from "react";

import Image from "next/image";
import house from "@/assets/images/house.png";
import bank from "@/assets/images/bank.png";
import car from "@/assets/images/car.png";
import motor from "@/assets/images/motor.png";
import ginjal from "@/assets/images/ginjal.png";

export default function TambahUang({ cashInit, getCashFunc, profile, setProfile, isJualRumah, setIsJualRumah,  isPinjamanBank, setIsPinjamanBank, isJualMobil, setIsJualMobil, isJualMotor, setIsJualMotor, isJualGinjal, setIsJualGinjal }) {
  function handleClick(prop, getCash, func, setFunc) {
    const winitProfile = JSON.parse(profile);
    setFunc(!func);
    getCashFunc(cashInit + getCash);
    winitProfile[prop] = !func;
    winitProfile["cash"] = cashInit + getCash;
    setProfile(JSON.stringify(winitProfile));
  }

  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center mx-auto text-center w-[70%] px-4">
      <div className="border-[4px] border-slate-900 flex flex-col gap-1 rounded-lg overflow-hidden p-1">
        <Image
          src={house}
          alt="/"
          width={500}
          height={500}
          className=" h-32 object-contain"
        />

        {!isJualRumah && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-900"
            onClick={() =>
              handleClick("isJualRumah", 10000, isJualRumah, setIsJualRumah)
            }
          >
            Jual Rumah (+10000)
          </button>
        )}
        {isJualRumah && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-500"
            disabled
          >
            Jual Rumah (+10000)
          </button>
        )}
      </div>
      <div className="border-[4px] border-slate-900 flex flex-col gap-1 rounded-lg overflow-hidden p-1">
        <Image
          src={bank}
          alt="/"
          width={500}
          height={500}
          className=" h-32 object-contain"
        />

        {!isPinjamanBank && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-900"
            onClick={() =>
              handleClick(
                "isPinjamanBank",
                5000,
                isPinjamanBank,
                setIsPinjamanBank
              )
            }
          >
            Pinjaman Bank (+5000)
          </button>
        )}
        {isPinjamanBank && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-500"
            disabled
          >
            Pinjaman Bank (+5000)
          </button>
        )}
      </div>
      <div className="border-[4px] border-slate-900 flex flex-col gap-1 rounded-lg overflow-hidden p-1">
        <Image
          src={car}
          alt="/"
          width={500}
          height={500}
          className=" h-32 object-contain"
        />

        {!isJualMobil && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-900"
            onClick={() =>
              handleClick("isJualMobil", 8000, isJualMobil, setIsJualMobil)
            }
          >
            Jual Mobil (+8000)
          </button>
        )}
        {isJualMobil && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-500"
            disabled
          >
            Jual Mobil (+8000)
          </button>
        )}
      </div>
      <div className="border-[4px] border-slate-900 flex flex-col gap-1 rounded-lg overflow-hidden p-1">
        <Image
          src={motor}
          alt="/"
          width={500}
          height={500}
          className=" h-32 object-contain"
        />

        {!isJualMotor && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-900"
            onClick={() =>
              handleClick("isJualMotor", 3000, isJualMotor, setIsJualMotor)
            }
          >
            Jual Motor (+3000)
          </button>
        )}
        {isJualMotor && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-500"
            disabled
          >
            Jual Motor (+3000)
          </button>
        )}
      </div>
      <div className="border-[4px] border-slate-900 flex flex-col gap-1 rounded-lg overflow-hidden p-1">
        <Image
          src={ginjal}
          alt="/"
          width={500}
          height={500}
          className=" h-32 object-contain"
        />

        {!isJualGinjal && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-900"
            onClick={() =>
              handleClick("isJualGinjal", 15000, isJualGinjal, setIsJualGinjal)
            }
          >
            Jual Ginjal (+15000)
          </button>
        )}
        {isJualGinjal && (
          <button
            className="text-white p-2 m-1 rounded-md bg-slate-500"
            disabled
          >
            Jual Ginjal (+15000)
          </button>
        )}
      </div>
    </div>
  );
}
