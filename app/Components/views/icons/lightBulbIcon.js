/* =========================================================
                    LIGHT BULB SVG ICON
============================================================ */
import React from 'react';


// STATELESS FUNCTIONAL COMPONENTS
export default function(props) {
      return (
          <svg className="lightBulbIcon" viewBox="0 0 380 380">
            <path id="lightBulb--baseBottom" fill="#ACABB1" d="M142.5 332.5c0 26.234 21.267 47.5 47.5 47.5s47.5-21.266 47.5-47.5V330h-95v2.5z"/>
            <path id="lightBulb--baseTop" fill="#565659" d="M190 300h-47.5v30h95v-30H205"/>
            <path id="lightBulb--left" fill="#FFE98F" d="M175 202.904c-23.057-6.548-40-27.777-40-52.904h30c0 13.785 11.215 25 25 25V0C117.858 0 59.375 58.482 59.375 130.625c0 48.407 26.331 90.662 65.451 113.229L142.5 300H175v-97.096z"/>
            <path id="lightBulb--right" fill="#FFDA44" d="M190 0v175c13.785 0 25-11.215 25-25h30c0 25.127-16.943 46.356-40 52.904V300h32.5l17.674-56.146c39.12-22.566 65.451-64.821 65.451-113.229C320.625 58.482 262.142 0 190 0z"/>
            <path id="lightBulb--coil" fill="#FF9811" d="M165 150h-30c0 25.127 16.943 46.356 40 52.904V300h30v-97.096c23.057-6.548 40-27.777 40-52.904h-30c0 13.785-11.215 25-25 25s-25-11.215-25-25z"/>
          </svg>
        );
      };
