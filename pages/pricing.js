import React from "react";

function pricing() {
  return (
    <div className="flex flex-col mt-12 mb-24 ">
      <div className="w-full bg-blue pt-8">
        <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
            <div className="p-8 text-3xl font-bold text-center">Free</div>
            <div className="border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                1 Ice Cream
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited toppings
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
              </div>
            </div>
            <div className="text-center mt-8 mb-8 mt-auto">
              <a
                href="#"
                className="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
            <div className="w-full p-8 text-3xl font-bold text-center">
              Basic
            </div>
            <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                2 Ice Creams
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                25 Cones
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited toppings
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
              </div>
            </div>
            <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
              $2.99
              <span className="text-grey-light italic line-through">$4.99</span>
            </div>
            <div className="w-full text-center mb-8 mt-auto">
              <a
                href="#"
                className="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
            <div className="p-8 text-3xl font-bold text-center">Pro</div>
            <div className="border-0 border-grey-light border-t border-solid text-sm">
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Ice Creams
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Cones
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited toppings
              </div>
              <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
              </div>
            </div>
            <div className="text-center px-8 pt-8 text-xl mt-auto">
              $5.99
              <span className="text-grey-light italic line-through">$9.99</span>
            </div>
            <div className="text-center pt-8 mb-8 mt-auto">
              <a
                href="#"
                className="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pricing;
