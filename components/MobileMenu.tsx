"use client";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl md:hidden z-50">

      <div className="grid grid-cols-5 text-center">

        <a href="/" className="py-3 text-xs">
          <div>🏠</div>
          <div>Ana</div>
        </a>

        <a href="/sohbet/index.html" className="py-3 text-xs">
          <div>💬</div>
          <div>Sohbet</div>
        </a>

        <a href="/zurna-radyo" className="py-3 text-xs">
          <div>🎙️</div>
          <div>Radyo</div>
        </a>

        <a href="/mirc-indir" className="py-3 text-xs">
          <div>💻</div>
          <div>MIRC</div>
        </a>

        <a href="/mobil-sohbet" className="py-3 text-xs">
          <div>📱</div>
          <div>Mobil</div>
        </a>

      </div>

    </div>
  );
}