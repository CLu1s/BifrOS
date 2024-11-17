"use client";
// import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import FirebaseProvider from "@/providers/FirebaseProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/*<ClerkProvider dynamic>*/}
      <FirebaseProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </FirebaseProvider>
      {/*</ClerkProvider>*/}
      <Toaster />
    </Provider>
  );
};

export default Providers;
