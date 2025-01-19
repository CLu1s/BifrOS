"use client";
// import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import FirebaseProvider from "@/providers/FirebaseProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SidebarProvider>
        <FirebaseProvider>
          {children}
          <Toaster />
        </FirebaseProvider>
      </SidebarProvider>
    </Provider>
  );
};

export default Providers;
