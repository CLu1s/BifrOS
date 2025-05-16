"use client";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "@/firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error: any) {
      const errorMessage = error.message;
      console.log("login error", errorMessage);
      return false;
    }
  };

  return { login, user };
}
