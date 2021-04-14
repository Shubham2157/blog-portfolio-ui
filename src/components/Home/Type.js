import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻",
          "𝓑𝓣𝓔𝓒𝓗 𝓢𝓣𝓤𝓓𝓔𝓝𝓣",
          "𝓐𝓷𝓭𝓻𝓸𝓲𝓭 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻",
          "𝓜𝓔𝓡𝓝 𝓢𝓽𝓪𝓬𝓴 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
