'use client';

import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Daily Puzzle Game</h1>
      <LoginButton />
    </main>
  );
}
