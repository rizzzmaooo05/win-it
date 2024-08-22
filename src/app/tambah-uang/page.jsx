"use client";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TambahUang from "@/components/TambahUang";

export default function Page() {
  useEffect(() => {
    if (window.localStorage.getItem("winit-profile")) {
      console.log(window.localStorage.getItem("winit-profile"));
    } else {
      const profile = {
        cash: 10000,
        isJualRumah: false,
        isPinjamanBank: false,
        isJualMobil: false,
        isJualMotor: false,
        isJualGinjal: false,
      };
      window.localStorage.setItem("winit-profile", JSON.stringify(profile));
      console.log(window.localStorage.getItem("winit-profile"));
    }
  }, []);
  const [uang, setUang] = useState(
    JSON.parse(window.localStorage.getItem("winit-profile"))?.cash ?? 10000
  );
  return (
    <>
      <Header />
      <Profile uang={uang} />
      <TambahUang cashInit={uang} getCashFunc={setUang} />
    </>
  );
}
