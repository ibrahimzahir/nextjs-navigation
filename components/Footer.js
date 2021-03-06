import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="flex flex-1 items-center justify-center">
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
