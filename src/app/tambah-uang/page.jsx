"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TambahUang from "@/components/TambahUang";

export default function Page() {
  const [profile, setProfile] = useState("{}");

  useEffect(() => {
    const winitProfile = window.localStorage.getItem("winit-profile");

    if (winitProfile) {
      setProfile(winitProfile);
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
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("winit-profile", profile);
  }, [profile]);

  const [uang, setUang] = useState(JSON.parse(profile).cash ?? 10000);
  return (
    <>
      <Header />
      <Profile uang={uang} />
      <TambahUang cashInit={uang} getCashFunc={setUang} />
    </>
  );
}
