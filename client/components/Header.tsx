import { Menu, Grid3X3, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-cos-grey-bg shadow-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center px-4 py-2 h-16">
        {/* Menu Button */}
        <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
          <Menu size={24} className="text-black/54" />
        </button>

        {/* Logo - Hidden on Mobile */}
        <div className="hidden md:flex items-center ml-4 mr-6">
          <div className="text-xl font-semibold text-cos-blue flex items-center">
            <span className="bg-cos-blue text-white px-2 py-1 rounded text-sm mr-2">
              COS
            </span>
            <span className="text-black/87">TV</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl text-black/87 font-normal flex-1 md:flex-none ml-4 md:ml-0">
          Channel VIP
        </h1>

        {/* Spacer - Hidden on Mobile */}
        <div className="hidden md:flex flex-1" />

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* App Grid Button - Hidden on Mobile */}
          <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
            <Grid3X3 size={24} className="text-black/54" />
          </button>

          {/* Search Button - Mobile Only */}
          <button className="md:hidden flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
            <Search size={24} className="text-black/54" />
          </button>

          {/* Profile Button - Mobile Only */}
          <button className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
            <User size={24} className="text-black/54" />
          </button>
        </div>
      </div>
    </header>
  );
}
