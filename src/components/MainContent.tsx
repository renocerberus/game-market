import React from "react";
// import Input from "./ui/Input";
import ProductCard from "./ProductCard";
import MarketListItem from "./MarketListItem";
import Image from "next/image";
import { ChevronDown, ChevronRight, SearchIcon } from "lucide-react";

export default function MainContent() {
  const products = [
    {
      gameIcon: "/newest-products/product-icon-1.png",
      gameTitle: "Genshin Impact",
      timePosted: "5 minutes ago",
      productImage: "/newest-products/product-thumbnail-1.png",
      title:
        "Asia [TL70] 8 Limited (AcheronE1 +sign, RuanMeiE1, Tribbie+Sign,Bothill+Sign, BSwan+ Sign,Aventurine) |Take Email|CHECK SS (HSR1354)",
      description: "Full description here",
      sellerName: "BestSpeed",
      sellerRating: 4.9,
      sellerReviewCount: 200,
      sellerAvatar: "/newest-products/product-avatar-1.png",
      price: "$49.99",
      type: "Limited",
      delivery: "In Chat",
      server: "Standard",
    },
    {
      gameIcon: "/newest-products/product-icon-2.png",
      gameTitle: "Path of Exile",
      timePosted: "10 minutes ago",
      productImage: "/newest-products/product-thumbnail-2.png",
      title: "Path of Exile Account with Premium Items",
      description: "Full description here",
      sellerName: "BestSpeed",
      sellerRating: 4.9,
      sellerReviewCount: 200,
      sellerAvatar: "/newest-products/product-avatar-2.png",
      price: "$0",
      type: "Account",
      delivery: "Instant",
      server: "Standard",
    },
  ];

  const markets = [
    {
      gameIcon: "/markets/POE.png",
      gameTitle: "Path of Exile",
      listingCount: 32,
      rating: 5,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/DF.png",
      gameTitle: "Delta Force",
      listingCount: 20,
      rating: 4.8,
      reviewCount: 45,
    },
    {
      gameIcon: "/markets/GI.png",
      gameTitle: "Genshin Impact",
      listingCount: 15,
      rating: 4.9,
      reviewCount: 120,
    },
    {
      gameIcon: "/markets/T.png",
      gameTitle: "Trove",
      listingCount: 8,
      rating: 4.7,
      reviewCount: 23,
    },
    {
      gameIcon: "/markets/D2.png",
      gameTitle: "Destiny 2",
      listingCount: 5,
      rating: 4.8,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/AO.png",
      gameTitle: "Albion Online",
      listingCount: 28,
      rating: 4.6,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/D4.png",
      gameTitle: "Diablo IV",
      listingCount: 18,
      rating: 4.9,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/G.png",
      gameTitle: "Growtopia",
      listingCount: 12,
      rating: 4.5,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/BDO.png",
      gameTitle: "Black Desert Online",
      listingCount: 8,
      rating: 4.7,
      reviewCount: 87,
    },
    {
      gameIcon: "/markets/V.png",
      gameTitle: "Valorant",
      listingCount: 2,
      rating: 4.8,
      reviewCount: 87,
    },
  ];

  return (
    <main className="flex-1 pb-4 xl:pb-6 px-3 xl:px-6 pt-2 min-w-0">
      {/* Newest Products Section */}
      <div className="mb-6 xl:mb-8">
        <div className="flex items-center justify-between mb-3 xl:mb-4">
          <h2 className="text-base xl:text-lg font-semibold text-foreground">
            Newest products
          </h2>
          <div className="flex gap-1 xl:gap-2 mt-2">
            <div
              className="w-fit mb-4 rounded-full gradient-button-border opacity-25"
              style={{ padding: "1px" }}
            >
              <div className="flex items-center gap-2 gradient-button px-1.5 xl:px-2 py-1.5 xl:py-2 rounded-full">
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow left"
                  width={14}
                  height={14}
                  className="text-foreground rotate-180 xl:w-4 xl:h-4"
                />
              </div>
            </div>
            <div
              className="w-fit mb-4 rounded-full gradient-button-border cursor-pointer"
              style={{ padding: "1px" }}
            >
              <div className="flex items-center gap-2 gradient-button px-1.5 xl:px-2 py-1.5 xl:py-2 rounded-full">
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow right"
                  width={14}
                  height={14}
                  className="text-foreground xl:w-4 xl:h-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden">
          <div className="w-full overflow-x-auto pb-4 hide-scrollbar relative">
            <div className="flex gap-3 xl:gap-4 w-max snap-x snap-mandatory">
              {products.map((product, index) => (
                <div key={index} className="flex-none snap-start">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute top-0 right-0 w-10 h-full"
            style={{
              background:
                "linear-gradient(270deg, #131923 8.15%, rgba(17, 24, 39, 0.5) 50.5%, rgba(17, 24, 39, 0) 92.86%)",
            }}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 xl:gap-6 mb-4 xl:mb-6 border-b border-gray-700">
        <button className="pb-2 px-3 xl:px-4 text-accent-blue font-medium border-b-2 border-accent-blue text-sm xl:text-base">
          BestSpeed markets
        </button>
        <button className="pb-2 px-3 xl:px-4 text-muted hover:text-foreground transition-colors text-sm xl:text-base">
          Recent reviews
        </button>
      </div>

      {/* BestSpeed Markets Section */}
      <div className="bg-card p-3 xl:p-4 rounded-lg border-1 border-[#374151]">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-3 xl:gap-0">
          <div className="text-base xl:text-lg font-semibold text-foreground">
            BestSpeed markets
          </div>
          <div className="bg-background rounded-xl px-3 xl:px-4 py-1 flex items-center gap-2 border-1 border-[#374151]">
            <input
              className="rounded-lg pr-4 py-2 text-sm placeholder:text-muted text-foreground w-60 xl:w-80"
              placeholder="Search markets..."
            />
            <SearchIcon className="w-4 h-4 xl:w-5 xl:h-5 text-muted" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:gap-4">
          {markets.map((m, idx) => (
            <MarketListItem key={idx} {...m} />
          ))}
        </div>

        {/* Pagination mock */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mt-4 xl:mt-6 text-muted gap-3 xl:gap-0">
          <div className="flex items-center gap-3 xl:gap-4">
            <div className="bg-background border-1 border-[#374151] rounded-lg px-2 py-2 flex items-center gap-1">
              <span className="text-muted text-xs xl:text-sm">10</span>
              <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5 text-muted" />
            </div>
            <span className="text-muted text-xs xl:text-sm">
              Showing <b>1</b> of 10 from <b>20</b> Results
            </span>
          </div>
          <div className="flex items-center gap-1 xl:gap-2">
            <button className="bg-[#374151] rounded-lg px-2 py-1 text-white text-xs xl:text-sm">
              01
            </button>
            <button className="rounded-lg px-2 py-1 text-muted text-xs xl:text-sm">02</button>
            <button className="rounded-lg px-2 py-1 flex items-center gap-1 xl:gap-2 text-white text-xs xl:text-sm">
              Next{" "}
              <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
