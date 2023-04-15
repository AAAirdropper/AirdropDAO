import React from "react";

import gelato from "../assets/images/gelato-1.png";
import metamask from "../assets/images/metamask.png";

interface NavBarProps {
}

const NavBar = (props: NavBarProps) => {
  return (
    <div className="navbar bg-base-400">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <svg width="148" height="32" viewBox="0 0 148 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1656 26.5248C19.4137 28.437 15.0036 27.6719 12.106 24.9397L10.0664 25.9786C13.5891 29.784 19.336 30.9591 24.1854 28.4879C29.0347 26.0168 31.4613 20.6773 30.4542 15.5912L28.3867 16.6453C28.8934 20.5958 26.92 24.6125 23.1681 26.5248H23.1656Z" fill="url(#paint0_linear_9_75)"/>
            <path d="M9.70885 21.3132C9.44022 20.6079 9.26198 19.8886 9.16395 19.1642C8.63178 15.1972 10.6064 11.1512 14.3748 9.23129C18.1433 7.31142 22.5763 8.09184 25.4739 10.8533C26.0023 11.3574 26.4797 11.9252 26.8922 12.5567L34.3311 8.7666L34.7028 6.13123L27.5262 9.80802C24.0035 6.00265 18.2566 4.82755 13.4073 7.29869C8.55922 9.76855 6.13137 15.1093 7.13841 20.1954L0 23.834L2.32473 25.0753L9.70757 21.3132H9.70885Z" fill="url(#paint1_linear_9_75)"/>
            <path d="M33.7401 12.7075L34.1335 10.0811L3.50342 25.687L5.87907 26.9028L33.7401 12.7075Z" fill="url(#paint2_linear_9_75)"/>
            <path d="M45.6578 19.6328H41.4156L40.6188 22H38.1031L42.2125 10.4844H44.9313L49.0094 22H46.4L45.6578 19.6328ZM44.9859 17.6484L43.5484 13.1172L42.0641 17.6484H44.9859ZM53.3875 13.4844V22H51.1297V13.4844H53.3875ZM53.3875 10.4141V12.4688H51.1297V10.4141H53.3875ZM60.6328 15.5391C59.737 15.5391 59.1354 15.8307 58.8281 16.4141C58.6563 16.7422 58.5703 17.2474 58.5703 17.9297V22H56.3281V13.4844H58.4531V14.9688C58.7969 14.401 59.0964 14.013 59.3516 13.8047C59.7682 13.4557 60.3099 13.2812 60.9766 13.2812C61.0182 13.2812 61.0521 13.2839 61.0781 13.2891C61.1094 13.2891 61.1745 13.2917 61.2734 13.2969V15.5781C61.1328 15.5625 61.0078 15.5521 60.8984 15.5469C60.7891 15.5417 60.7005 15.5391 60.6328 15.5391ZM71.1359 10.5V22H68.9719V20.8203C68.6542 21.3255 68.2922 21.6927 67.8859 21.9219C67.4797 22.151 66.9745 22.2656 66.3703 22.2656C65.3755 22.2656 64.537 21.8646 63.8547 21.0625C63.1776 20.2552 62.8391 19.2214 62.8391 17.9609C62.8391 16.5078 63.1724 15.3646 63.8391 14.5312C64.5109 13.6979 65.4068 13.2812 66.5266 13.2812C67.0422 13.2812 67.5005 13.3958 67.9016 13.625C68.3026 13.849 68.6281 14.1615 68.8781 14.5625V10.5H71.1359ZM65.1359 17.7969C65.1359 18.5833 65.2922 19.2109 65.6047 19.6797C65.912 20.1536 66.3807 20.3906 67.0109 20.3906C67.6411 20.3906 68.1203 20.1562 68.4484 19.6875C68.7766 19.2188 68.9406 18.612 68.9406 17.8672C68.9406 16.8255 68.6776 16.0807 68.1516 15.6328C67.8286 15.362 67.4536 15.2266 67.0266 15.2266C66.3755 15.2266 65.8964 15.474 65.5891 15.9688C65.287 16.4583 65.1359 17.0677 65.1359 17.7969ZM78.2484 15.5391C77.3526 15.5391 76.751 15.8307 76.4438 16.4141C76.2719 16.7422 76.1859 17.2474 76.1859 17.9297V22H73.9438V13.4844H76.0688V14.9688C76.4125 14.401 76.712 14.013 76.9672 13.8047C77.3839 13.4557 77.9255 13.2812 78.5922 13.2812C78.6339 13.2812 78.6677 13.2839 78.6938 13.2891C78.725 13.2891 78.7901 13.2917 78.8891 13.2969V15.5781C78.7484 15.5625 78.6234 15.5521 78.5141 15.5469C78.4047 15.5417 78.3161 15.5391 78.2484 15.5391ZM88.1031 14.5625C88.8219 15.4635 89.1813 16.5286 89.1813 17.7578C89.1813 19.0078 88.8219 20.0781 88.1031 20.9688C87.3844 21.8542 86.2932 22.2969 84.8297 22.2969C83.3661 22.2969 82.275 21.8542 81.5563 20.9688C80.8375 20.0781 80.4781 19.0078 80.4781 17.7578C80.4781 16.5286 80.8375 15.4635 81.5563 14.5625C82.275 13.6615 83.3661 13.2109 84.8297 13.2109C86.2932 13.2109 87.3844 13.6615 88.1031 14.5625ZM84.8219 15.0938C84.1708 15.0938 83.6682 15.3255 83.3141 15.7891C82.9651 16.2474 82.7906 16.9036 82.7906 17.7578C82.7906 18.612 82.9651 19.2708 83.3141 19.7344C83.6682 20.1979 84.1708 20.4297 84.8219 20.4297C85.4729 20.4297 85.9729 20.1979 86.3219 19.7344C86.6708 19.2708 86.8453 18.612 86.8453 17.7578C86.8453 16.9036 86.6708 16.2474 86.3219 15.7891C85.9729 15.3255 85.4729 15.0938 84.8219 15.0938ZM98.7156 14.3984C99.4031 15.1328 99.7469 16.2109 99.7469 17.6328C99.7469 19.1328 99.4083 20.276 98.7313 21.0625C98.0594 21.849 97.1922 22.2422 96.1297 22.2422C95.4526 22.2422 94.8901 22.0729 94.4422 21.7344C94.1974 21.5469 93.9578 21.2734 93.7234 20.9141V25.3516H91.5203V13.4844H93.6531V14.7422C93.8927 14.3724 94.1479 14.0807 94.4188 13.8672C94.9135 13.487 95.5021 13.2969 96.1844 13.2969C97.1792 13.2969 98.0229 13.6641 98.7156 14.3984ZM97.45 17.7422C97.45 17.0859 97.299 16.5052 96.9969 16C96.7 15.4948 96.2156 15.2422 95.5438 15.2422C94.7365 15.2422 94.1818 15.625 93.8797 16.3906C93.7234 16.7969 93.6453 17.3125 93.6453 17.9375C93.6453 18.9271 93.9083 19.6224 94.4344 20.0234C94.7469 20.2578 95.1167 20.375 95.5438 20.375C96.1635 20.375 96.6349 20.1354 96.9578 19.6562C97.2859 19.1771 97.45 18.5391 97.45 17.7422ZM107.305 22H102.344V10.4844H107.305C108.018 10.4948 108.612 10.5781 109.086 10.7344C109.893 11 110.547 11.487 111.047 12.1953C111.448 12.7682 111.721 13.388 111.867 14.0547C112.013 14.7214 112.086 15.3568 112.086 15.9609C112.086 17.4922 111.779 18.7891 111.164 19.8516C110.331 21.2839 109.044 22 107.305 22ZM109.094 13.4219C108.724 12.7969 107.992 12.4844 106.898 12.4844H104.68V20H106.898C108.034 20 108.826 19.4401 109.273 18.3203C109.518 17.7057 109.641 16.974 109.641 16.125C109.641 14.9531 109.458 14.0521 109.094 13.4219ZM121.448 19.6328H117.206L116.409 22H113.894L118.003 10.4844H120.722L124.8 22H122.191L121.448 19.6328ZM120.777 17.6484L119.339 13.1172L117.855 17.6484H120.777ZM132.162 22.3203C130.517 22.3203 129.259 21.8724 128.389 20.9766C127.222 19.8776 126.639 18.2943 126.639 16.2266C126.639 14.1172 127.222 12.5339 128.389 11.4766C129.259 10.5807 130.517 10.1328 132.162 10.1328C133.808 10.1328 135.066 10.5807 135.936 11.4766C137.097 12.5339 137.678 14.1172 137.678 16.2266C137.678 18.2943 137.097 19.8776 135.936 20.9766C135.066 21.8724 133.808 22.3203 132.162 22.3203ZM134.436 19.2266C134.993 18.5234 135.272 17.5234 135.272 16.2266C135.272 14.9349 134.991 13.9375 134.428 13.2344C133.871 12.526 133.116 12.1719 132.162 12.1719C131.209 12.1719 130.449 12.5234 129.881 13.2266C129.314 13.9297 129.03 14.9297 129.03 16.2266C129.03 17.5234 129.314 18.5234 129.881 19.2266C130.449 19.9297 131.209 20.2812 132.162 20.2812C133.116 20.2812 133.873 19.9297 134.436 19.2266Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_9_75" x1="5.35602" y1="28.0422" x2="36.5716" y2="13.8657" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="0.321587" stop-color="white"/>
            <stop offset="0.696602" stop-color="white" stop-opacity="0.713999"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_9_75" x1="-7.93028" y1="22.7313" x2="39.9585" y2="-4.51713" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="0.321587" stop-color="white"/>
            <stop offset="0.696602" stop-color="white" stop-opacity="0.713999"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_9_75" x1="-3.49616" y1="24.8357" x2="38.7541" y2="0.774343" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="0.321587" stop-color="white"/>
            <stop offset="0.696602" stop-color="white" stop-opacity="0.713999"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="z-10" tabIndex={0}>
            <a
              href="/"
              className="text-black text-opacity-50 hover:text-opacity-100"
            >
              Docs＆Contact
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a
                  href="https://github.com/AAAirdropper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/lib_defi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
