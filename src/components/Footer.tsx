import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="relative flex flex-col items-center space-y-6 px-6 w-full bg-white py-8">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Brand Section */}
        <div className="brand flex flex-col space-y-3 w-full lg:w-1/3">
          <h1 className="font-bold text-center md:text-left pl-[40px] gap-[16px] text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[32px]">
            MORENT
          </h1>
          <p className=" text-[#90A3BF] text-center pl-[40px] gap-[16px] lg:text-left max-w-md">
            Our vision is to provide convenience
            <br />
            and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="links flex flex-wrap justify-center pr-[40px] lg:justify-end gap-12 w-full lg:w-2/3 mb-5">
          <div className="link-group">
            <h2 className="font-semibold text-xl text-[#1A202C]">About</h2>
            <ul className="space-y-4 text-sm mt-4 text-[#90A3BF] ">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relations</li>
            </ul>
          </div>
          <div className="link-group">
            <h2 className="font-semibold text-xl text-[#1A202C]">Community</h2>
            <ul className="space-y-4 text-sm mt-4 text-[#90A3BF] ">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite Friends</li>
            </ul>
          </div>
          <div className="link-group ">
            <h2 className="font-semibold text-xl text-[#1A202C]">Socials</h2>
            <ul className="space-y-4 text-sm mt-4 text-[#90A3BF] ">
              <li>
                <Link href="https://www.discord.com">Discord</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.facebook.com">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t w-full border-gray-200"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center lg:text-left w-full lg:w-auto pl-[40px]">
          <p className="font-bold">&copy; 2022 MORENT. All rights reserved.</p>
        </div>
        <div className="policies flex space-x-6 justify-center lg:justify-end w-full lg:w-auto pr-[40px]">
          <p className="font-bold text-sm">Privacy Policy</p>
          <p className="font-bold text-sm">Terms & Conditions</p>
        </div>
      </div>
    </footer>
    </>
  );
}

