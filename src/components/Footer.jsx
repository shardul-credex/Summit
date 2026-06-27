export default function Footer() {
  return (
    <footer className="bg-[#EFE5D6] text-[#1F1F1F]">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6"
      >

        <div className="flex items-center gap-6">

          <h2
            className="
            font-bold
            tracking-[6px]
            uppercase"
          >
            SUMMIT
          </h2>

          <span className="text-gray-500 uppercase text-xs">
            Est. 2026
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-gray-500">
            © 2026 Summit
          </span>

          <a
            href="#"
            className="
            hover:text-[#C97A55]
            duration-300 opacity-30"
          >
            <img src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
