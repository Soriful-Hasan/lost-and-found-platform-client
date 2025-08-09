import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-gray-200 dark:bg-dark-primary-bg border-t dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center font-bold gap-2">
          <img width="30" className="dark:bg-white rounded-full" height="30" src="/logo.png" alt="logo" />
          <h1 className="">
            <span className="text-blue-800 dark:text-white text-xl uppercase">
              Find <span className="">It</span>
            </span>
          </h1>
        </div>

        <p className="mx-auto dark:text-white mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Find and reconnect with your lost items or help others do the same.
          Together, we make lost things found again.
        </p>

        <ul className="mt-12 text-gray-700 dark:text-white flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <Link
            className=" transition hover:text-gray-700/75"
            to={"/"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>

          <Link
            className=""
            to={"/allPosts"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            All Posts
          </Link>
          <Link
            className=""
            to={"/addItem"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Add Post
          </Link>

          <Link
            className=""
            to={"/recoveredItems"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Recovered Items
          </Link>

          <Link
            className=""
            to={"/myPost"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            My Posts
          </Link>
        </ul>

        <ul className="mt-12 text-gray-700 dark:text-white flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/sorifulhasan300"
              rel="noreferrer"
              target="_blank"
              className=" "
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://x.com/hasan_soriful"
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Soriful-Hasan"
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
