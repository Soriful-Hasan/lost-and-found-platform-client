import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-white border-t   border-gray-200  text-base-content p-10">
      <aside className="space-y-2">
        <div className="flex items-center font-bold gap-2 ">
          <img width="30" height="30" src="/logo.png" alt="smartthings-find" />
          <h1 className="">
            <span className="text-blue-800 text-xl">FindIt</span>
          </h1>
        </div>
        <p>
          FindIt Industries Ltd.
          <br />
          Providing reliable tech since 2025
        </p>
        <div className="flex gap-4 ">
          <a href="https://www.instagram.com/hasibhasan1642/" target="_blank">
            <FaInstagram size={24}></FaInstagram>
          </a>
          <a href="https://www.facebook.com/sorifulhasan300" target="_blank">
            <MdFacebook size={24}></MdFacebook>
          </a>
          <a href="https://www.youtube.com/@sorifullhasan3818" target="_blank">
            <FaYoutube size={24}></FaYoutube>
          </a>
          <a href="https://telegram.org/" target="_blank">
            <FaTelegram size={24}></FaTelegram>
          </a>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Lost & Found Service</h6>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/allPosts"}
          className="link link-hover"
        >
          All Post
        </Link>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/addItem"}
          className="link link-hover"
        >
          Add Post
        </Link>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/myPost"}
          className="link link-hover"
        >
          My Post
        </Link>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/recoveredItems"}
          className="link link-hover"
        >
          Recover Post
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Community</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
