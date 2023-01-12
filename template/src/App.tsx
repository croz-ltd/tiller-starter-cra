import React from "react";

import { Button } from "@tiller-ds/core";

import logo from "./assets/img/react-tiller-logo.png";
import stars from "./assets/img/sparkles.png";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto max-w-xl h-screen">
      <img src={logo} alt="logo" className="w-64 mb-2" />
      <div className="flex my-8">
        <img src={stars} alt="stars" className="w-10 pr-3" />
        <p className="text-2xl font-bold">Welcome to Tiller React App!</p>
      </div>
      <p className="text-lg text-center leading-9">
        A handy production-ready template for <strong>rapid</strong> frontend
        development that you've often dreamed of. Included awesome React
        framework with <strong>TypeScript</strong>,<strong>Tailwind CSS</strong>{" "}
        visual framework and configured{" "}
        <strong>Tiller Component Library</strong>.
      </p>
      <a
        className="text-blue-600 font-bold underline my-8"
        href="http://tiller-storybook-development.tos-cloud.lan.croz.net/?path=/story/installation--page"
        target="_blank"
        rel="noreferrer"
      >
        Tiller Storybook
      </a>
      <Button>Yaaay</Button>
    </div>
  );
}

export default App;
