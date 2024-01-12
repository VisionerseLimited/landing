import { HiChevronRight } from "react-icons/hi";

export default function HamburgerMenu() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-10 w-[100vw]">
        <div
          className="box-border border border-solid border-gray-700  flex w-11/12 origin-top select-none flex-col rounded-xl bg-gray-800 shadow-lg md:hidden"
          style={{ opacity: 1, transform: "none" }}
        >
          <div>
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/[slug]"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Product
                </span>
                <HiChevronRight size={24} />
              </div>
              <div className="h-full w-full "></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/pricing"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Pricing
                </span>
              </div>
              <div className="h-full w-full "></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/[slug]"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Blog
                </span>
                <HiChevronRight size={24} />
              </div>
              <div className="h-full w-full grid grid-cols-2"></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/[slug]"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Resources
                </span>
                <HiChevronRight size={24} />
              </div>
              <div className="h-full w-full grid grid-cols-2"></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/download"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Download
                </span>
              </div>
              <div className="h-full w-full "></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              target="_blank"
              href="https://app.skiff.com/signin?s=referer-header&amp;c=https%3A%2F%2Fwww.landingfolio.com%2F&amp;pt=2.0%3A+Privacy-first%2C+end-to-end+encrypted+email+%28with+color%29.&amp;agid=undefined&amp;aid=undefined&amp;gclid=undefined"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-b border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Sign in
                </span>
              </div>
              <div className="h-full w-full "></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
