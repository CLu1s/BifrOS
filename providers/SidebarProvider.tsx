import { SidebarProvider } from "@/components/ui/sidebar";

const SidebarProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default SidebarProviderContainer;
