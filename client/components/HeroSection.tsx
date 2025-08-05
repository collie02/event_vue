export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Hero Image Container */}
      <div className="relative h-80 md:h-96 bg-gradient-to-r from-blue-400 to-purple-500">
        {/* Car Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F89b56ce843f84e3d92b9396b0da46246%2Fcc2cb5ced361445a91c6f4fa4082e1c6?format=webp&width=800"
          alt="Airdrop Festival Car"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">
              Airdrop 感謝祭
            </h1>
            <p className="text-sm md:text-lg text-white/90">
              發送 Airdrop & Quiz 獲得抽獎機會
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
