"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TambahUang from "@/components/TambahUang";

export default function Page() {
  const [profile, setProfile] = useState('{"cash":10000,"isJualRumah":false,"isPinjamanBank":false,"isJualMobil":false,"isJualMotor":false,"isJualGinjal":false}');
  const [uang, setUang] = useState("?????");
  const [isJualRumah, setIsJualRumah] = useState(true);
  const [isPinjamanBank, setIsPinjamanBank] = useState(true);
  const [isJualMobil, setIsJualMobil] = useState(true);
  const [isJualMotor, setIsJualMotor] = useState(true);
  const [isJualGinjal, setIsJualGinjal] = useState(true);

  useEffect(() => {
    const winitProfile = window.localStorage.getItem("winit-profile");

    if (winitProfile) {
      setProfile(winitProfile);
      setUang(JSON.parse(winitProfile)?.cash);
      setIsJualRumah(JSON.parse(winitProfile)?.isJualMobil)
      setIsPinjamanBank(JSON.parse(winitProfile)?.isPinjamanBank)
      setIsJualMobil(JSON.parse(winitProfile)?.isJualMobil)
      setIsJualMotor(JSON.parse(winitProfile)?.isJualMotor)
      setIsJualGinjal(JSON.parse(winitProfile)?.isJualGinjal)
    } else {
      const winitProfile = {
        cash: 10000,
        isJualRumah: false,
        isPinjamanBank: false,
        isJualMobil: false,
        isJualMotor: false,
        isJualGinjal: false,
      };
      window.localStorage.setItem(
        "winit-profile",
        JSON.stringify(winitProfile)
      );
      setProfile(JSON.stringify(winitProfile));
      setUang(winitProfile.cash);
      setIsJualRumah(winitProfile.isJualMobil)
      setIsPinjamanBank(winitProfile.isPinjamanBank)
      setIsJualMobil(winitProfile.isJualMobil)
      setIsJualMotor(winitProfile.isJualMotor)
      setIsJualGinjal(winitProfile.isJualGinjal)
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("winit-profile", profile);
  }, [profile]);

  return (
    <>
      <Header />
      <Profile uang={uang} />
      <TambahUang
        cashInit={uang}
        getCashFunc={setUang}
        profile={profile}
        setProfile={setProfile}
        isJualRumah={isJualRumah}
        setIsJualRumah={setIsJualRumah}
        isPinjamanBank={isPinjamanBank}
        setIsPinjamanBank={setIsPinjamanBank}
        isJualMobil={isJualMobil}
        setIsJualMobil={setIsJualMobil}
        isJualMotor={isJualMotor}
        setIsJualMotor={setIsJualMotor}
        isJualGinjal={isJualGinjal}
        setIsJualGinjal={setIsJualGinjal}
      />
    </>
  );
}
