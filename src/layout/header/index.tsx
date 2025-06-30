import { ChevronDown, Heart, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="min-h-[94px] flex items-center justify-center">
      <div className="container mx-auto px-[1px]">
        <ul className="flex items-center justify-between">
          <li>
            <Image
              src={
                "https://demo-ecomus-global.myshopify.com/cdn/shop/files/Ecomus.svg?v=1699583364&width=136"
              }
              width={136}
              height={21}
              alt="logo"
            />
          </li>
          <li>
            <ul>
              <li>
                <ul className="flex items-center gap-7">
                  <li className="flex items-center gap-1">
                    Home <ChevronDown size={18} />
                  </li>

                  <li className="flex items-center gap-1">
                    <Link href="/shop" className="flex items-center gap-1">
                      Shop <ChevronDown size={18} />
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    Products <ChevronDown size={18} />
                  </li>
                  <li className="flex items-center gap-1">
                    Pages <ChevronDown size={18} />
                  </li>
                  <li className="flex items-center gap-1">
                    Blog <ChevronDown size={18} />
                  </li>
                  <li>Buy now</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex items-center gap-5">
              <li>
                <Search />
              </li>
              <li>
                <User />
              </li>
              <li>
                <Heart />
              </li>
              <li>
                <ShoppingBag />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
