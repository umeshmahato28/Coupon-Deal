import React from "react";
import Marquee from "react-fast-marquee";
import m1 from "./images/m1.png";
import m2 from "./images/m2.png";
import s1 from "./images/1.png";
import s2 from "./images/2.png";
import s3 from "./images/3.png";
import slogan from "./images/tagline.png";
import { Link } from "react-router-dom";

// import Card from "./Card";
// import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    // Landing section

    <div className="bg-[#181e24]  overflow-x-hidden font-custom">
      <body>
        <div className="h-10"></div>
        <div className=" w-full h-[90vh] flex lg:flex-row flex-col p-2 mt-20  items-center justify-center">
          <div className=" lg:w-1/2 w-full mt-20 lg:mt-0 flex items-center justify-center lg:border-r-2 p-1">
            <img src={slogan} alt="slogan" className=" w-full h-full " />
          </div>

          <p className="font-custom text-white px-28 flex-col lg:items-start items-center   lg:w-1/2  w-full text-xl md:p-10 md:text-3xl tracking-wide leading-normal md:leading-loose flex  justify-center">
            <span className="bg-gradient-to-tl from-cyan-500 to-green-500 bg-clip-text text-transparent font-bold lg:text-6xl md:text-5xl text-4xl ">
              CouponDeal
            </span>{" "}
            <span className="md:block hidden">
              is a platform where you can sell your unused coupons and purchase
              useful discounts according to your needs at reasonable prices.
            </span>
          </p>
        </div>

        {/*  Landing section ends */}

        {/* Main div */}
        <div className="bg-[#181e24] w-full">
          {/* Recently Uploaded coupons section */}
          <div>
            <h1 className="text-center mt-8 font-extrabold text-3xl p-2 bg-[#181e24] shadow-xl text-white">
              RECENT COUPONS{" "}
            </h1>
            <div className="bg-[#181e24] h-auto m-8 max-w-xl"></div>
          </div>
          {/* Recently Uploaded coupons section ends */}

          <h1 className="text-center font-extrabold text-4xl mt-2 p-1 shadow-xl  text-white">
            ABOUT COUPONDEAL{" "}
          </h1>

          <p className="md:px-40 px-24 md:pl-44 text-white mt-4 text-center md:text-left  py-6 mb-9 ">
            Welcome to CouponDeal, your ultimate destination for the best
            e-coupon and deals online! Our platform is dedicated to helping to
            you to buy or sell yours coupons whether you're looking for discount
            on fashion, electronics, groceries or travel, we have a wide range
            of exclusive offer to cater to your need. Join our community,
            explore, save and enjoy!
          </p>

          <h2 className="text-center font-bold text-3xl mt-3 box-shadoq-lg  text-white">
            WHAT WE OFFER
          </h2>

          <div className="lg:px-40 py-4 mb-16 lg:gap-10 lg:p-6 px-10 grid grid-cols-1 md:grid-rows-2   justify-center md:grid-cols-3 ">
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Sell Unused Coupons
              </h3>
              <p className="text-white py-3 px-3 ">
                Got unused coupons that you don't need? Sell them to others and
                make some extra money. Our platform provides an easy and secure
                way to list your coupons and find interested buyers.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Secure Transactions
              </h3>
              <p className="text-white py-3 px-3 ">
                We prioritize your safety. Our secure payment gateway ensures
                that all transactions are protected. Buy and sell with
                confidence knowing your information is safe with us.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Wide Selection
              </h3>
              <p className="text-white py-3 px-3 ">
                Explore a vast collection of coupons across various categories.
                Our platform caters to all your shopping needs with discounts
                from top brands and retailers.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Easy to Use
              </h3>
              <p className="text-white py-3 px-3 ">
                Our user-friendly interface makes buying and selling coupons a
                breeze. Simply register, list your coupons for sale, or browse
                available coupons to purchase.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Community and Support
              </h3>
              <p className="text-white py-3 px-3 ">
                Join our community of savvy shoppers and coupon enthusiasts.
                Share tips, ask questions, and get support from our dedicated
                customer service team whenever you need it.
              </p>
            </div>
          </div>

          {/* How Its Work Section */}
          <h2 className="text-center font-bold text-4xl tracking-wide  text-white ">
            HOW ITS WORKS
          </h2>
          <div className="overflow-x-auto h-[650px] scrollbar-hide mb-24 md:flex hidden ">
            <img src={s1} alt="cs" />
            <img src={s2} alt="cs" />
            <img src={s3} alt="cs" />
          </div>

          <div className=" overflow-y-auto  scrollbar-hide mb-24 md:hidden block ">
            <img src={m1} alt="cs" />
            <img src={m2} alt="cs" />
          </div>
          <div className="hidden md:block">
            <h2 className="text-center font-bold text-4xl tracking-wide mb-10 text-white ">
              TOP BRANDS
            </h2>

            <div className=" relative mx-40 space-y-3 ">
              <div className="flex">
                <div className="absolute h inset-0 z-40  bg-gradient-to-r from-[#181e24] via-transparent to-[#181e24]  "></div>
              </div>

              <Marquee direction="right " className="p-3">
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  AMAZON
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  FLIPKART
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SAMSUNG
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  BOAT
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MYNTRA
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  ADIDAS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  NETFLIX
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SPOTIFY
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  NIKE
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SONY
                </span>
              </Marquee>
              <Marquee direction="left" className="p-3">
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SMART BAZAAR
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  REALME
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  FIRST CRY
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  TANISHQ
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MYNTRA
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  BABY OYE
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MAA TARINI JEWELLERS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  KINDLE
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  REEBOK
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  PUMA
                </span>
              </Marquee>
              <Marquee direction="right" className="p-3">
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  REAMLE
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  REDMI
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  INOX
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MC DONALD'S
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MAKE MY TRIP
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  DOMINOS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  GOIBIBO
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  PETER ENGLAND
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  YATRA
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  PANTALOONS
                </span>
              </Marquee>
              <Marquee direction="left" className="p-3">
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  HOTSTAR
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  ZEE 5
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SENCO GOLD
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MED PLUS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  RAYMOND
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  BOOK MY SHOW
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  LENOVO
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  SUBWAY
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  ASUS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  ONEPLUS
                </span>
              </Marquee>
              <Marquee direction="right" className="p-3">
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  PC JEWELLERS
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MAMA EARTH
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  INOX
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  KFC
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  MAKE MY TRIP
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  CROMA
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  GODREJ
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  D-MART
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  HIMALAYA
                </span>
                <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                  IKEA
                </span>
              </Marquee>
            </div>
          </div>
          <h2 className="text-center font-bold text-4xl mt-28 text-white ">
            TEAM MEMBERS
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-y-8 py-8 md:py-16 items-center justify-center px-16 ">
            <div class="p-6 md:p-10 flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 md:gap-4 h-auto md:h-72 hover:scale-105 duration-1000 bg-[#2a323c] text-white">
              <img
                src="https://avatars.githubusercontent.com/u/112327515?v=4"
                alt="sid"
                class="h-16 w-16 md:h-20 md:w-20 rounded-full"
              />
              <h3 class="text-center text-lg md:text-xl font-bold">
                SIDHANTA BASA
              </h3>
              <p class="text-center">React Developer, Managing Database </p>
              <div class="flex gap-2 md:gap-4">
                <Link to="https://www.instagram.com/sidhantabasa/">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="https://github.com/sidhantabasa/">
                  <i class="fab fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/sidhanta-basa-79587724a/">
                  <i class="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>

            <div class="p-6 md:p-10 flex flex-col hover:scale-105 duration-1000 items-center justify-center rounded-lg shadow-lg gap-2 md:gap-4 bg-[#2a323c] h-auto md:h-72  text-white">
              <img
                src="https://avatars.githubusercontent.com/u/112267835?v=4"
                alt="sid"
                class="h-16 w-16 md:h-20 md:w-20 rounded-full"
              />
              <h3 class="text-center text-lg md:text-xl font-bold">
                Umesh Mahato
              </h3>
              <p class="text-center">
                React Developer, Database Connectivity, Backend Development
              </p>
              <div class="flex gap-2 md:gap-4">
                <Link to="https://www.instagram.com/umeshmahato28/">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="https://github.com/umeshmahato28/">
                  <i class="fab fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/umeshmahato28/">
                  <i class="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>

            <div class="p-6 md:p-10 hover:scale-105 duration-700 flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 md:gap-4 bg-[#2a323c] h-auto md:h-72  text-white">
              <img
                src="https://media.licdn.com/dms/image/D5603AQHx7M2bUE34Ng/profile-displayphoto-shrink_800_800/0/1693066878804?e=1724889600&v=beta&t=3WGO9b4mWSn1t-k1iKs8iBv55EKApAlC0s-VjfnrILE"
                alt="baishnavi"
                class="h-16 w-16 md:h-20 md:w-20 rounded-full"
              />
              <h3 class="text-center text-lg md:text-xl font-bold">
                Baishnavi
              </h3>
              <p class="text-center">Frontend Developer, Content Writer</p>
              <div class="flex gap-2 md:gap-4">
                <Link to="https://www.instagram.com/k_mishra090?igsh=MWt1MmpvemNobGltNg==">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="https://github.com/">
                  <i class="fab fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/baishnavi-75a421257/">
                  <i class="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </body>
    </div>
  );
};

export default Body;
