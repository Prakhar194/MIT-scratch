import React from "react";
import "./BallSprite.css";

export default function BallSprite({ charac_id }) {
  return (
    <div id={charac_id} className="character inline-block z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <radialGradient id="ballGradient" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff4d4d" />
          </radialGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#ballGradient)"
          stroke="#b30000"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
