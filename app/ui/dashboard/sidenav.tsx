import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="relative mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40 flex items-center justify-center overflow-hidden">
          {/* <p className="text-[44px]">Logo</p> */}
          <Image
            src="/logo-1.png"
            fill
            alt="logo de combate ao mosquito aedes"
            loading="eager"
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-700 md:block"></div>
        <form
          action={async () => {
            "use server";
          }}
        >
          <button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-700 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-800 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
