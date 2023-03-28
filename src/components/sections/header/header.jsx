/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Header () {
  return (
    <section id="me">
      <div className="h-screen">
        <div className="mt-36 rounded-full text-center flex flex-col items-center">
          <h2 className="text-4xl py-2 text-white">Hello, I'm</h2>
          <h1 className="text-7xl py-2 text-white font-medium">
            Oğuzhan Gökcekoca
          </h1>
          <h3 className="text-2xl py-2 pt-10 text-white">
            I am Software Engineer
          </h3>
        </div>
      </div>
    </section>
  );
}
