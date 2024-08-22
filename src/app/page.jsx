"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Main from "@/components/Main";

export default function Home() {
  const [profile, setProfile] = useState("{}");
  const [uang, setUang] = useState(0);

  useEffect(() => {
    const winitProfile = window.localStorage.getItem("winit-profile");

    if (winitProfile) {
      setProfile(winitProfile);
      setUang(JSON.parse(winitProfile).cash)
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
      setUang(JSON.parse(winitProfile).cash)
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("winit-profile", profile);
  }, [profile]);

  return (
    <>
      <Header />
      <Profile uang={uang} />
      <Main getCashFunc={setUang} />
    </>
  );
}
