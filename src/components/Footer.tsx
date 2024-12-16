export default function Footer() {
  return (
    <>
 <footer className="bg-white max-sm:bg-[#F6F7F9] max-w-[1440px] h-auto">
        <div>
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] px-4 sm:px-8 lg:px-16 pt-12 max-sm:gap-[24px] ">
            {/* Logo and Vision */}
            <div className="text-left">
              <h1 className="font-bold mt-[40px] pl-[40px] gap-[16px] text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[32px]">
                MORENT
              </h1>
              <div className="w-[292px] h-[108px]">
                <p className="text-sm text-[#90A3BF] mt-2 w-[332px] h-[48px] pl-[40px] gap-[8px] leading-[24px] tracking-[-2%] text-[16px] font-medium ">
                  Our vision is to provide convenience and help increase your
                  sales business.
                </p>
              </div>
            </div>

            {/* About Section */}
            <div className=" pl-[350px] max-sm:pl-16 max-sm:pt-28 ">
              <h2 className="w-[152px] h-[32px] pt-[40px] left-[804px] max-sm:gap-[16px] font-semibold text-[#1A202C]">
                About
              </h2>
              <ul className="w-[152px] h-[188px] mt-[40px] text-[#13131399] font-medium text-[16px] leading-[24px] tracking-[-0.02em] space-y-2 ">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF] hover:text-blue-500"
                  >
                    Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF] hover:text-blue-500"
                  >
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div className=" pl-[220px] max-sm:pl-16">
              <h2 className="w-[152px] h-[32px] pt-[40px] left-[1016px] font-semibold text-[#1A202C]">
                Community
              </h2>
              <ul className="w-[152px] h-[188px] mt-[40px] text-[#90A3BF] font-medium text-[16px] leading-[24px] tracking-[-0.02em] space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF] "
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF] "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className="pl-[110px] max-sm:pl-16">
              <h2 className="w-[152px] h-[32px] pt-[40px] left-[1228px] font-semibold text-[#1A202C]">
                Socials
              </h2>
              <ul className="w-[152px] h-[188px] mt-[40px] text-[#90A3BF] font-medium text-[16px] leading-[24px] tracking-[-0.02em] space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF] "
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#90A3BF]"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 px-[60px] p-[24px]">
            <p className="text-[#1A202C] font-semibold text-[16px] leading-[24px] tracking-[-2%]">
              © 2022 MORENT. All rights reserved
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0 text-right">
              <a
                href="#"
                className="font-semibold text-[16px] leading-[24px] tracking-[-2%] text-[#1A202C]"
              >
                Privacy & Policy
              </a>
              <a
                href="#"
                className="font-semibold text-[16px] leading-[24px] tracking-[-2%] text-[#1A202C]"
              >
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}