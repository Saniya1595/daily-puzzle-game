import { openDB, IDBPDatabase } from 'idb';

const DB_NAME = 'daily-puzzle-db';
const STORE_NAME = 'progress';

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDb() {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      },
    });
  }

  return dbPromise;
}

export async function saveProgress(key: string, value: unknown) {
  const db = getDb();
  if (!db) return;

  await (await db).put(STORE_NAME, value, key);
}

export async function getProgress<T>(key: string): Promise<T | undefined> {
  const db = getDb();
  if (!db) return undefined;

  return (await db).get(STORE_NAME, key);
}

export async function clearProgress(key: string) {
  const db = getDb();
  if (!db) return;

  await (await db).delete(STORE_NAME, key);
}
