"use client";

import { useState } from "react";

export default function SohbetGiris() {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  const girisYap = () => {
    if (!nick.trim()) {
      alert("Lütfen bir rumuz giriniz");
      return;
    }

    window.location.href =
      `/sohbet/index.html?nick=${encodeURIComponent(nick)}`;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nickname"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
        className="w-full border p-4 rounded-xl mb-4"
      />

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-4 rounded-xl mb-4"
      />

      <button
        onClick={girisYap}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition"
      >
        SOHBETE BAĞLAN
      </button>
    </>
  );
}