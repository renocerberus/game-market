import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div
      className="min-h-screen px-45"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, #111827 100%), url(/background.png)",
        backgroundSize: "auto, contain",
        backgroundPosition: "center, top",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
