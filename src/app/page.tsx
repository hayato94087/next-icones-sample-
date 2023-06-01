import Link from "next/link";
import { MaterialSymbolsLogin } from "@/components/MaterialSymbolsLogin";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <Link
        href="/login"
        className="flex flex-row justify-center items-center rounded-lg px-2 pt-2 pb-2 border-[2px] border-main500 shadow-md space-x-2 md:px-4 w-[130px] border-[#fe9611] bg-[#fe9611] text-white"
      >
        <MaterialSymbolsLogin />
        <label className="text-sm font-bold">ログイン</label>
      </Link>
    </main>
  );
}
