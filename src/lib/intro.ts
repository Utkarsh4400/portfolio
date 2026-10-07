import { useSyncExternalStore } from "react";

// Tiny store so the hero can wait for the intro curtain before animating in.
let done = false;
const listeners = new Set<() => void>();

export function setIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((l) => l());
}

export function useIntroDone() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => done,
    () => false,
  );
}
