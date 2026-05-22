import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row  dark:bg-gray-800 dark:text-white">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6  md:p-12">{children}</div>
    </div>
  );
}
