export default function Footer() {
  return (
    <>
     <footer className="bg-white max-sm:bg-[#F6F7F9] max-w-[1440px] h-auto">
  <div>
    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] px-4 sm:px-8 lg:px-16 pt-12 max-sm:gap-[16px]">
      {/* Logo and Vision */}
      <div className="text-left">
        <h1 className="font-bold mt-[80px] pl-[40px] gap-[16px] text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[32px]">
          MORENT
        </h1>
        <p className="text-sm text-[#90A3BF] mt-2 w-[332px] pl-[40px] leading-[24px] tracking-[-2%] text-[16px] font-medium">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>

      {/* About Section */}
      <div className="lg:pl-[350px] max-sm:pl-[24px] max-sm:pt-[16px]">
        <h2 className="font-semibold text-[#1A202C] text-[16px]">About</h2>
        <ul className="mt-[16px] text-[#90A3BF] text-[14px] space-y-[8px]">
          <li><a href="#" className="hover:text-blue-500">How it works</a></li>
          <li><a href="#" className="hover:text-blue-500">Featured</a></li>
          <li><a href="#" className="hover:text-blue-500">Partnership</a></li>
          <li><a href="#" className="hover:text-blue-500">Business Relation</a></li>
        </ul>
      </div>

      {/* Community Section */}
      <div className="lg:pl-[220px] max-sm:pl-[24px] max-sm:pt-[16px]">
        <h2 className="font-semibold text-[#1A202C] text-[16px]">Community</h2>
        <ul className="mt-[16px] text-[#90A3BF] text-[14px] space-y-[8px]">
          <li><a href="#" className="hover:text-blue-500">Events</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">Podcast</a></li>
          <li><a href="#" className="hover:text-blue-500">Invite a friend</a></li>
        </ul>
      </div>

      {/* Socials Section */}
      <div className="lg:pl-[110px] max-sm:pl-[24px] max-sm:pt-[16px]">
        <h2 className="font-semibold text-[#1A202C] text-[16px]">Socials</h2>
        <ul className="mt-[16px] text-[#90A3BF] text-[14px] space-y-[8px]">
          <li><a href="#" className="hover:text-blue-500">Discord</a></li>
          <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
          <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
          <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 px-4 sm:px-8 lg:px-16 py-4">
      <p className="text-[#1A202C] font-medium text-[14px]">© 2022 MORENT. All rights reserved</p>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="#" className="text-[#1A202C] text-[14px] hover:text-blue-500">Privacy & Policy</a>
        <a href="#" className="text-[#1A202C] text-[14px] hover:text-blue-500">Terms & Condition</a>
      </div>
    </div>
  </div>
</footer>


    </>
  );
}