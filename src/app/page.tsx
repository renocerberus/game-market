import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div
      className="min-h-screen px-4 xl:px-12 2xl:px-45 bg-gradient-to-b from-transparent to-background bg-[url('/background.png')] bg-auto bg-center bg-no-repeat"
    >
      <div className="flex gap-2 xl:gap-4">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
