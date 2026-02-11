'use client';

import { useEffect } from 'react';
import { saveProgress, getProgress } from '@/lib/indexedDb';

export default function Home() {
  useEffect(() => {
    async function testOfflineStorage() {
      await saveProgress('day-1', { solved: true, score: 80 });

      const data = await getProgress<{ solved: boolean; score: number }>(
        'day-1'
      );

      console.log('Offline progress:', data);
    }

    testOfflineStorage();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Daily Puzzle Game</h1>
    </main>
  );
}
