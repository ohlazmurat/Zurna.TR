"use client";

import { useEffect, useState } from "react";

const nickler = [
  "ZurnaUser652",
  "Cansu06",
  "AsiKiz34",
  "MaviGece",
  "Karizma61",
  "SonsuzAsk",
  "BeyazMelek",
  "YalnizAdam",
  "GeceYagmuru",
  "MutluKiz",
  "Sevda58",
  "Anka34",
  "Kral61",
  "Gizemli",
  "HayalPerisi",
  "MelekSu",
  "DeliYurek",
  "AsikGenclik",
  "EfsaneAdam",
  "Kuzey61",
  "YagmurDamla",
  "SiyahInci",
  "BuzAdam",
  "AteşKizi",
  "ZurnaCan",
  "TatliBela",
  "AsiRuzgar",
  "MutluAdam",
  "GulKokusu",
  "KalpSesi",
  "MelekKanat",
  "GeceMavisi",
  "SessizAdam",
  "YildizTozu",
  "AyIsigi",
  "BeyazGul",
  "MasalKizi",
  "DostYurek",
  "Hayalci",
  "YalnizKurt",
  "KirmiziGul",
  "Sonsuzluk",
  "BirDost",
  "Gokyuzu",
  "AsikRuh",
  "EfsaneKiz",
  "SevdaYolu",
  "MutluKalp",
  "MaviDeniz",
  "ZurnaSohbet"
];

export default function CanliDurum() {
  const [nick, setNick] = useState(nickler[0]);

  const [kanallar, setKanallar] = useState({
    zurna: 196,
    sohbet: 143,
    fantezi: 118,
    radyo: 87,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const yeniNick =
        nickler[Math.floor(Math.random() * nickler.length)];

      setNick(yeniNick);

      setKanallar((prev) => ({
        zurna: Math.max(
          150,
          prev.zurna + Math.floor(Math.random() * 11) - 5
        ),
        sohbet: Math.max(
          100,
          prev.sohbet + Math.floor(Math.random() * 11) - 5
        ),
        fantezi: Math.max(
          80,
          prev.fantezi + Math.floor(Math.random() * 11) - 5
        ),
        radyo: Math.max(
          50,
          prev.radyo + Math.floor(Math.random() * 11) - 5
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section className="max-w-7xl mx-auto px-6 pb-12">

    <div className="grid lg:grid-cols-[0.8fr_1.4fr] gap-6 items-start">

      {/* SON BAĞLANAN */}
      <div
        className="
        relative overflow-hidden
        rounded-3xl
        bg-gradient-to-r from-orange-500 to-orange-600
        text-white
        shadow-xl
        p-6
        "
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>

            <span className="uppercase tracking-wider text-xs font-bold">
              CANLI AKTİVİTE
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-4">
            Son Bağlanan Kullanıcı
          </h3>

          <div className="text-3xl font-extrabold mb-2 break-words">
            {nick}
          </div>

          <p className="text-orange-100 text-sm">
            Sohbet odalarına yeni katıldı
          </p>

        </div>
      </div>

      {/* KANALLAR */}
<div className="bg-white rounded-3xl shadow-xl p-5">

  <div className="flex items-center gap-3 mb-4">

    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
      👥
    </div>

    <div>
      <h3 className="text-xl font-bold text-blue-900">
        Aktif Kanallar
      </h3>

      <p className="text-slate-500 text-xs">
        Şu anda sohbet eden kullanıcılar
      </p>
    </div>

  </div>

  <div className="grid grid-cols-2 gap-3">

    <div className="bg-slate-50 rounded-xl p-4 text-center">
      <div className="font-bold text-blue-900 mb-1">
        #zurna
      </div>

      <div className="text-green-600 font-bold text-xl">
        {kanallar.zurna}
      </div>

      <div className="text-xs text-slate-500">
        Online
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl p-4 text-center">
      <div className="font-bold text-blue-900 mb-1">
        #sohbet
      </div>

      <div className="text-green-600 font-bold text-xl">
        {kanallar.sohbet}
      </div>

      <div className="text-xs text-slate-500">
        Online
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl p-4 text-center">
      <div className="font-bold text-blue-900 mb-1">
        #fantezisohbet
      </div>

      <div className="text-green-600 font-bold text-xl">
        {kanallar.fantezi}
      </div>

      <div className="text-xs text-slate-500">
        Online
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl p-4 text-center">
      <div className="font-bold text-blue-900 mb-1">
        #radyo
      </div>

      <div className="text-green-600 font-bold text-xl">
        {kanallar.radyo}
      </div>

      <div className="text-xs text-slate-500">
        Online
      </div>
    </div>

  </div>

</div>
    </div>

  </section>
);
}