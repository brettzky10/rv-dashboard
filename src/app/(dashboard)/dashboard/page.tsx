import { redirect } from "next/navigation";
import { Footer, Header, Navbar } from "@/components/global";
import SplineComponent from "@/components/dashboard/spline-component";
import readUserSession from "@/lib/actions";

export default async function Home() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/auth");
  }
  return (
    <div className="bg-gradient-to-t from-[#111627] to-[#344378] h-screen">
      <div className="absolute w-full h-full text-white flex flex-col justify-between">
        <div className="flex flex-col">
          <Navbar />
          <Header />
        </div>
        <Footer />
      </div>
      <SplineComponent/>
    </div>
  );
}