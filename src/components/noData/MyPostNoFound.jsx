import React from 'react';
import { Link } from 'react-router';

const MyPostNoFound = () => {
    return (
      <div>
        <section className="flex items-center   mx-auto  w-8/12 sm:p-16   ">
          <div className="container place-items-center   flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <div className="">
              <img src="/emty.svg" alt="" />
            </div>
            <p className="text-3xl font-bold">No post found</p>
            <Link
              to={"/addItem"}
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-[#443dff] text-white"
            >
              Add post
            </Link>
          </div>
        </section>
      </div>
    );
};

export default MyPostNoFound;