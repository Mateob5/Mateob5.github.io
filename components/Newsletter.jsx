import React from 'react';

export function Newsletter() {
  return (
    <div className="bg-[#333] text-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-4xl sm:text-2xl font-bold pb-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up for our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              className="pr-20 pl-4 py-3 m rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[180px] ml-4 my-3 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p className="text-sm mt-2">
            We care about the protection of your data. Read our{' '}
            <a
              className="text-[#00df9a] hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

