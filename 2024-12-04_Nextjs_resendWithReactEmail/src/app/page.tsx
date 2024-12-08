"use client";
export default function Home() {
  return (
    <main>
      <button
        onClick={async () => await fetch("api/emails/", { method: "POST" })}
        className="text-2xl border-green-700 "
      >
        Send Email
      </button>
    </main>
  );
}
