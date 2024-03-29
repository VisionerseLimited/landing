"use client";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Transition } from "@headlessui/react";
import { HiChevronDown, HiChevronRight, HiChevronUp } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-[9999] flex w-full items-center justify-center">
      {/*<Transition
        as="div"
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HamburgerMenu />
  </Transition>*/}
      <div className="mt-4 flex w-11/12 gap-6 rounded-2xl border border-solid border-gray-700 bg-gray-800 p-1 shadow-xl md:w-fit">
        <div
          className={
            "transition-max-height duration-150 flex-col w-full items-center justify-between gap-0 md:justify-start " +
            (isOpen ? "max-h-96" : "max-h-9")
          }
        >
          <div className="h-9 flex mb-2 w-full item-center justify-between gap-0 md:justify-start">
            <a rel="noreferrer, noopener" href="/">
              <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="26"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M15.774 2.013a7.283 7.283 0 0 1 3.117.638 11.77 11.77 0 0 0-2.336-1.15 12.258 12.258 0 0 0-6.29-.587A12.31 12.31 0 0 0 4.51 3.54c-.105.078-.382.334-.491.426-.11.092-.36.34-.455.458-.095.12-.309.326-.454.459-.145.133-.323.38-.418.5l-.327.43c-.087.12-.286.417-.368.537-.082.119-.137.224-.173.28-.036.054-.118.192-.14.228-.023.037-.237.431-.292.523-.054.092-.218.458-.281.587l-.214.5c0 .054-.163.458-.19.508-.028.05-.096.293-.132.413-.078.229-.146.495-.21.728-.036.142-.108.495-.14.637v.11c-.53 2.918-.01 5.93 1.467 8.494.15.248.355.587.527.82.064.097.178.262.25.354l.264.348.418.495.454.458c.087.078.223.225.314.298l.163.142.041.032.041.032.082.07c.104.086.236.178.345.256l.087.06.09.06c.096.063.264.169.369.224.104.055.136.082.186.105l.286.142c.091.046.21.096.295.133.214.087.455.165.655.238.118.028.245.07.363.101l.314.07.318.054c.365.055.734.082 1.104.083a7.262 7.262 0 0 0 2.622-.573 7.16 7.16 0 0 0 2.335-1.624 7.233 7.233 0 0 0 1.527-2.41l.077-.202c0-.069.078-.247.1-.311.041-.165.1-.362.132-.527 0-.06.036-.152.045-.211.053-.317.088-.637.105-.958v-.376c-.236 0-.454-.032-.7-.06a7.28 7.28 0 0 1-4.719-2.598A7.404 7.404 0 0 1 8.508 8.93a7.388 7.388 0 0 1 2.279-4.912 7.263 7.263 0 0 1 4.996-2.004h-.01ZM5.518 20.678a8.963 8.963 0 0 1-.795-.76 11.308 11.308 0 0 1-2.39-3.95 11.381 11.381 0 0 1 .638-9.034 11.269 11.269 0 0 1 2.92-3.568c.09-.078.236-.18.327-.248a11.06 11.06 0 0 1 1.136-.747 10.875 10.875 0 0 1 4.09-1.325l.53-.046h1.068l-.532.042-.527.068-.522.088A11.054 11.054 0 0 0 7.06 3.062a11.167 11.167 0 0 0-3.219 3.555 11.294 11.294 0 0 0-.84 9.367 11.07 11.07 0 0 0 1.936 3.383l.081.101.041.05.046.046c.225.262.467.51.722.743a6.31 6.31 0 0 0 6.816 1 6.315 6.315 0 0 1-7.125-.629Zm1.532-2.1-.082-.086-.046-.041-.304-.312a10.02 10.02 0 0 1-2.086-3.381 10.086 10.086 0 0 1 .343-7.798 9.999 9.999 0 0 1 2.374-3.182 9.823 9.823 0 0 1 1.604-1.155c.2-.11.455-.243.655-.348.077-.042.15-.064.222-.101a9.514 9.514 0 0 1 2.826-.77c.128 0 .355-.037.482-.041h.364c.364-.006.728.01 1.09.045-.562.007-1.122.058-1.676.152a9.893 9.893 0 0 0-4.391 1.904 10.008 10.008 0 0 0-3.002 3.752 9.918 9.918 0 0 0 .977 9.832c.077.096.204.28.286.376.136.17.309.376.454.536a5.482 5.482 0 0 0 3.11 1.776 5.451 5.451 0 0 0 3.534-.53c-2.032 1.445-4.949 1.041-6.734-.627Zm1.23-3.3c.386.56.844 1.065 1.364 1.5a5.001 5.001 0 0 0 4.626.917 4.82 4.82 0 0 1-4.122-.12 5.73 5.73 0 0 1-1.722-1.31 8.726 8.726 0 0 1-1.859-3.171 8.781 8.781 0 0 1 .749-7.161 8.68 8.68 0 0 1 2.473-2.71c.1-.073.255-.169.364-.238.2-.133.454-.261.65-.376.195-.114.336-.165.486-.229a8.331 8.331 0 0 1 2.894-.664h.846l.313.027c.173 0 .345.046.518.069h-.936a9.1 9.1 0 0 0-2.326.458 8.448 8.448 0 0 0-3.343 2.056 8.546 8.546 0 0 0-2.067 3.353 8.606 8.606 0 0 0 1.093 7.604v-.004Z"
                    ></path>
                    <path
                      fill="#000"
                      d="M19.89 22.695c.1-.078.382-.335.491-.426l.455-.459.454-.458c.105-.124.323-.376.418-.5l.327-.43c.087-.12.287-.418.368-.537l.173-.28c.027-.036.118-.192.141-.229.023-.036.236-.426.286-.522.05-.096.223-.459.287-.587.063-.128.15-.353.213-.5 0-.05.164-.458.186-.508.023-.05.1-.294.137-.413.077-.229.145-.495.209-.729.036-.142.104-.495.14-.637v-.105a12.53 12.53 0 0 0-1.467-8.494c-.15-.252-.354-.586-.527-.825a6.19 6.19 0 0 0-.25-.353l-.264-.343c-.09-.106-.331-.4-.422-.5-.091-.1-.3-.325-.455-.458-.081-.078-.222-.225-.309-.298l-.163-.138-.041-.037-.041-.032-.086-.068c-.1-.087-.232-.18-.341-.257l-.091-.06-.086-.06c-.1-.063-.264-.169-.368-.224-.105-.055-.137-.082-.187-.105l-.286-.142-.295-.133c-.214-.087-.455-.165-.655-.239l-.363-.096-.314-.073-.318-.055a7.458 7.458 0 0 0-1.104-.083c-.901.027-1.79.22-2.622.573A7.16 7.16 0 0 0 10.785 4.5a7.233 7.233 0 0 0-1.527 2.41l-.077.206c-.023.064-.077.243-.1.307-.045.165-.1.362-.132.527 0 .06-.036.152-.045.211a7.762 7.762 0 0 0-.114.972v.399a7.186 7.186 0 0 1 2.795.601 7.24 7.24 0 0 1 2.346 1.646 7.31 7.31 0 0 1 1.532 2.433 7.38 7.38 0 0 1 .48 2.841 7.566 7.566 0 0 1-1.012 3.47 7.487 7.487 0 0 1-2.5 2.59 7.406 7.406 0 0 1-6.94.495 12.27 12.27 0 0 0 8.638 1.731 12.323 12.323 0 0 0 5.762-2.643Zm-.999-17.152c.282.238.55.492.804.76a11.364 11.364 0 0 1 3.034 8.066 11.352 11.352 0 0 1-3.488 7.877c-.11.1-.286.275-.404.367l-.21.174-.108.091-.05.042-.273.206c-.367.27-.749.519-1.145.742l-.482.257a10.65 10.65 0 0 1-5.216 1.11 11.35 11.35 0 0 0 7.674-3.585 11.173 11.173 0 0 0 2.98-7.04 11.192 11.192 0 0 0-2.234-7.316c-.096-.138-.223-.28-.328-.408l-.081-.1-.041-.051-.041-.05a6.353 6.353 0 0 0-3.476-2.17 6.31 6.31 0 0 0-4.067.414 6.316 6.316 0 0 1 7.152.614Zm-1.817 1.833c.145.115.29.252.427.376a9.996 9.996 0 0 1 2.546 4.092c.504 1.553.622 3.208.344 4.818a10.026 10.026 0 0 1-1.94 4.417 9.908 9.908 0 0 1-3.768 2.982l-.227.096-.054.023-.06.023-.113.046c-.118.041-.336.128-.454.165a9.32 9.32 0 0 1-3.849.412c.64-.011 1.28-.079 1.909-.201a9.901 9.901 0 0 0 4.235-1.953 10.014 10.014 0 0 0 2.89-3.685 9.904 9.904 0 0 0-1.114-9.993c-.082-.114-.204-.256-.29-.366-.087-.11-.269-.303-.392-.459a5.48 5.48 0 0 0-3.09-1.685 5.452 5.452 0 0 0-3.47.549c1.921-1.376 4.68-1.1 6.474.362l-.005-.019Zm-4.862 16.415.377-.16.368-.18c.14-.068.309-.17.454-.247l.432-.27c.123-.088.295-.207.413-.299a8.518 8.518 0 0 0 3.231-5.265 8.57 8.57 0 0 0-1.163-6.08l-.223-.338-.24-.326-.255-.32a6.288 6.288 0 0 0-.854-.853 5.01 5.01 0 0 0-4.617-.917 4.923 4.923 0 0 1 4.894.555c.47.34.897.741 1.268 1.191a8.702 8.702 0 0 1 1.854 3.788 8.746 8.746 0 0 1-.14 4.222 8.69 8.69 0 0 1-2.1 3.654 8.586 8.586 0 0 1-3.563 2.22 8.112 8.112 0 0 1-3.776.253 9.162 9.162 0 0 0 3.644-.61l-.004-.018Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
            <div className="flex h-full w-fit items-center gap-x-2 md:hidden">
              <a
                className="h-full"
                href="/signup"
              >
                <span className="body-small ml-2 flex h-full cursor-pointer items-center rounded-xl px-3 bg-purple-500 font-medium text-white hover:opacity-[.8]">
                  Sign up
                </span>
              </a>
              <button
                onClick={handleClick}
                className="inline-flex body-small justify-center h-full rounded-xl ml-2 bg-black bg-opacity-20 px-3 items-center font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Menu
                <HiChevronDown
                  className="ml-2 -mr-1 mt-0.5 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </button>
              {/*
            <nav className="flex h-9 w-9 items-center justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-gray-700/[0.8]">
                <button
                  onClick={handleClick}
                  className="flex flex-col justify-center items-center"
                >
                  <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm my-1 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
                    }`}
                  ></span>
                </button>
              </div>
            </nav>
                  */}
            </div>
            <div className="hidden md:inline">
              <div className="h-9 flex cursor-default items-center">
                <span className="body-small flex h-full items-center px-3 text-white">
                  Product
                </span>
                <div
                  className="-ml-2"
                  style={{ transform: "rotate(180deg) translateZ(0)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      fillOpacity="0.6"
                      fillRule="evenodd"
                      d="m7.488 4.987 4.14 4.14-.873.873-3.267-3.267L4.22 10l-.873-.873 4.14-4.14Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <a
              className="hidden md:inline"
              rel="noopener, noreferrer"
              target="true"
              href="/pricing"
            >
              <span className="body-small hidden h-full cursor-pointer items-center px-3 text-white hover:opacity-80 md:flex">
                Pricing
              </span>
            </a>
            <div className="hidden md:inline">
              <div className="h-9 flex cursor-default items-center">
                <span className="body-small flex h-full items-center px-3 text-white">
                  Resources
                </span>
                <div
                  className="-ml-2"
                  style={{ transform: "rotate(180deg) translateZ(0)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      fillOpacity="0.6"
                      fillRule="evenodd"
                      d="m7.488 4.987 4.14 4.14-.873.873-3.267-3.267L4.22 10l-.873-.873 4.14-4.14Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <a
              className="hidden md:inline"
              rel="noopener, noreferrer"
              href="/cards"
            >
              <span className="body-small hidden h-full cursor-pointer items-center px-3 text-white hover:opacity-80 md:flex">
                Cards
              </span>
            </a>
            <a
              className="hidden h-full md:inline"
              target="_blank"
              href="/signup"
            >
              <span className="body-small ml-2 hidden h-full cursor-pointer items-center rounded-xl bg-purple-500 px-3 font-medium text-white hover:opacity-75 md:flex">
                Sign up
              </span>
            </a>
          </div>
          <Transition
            as="div"
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <a
              className="[&amp;>div]:last:border-none"
              rel="noopener, noreferrer"
              target=""
              href="/[slug]"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-t border-white/[0.06] px-4 py-3">
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
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-t border-white/[0.06] px-4 py-3">
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
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-t border-white/[0.06] px-4 py-3">
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
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-t border-white/[0.06] px-4 py-3">
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
              href="/cards"
            >
              <div className="box-border flex w-full items-center justify-between gap-x-[2px] border-t border-white/[0.06] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Cards
                </span>
              </div>
              <div className="h-full w-full "></div>
            </a>
            <a
              className="[&amp;>div]:last:border-none"
              target="_blank"
              href="/signup"
            >
              <div className="box-border flex w-full items-center border-t border-white/[0.06] justify-between gap-x-[2px] px-4 py-3">
                <span className="body-small flex h-full cursor-pointer items-center text-white hover:opacity-[.8]">
                  Sign in
                </span>
              </div>
            </a>
          </Transition>
        </div>
      </div>
    </div>
  );
}
