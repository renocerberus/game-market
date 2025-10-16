import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-45 py-8" style={{ background: "#111827" }}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 col-span-2">
          <Image
            src="/game-market-logo.png"
            alt="Game Market Logo"
            width={57}
            height={42}
          />
          <p className="text-md text-muted">
            <b>GameMarket.gg</b> is a crypto-powered marketplace to buy and sell
            game accounts, items, services, top-up, and other digital assets.
          </p>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-muted font-semibold">Info</h3>
          <ul className="text-muted text-sm gap-2 flex flex-col">
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-muted font-semibold">Quick Links</h3>
          <ul className="text-muted text-sm gap-2 flex flex-col">
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                Submit a Request
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                Bug Bounty Hunter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                GM Coins Merchants
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted hover:text-accent-blue transition-colors"
              >
                support@gamemarket.gg
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-muted font-semibold">Follow us</h3>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <Image
                src="/icons/x.svg"
                alt="faceb ook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div>
            <p className="text-muted text-sm">© 2025 GameMarket.gg</p>
            <p className="text-muted text-sm">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
