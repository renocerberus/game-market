import React from "react";
import Card from "./ui/Card";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-80 py-6">
      <Card className="h-full flex flex-col justify-between">
        <div
          className="flex flex-col border-b gap-3 items-center justify-center"
          style={{ borderColor: "#374151" }}
        >
          {/* Profile Header */}
          <div className="text-center items-center justify-center flex flex-col">
            <Avatar
              size="xl"
              className="mx-auto mb-4"
              src="/side-bar-profile.png"
              alt="BestSpeed Profile"
              isOnline
            />
            <h2 className="text-xl font-bold text-foreground mb-2">
              BestSpeed
            </h2>
            <div className="flex items-center gap-1">
              <span className={`text-md text-accent-gold`}>★</span>
              <span className="text-accent-gold font-semibold">4.9</span>
              <span className="text-muted text-sm">(200 reviews)</span>
            </div>
            <p className="text-muted text-sm mt-1">Member since 2025</p>
          </div>

          {/* Chat Button */}
          <div
            className="w-fit mb-6 rounded-xl gradient-button-border"
            style={{ padding: "1px" }}
          >
            <div className="flex items-center gap-2 gradient-button px-4 py-2 rounded-xl">
              <Image src="/icons/chat.svg" alt="Heart" width={16} height={16} />
              <span className="text-foreground">Chat seller</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
          <span className="text-muted">
            ⚡ BestSpeed – Fast & Trusted Game Boosting Services 🟢 Available
            24/7 🚀 Delivery Time: Usually within 1–15 minutes after your order
            is received (mostly instant!) <br />
            <br /> Got any questions about our services? Need a custom order,
            special request, or something else?
            <br />
            <br /> 💬 Just message us — we&apos;re always ready to help.
            <br />
            <br />
            BestSpeed is trusted by thousands of gamers worldwide for speed,
            reliability, and excellent customer service. Let us handle the grind
            while you enjoy the game.
          </span>
        </div>

        {/* Badges Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-foreground justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground">Badges</h3>
            <button className="text-accent-blue text-sm underline cursor-pointer">
              See all badges
            </button>
          </div>
          <div className="flex gap-3">
            <div className="bg-white rounded-full p-0.5 flex flex-col items-center justify-center relative">
              <Image
                src="/badge-verified.png"
                alt="Badge"
                width={62}
                height={62}
                className="object-contain"
              />
              <div className="bg-white text-center rounded-lg px-1 absolute -bottom-1">
                <span className="text-sm" style={{ color: "#374151" }}>
                  Level{" "}
                  <span className="font-semibold" style={{ color: "#5961F3" }}>
                    3
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-full p-0.5 flex flex-col items-center justify-center relative">
              <Image
                src="/badge-elite-buyer.png"
                alt="Badge"
                width={62}
                height={62}
                className="object-contain"
              />
              <div className="bg-white text-center rounded-lg px-1 absolute -bottom-1">
                <span className="text-sm" style={{ color: "#374151" }}>
                  Level{" "}
                  <span className="font-semibold" style={{ color: "#5961F3" }}>
                    3
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-full p-0.5 flex flex-col items-center justify-center relative">
              <Image
                src="/badge-topup-streak.png"
                alt="Badge"
                width={62}
                height={62}
                className="object-contain"
              />
              <div className="bg-white text-center rounded-lg px-1 absolute -bottom-1">
                <span className="text-sm" style={{ color: "#374151" }}>
                  Level{" "}
                  <span className="font-semibold" style={{ color: "#5961F3" }}>
                    4
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </aside>
  );
}
