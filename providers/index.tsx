"use client";
// import { ClerkProvider } from "@clerk/nextjs";
// import { HeroUIProvider } from "@heroui/react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "@/components/ui/sidebar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SidebarProvider>
        {children}
        <Toaster />
      </SidebarProvider>
    </Provider>
  );
};

export default Providers;
