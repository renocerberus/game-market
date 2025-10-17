import React from "react";
import Card from "./ui/Card";
import Avatar from "./ui/Avatar";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 xl:w-72 2xl:w-80 py-4 xl:py-6 flex-shrink-0">
      <Card className="h-full flex flex-col justify-between">
        <div
          className="flex flex-col border-b gap-3 items-center justify-center"
          style={{ borderColor: "#374151" }}
        >
          {/* Profile Header */}
          <div className="text-center items-center justify-center flex flex-col px-2">
            <Avatar
              size="xl"
              className="mx-auto mb-3 xl:mb-4"
              src="/side-bar-profile.png"
              alt="BestSpeed Profile"
              isOnline
            />
            <h2 className="text-lg xl:text-xl font-bold text-foreground mb-2">
              BestSpeed
            </h2>
            <div className="flex items-center gap-1">
              <span className={`text-sm xl:text-md text-accent-gold`}>★</span>
              <span className="text-accent-gold font-semibold text-sm xl:text-base">4.9</span>
              <span className="text-muted text-xs xl:text-sm">(200 reviews)</span>
            </div>
            <p className="text-muted text-xs xl:text-sm mt-1">Member since 2025</p>
          </div>

          {/* Chat Button */}
          <div
            className="w-fit mb-4 xl:mb-6 rounded-xl gradient-button-border"
            style={{ padding: "1px" }}
          >
            <div className="flex items-center gap-2 gradient-button px-3 xl:px-4 py-2 rounded-xl">
              <Image src="/icons/chat.svg" alt="Heart" width={14} height={14} className="xl:w-4 xl:h-4" />
              <span className="text-foreground text-sm xl:text-base">Chat seller</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-4 xl:mb-6 px-2">
          <h3 className="text-base xl:text-lg font-semibold text-foreground mb-2 xl:mb-3">About</h3>
          <span className="text-muted text-xs xl:text-sm leading-relaxed">
            ⚡ BestSpeed – Fast & Trusted Game Boosting Services <br />🟢 Available
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
        <div className="flex flex-col gap-2 px-2">
          <div className="flex items-center text-foreground justify-between mb-2 xl:mb-3">
            <h3 className="text-base xl:text-lg font-semibold text-foreground">Badges</h3>
            <button className="text-accent-blue text-xs xl:text-sm underline cursor-pointer">
              See all badges
            </button>
          </div>
          <div className="flex gap-1.5 xl:gap-3 justify-center xl:justify-start">
            <div className="bg-white rounded-full p-0.5 flex flex-col items-center justify-center relative">
              <Image
                src="/badge-verified.png"
                alt="Badge"
                width={40}
                height={40}
                className="object-contain xl:w-[50px] xl:h-[50px] 2xl:w-[62px] 2xl:h-[62px]"
              />
              <div className="bg-white text-center rounded-lg px-0.5 xl:px-1 absolute -bottom-0.5 xl:-bottom-1">
                <span className="text-[10px] xl:text-xs 2xl:text-sm" style={{ color: "#374151" }}>
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
                width={40}
                height={40}
                className="object-contain xl:w-[50px] xl:h-[50px] 2xl:w-[62px] 2xl:h-[62px]"
              />
              <div className="bg-white text-center rounded-lg px-0.5 xl:px-1 absolute -bottom-0.5 xl:-bottom-1">
                <span className="text-[10px] xl:text-xs 2xl:text-sm" style={{ color: "#374151" }}>
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
                width={40}
                height={40}
                className="object-contain xl:w-[50px] xl:h-[50px] 2xl:w-[62px] 2xl:h-[62px]"
              />
              <div className="bg-white text-center rounded-lg px-0.5 xl:px-1 absolute -bottom-0.5 xl:-bottom-1">
                <span className="text-[10px] xl:text-xs 2xl:text-sm" style={{ color: "#374151" }}>
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
