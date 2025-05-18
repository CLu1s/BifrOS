import { exec } from "child_process";

export default async function () {
  // Start the Firestore emulator
  exec("firebase emulators:start --only firestore");
  return () => {
    // Stop the Firestore emulator
    exec("firebase emulators:stop");
  };
}
