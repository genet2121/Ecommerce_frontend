import * as React from "react";

const Footer =() =>{
  return (
    <div className="flex flex-col items-center px-20 py-5 bg-stone-50 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1657px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col text-base leading-6">
          <div className="flex gap-4 text-lg whitespace-nowrap">
            <img
              loading="lazy"
              src="images/logo.jpg" alt="logo"
              className="shrink-0 aspect-[1.25] w-[89px]"
            />
            <div className="flex flex-col my-auto">
              <div className="font-bold text-zinc-800">Time</div>
              <div className="mt-2 text-purple-900">Technologies</div>
            </div>
          </div>
          <div className="mt-6 text-lg text-slate-700">
            Ethiopias leading B2C E-commerce platform
          </div>
          <div className="flex gap-2 mt-9 font-semibold leading-[160%] text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0d00482998ea01d4d002eafcca3f304ce4ccd51ce6ad8dfaffd517278a59ea3?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start w-4 aspect-[0.94]"
            />
            <div className="flex-auto">Address: Jems Building</div>
          </div>
          <div className="mt-2.5 leading-[160%] text-slate-700">
            Meskel Flower, A.A, Ethiopia
          </div>
          <div className="flex gap-2 mt-4 font-semibold text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f155a53d55f91a17c8550b51debd09c8cbed0f83464160b39812a0c1a32153e?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">
              Call Us:<span className="">(+251) - 911-782-898</span>
            </div>
          </div>
          <div className="flex gap-2 mt-3.5 font-semibold leading-[160%] text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/62f134b82a7c3c51cdc1158e6fc465afa830c2bf18d6ed8df532c0635259f2e1?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start w-4 aspect-[0.94]"
            />
            <div className="flex-auto">Email: gebeyaecom@gmail.com</div>
          </div>
          <div className="flex gap-2 mt-4 font-semibold text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48665159e1027e2056296e2a9c6c0f2fb66d2a2773de4d39cecbec37c8e27782?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">
              Hours: 9<span className="">:00 - 5:00, Mon - Sat</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto text-base leading-6 text-slate-700">
          <div className="text-2xl font-bold leading-7">Company</div>
          <div className="mt-7">About Us</div>
          <div className="mt-7">Delivery Information</div>
          <div className="mt-6">Privacy Policy</div>
          <div className="mt-6">Terms & Conditions</div>
          <div className="mt-7">Contact Us</div>
          <div className="mt-7">Help Center</div>
        </div>
        <div className="flex flex-col self-start mt-6 text-base leading-6 text-slate-700">
          <div className="text-2xl font-bold leading-7">Account</div>
          <div className="mt-8">Sign In</div>
          <div className="mt-6">View Cart</div>
          <div className="mt-7">My Wishlist</div>
          <div className="mt-6">Track My Order</div>
          <div className="mt-6">Shipping Details</div>
        </div>
        <div className="flex flex-col self-start mt-6 text-base leading-6 text-slate-700">
          <div className="text-2xl font-bold leading-7">Corporate</div>
          <div className="mt-7">Become a Seller</div>
          <div className="mt-7">Affiliate Program</div>
          <div className="mt-6">Promotions</div>
        </div>
        <div className="flex flex-col self-end mt-6 text-base leading-6 text-slate-700">
          <div className="text-2xl font-bold leading-7">Popular</div>
          <div className="mt-7">Milk & Flavoured Milk</div>
          <div className="mt-7">Butter and Margarine</div>
          <div className="mt-6">Eggs Substitutes</div>
          <div className="mt-6">Marmalades</div>
          <div className="mt-7">Sour Cream and Dips</div>
          <div className="mt-6">Tea & Kombucha</div>
          <div className="mt-7">Cheese</div>
        </div>
        <div className="flex flex-col self-end mt-6">
          <div className="text-2xl font-bold leading-7 text-slate-700">
            Install App
          </div>
          <div className="flex gap-3 mt-16 max-md:pr-5 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32a0aad8a2787712faf011052b26a2cdf91c45fb77652e1431d6751418f82dc1?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 w-32 max-w-full aspect-[3.03]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da021da879ae07ade06fa8692ba90175cdaa4bdbabe1c624f00409ad7e3a37f0?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 w-32 max-w-full aspect-[3.03]"
            />
          </div>
          <div className="mt-7 text-sm leading-6 text-right text-zinc-500">
            Up to 15% discount when your order using our app
          </div>
          <div className="mt-16 text-base leading-6 text-slate-700 max-md:mt-10">
            Secured Payment Gateways
          </div>
          <div className="flex gap-5 mt-5 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/248ccb9f26093d31b1f35eb30debf98a2cd2e3091d1449158811167e97f817cc?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-[1.08] w-[29px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b7e19d791bf87451761988e06650e2b55815ab252224dea5595c82700e7ad6?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-[1.08] w-[29px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c27c3d2481ad0287d04556a0bffae791933f70a20c407486fe506eb098903d7d?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 w-7 aspect-[1.04]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/823d27c0283ee8c80163283875a27e5b7a071ec84ebf1d58d5b4b9d7ae5eba56?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-[1.08] w-[29px]"
            />
          </div>
        </div>
      </div>
      <div className="shrink-0 self-start mt-12 max-w-full h-px border-t border-green-200 border-solid w-[1657px] max-md:mt-10" />
      <div className="flex gap-5 justify-between items-start mt-9 w-full max-w-[1586px] max-md:flex-wrap max-md:max-w-full">
        <div className="text-sm leading-6 text-purple-900">
          © 2024, <span className="text-purple-900">Gebeya</span>
          <br />
          All rights reserved
        </div>
        <div className="flex gap-5 justify-between mt-3 text-center leading-[100%]">
          <div className="flex gap-3 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbefd3121d935dc4f31aed877d74bccad107db42e147b7a30b8bffb25419aeae?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-[0.79] w-[30px]"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-purple-900">
                1900 - 6666
              </div>
              <div className="mt-1.5 text-xs font-medium tracking-wider text-zinc-500">
                Working 8:00 - 22:00
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dc05572dc0d39d7d3c5c441b9a09f2061edc54f8b7dedacf152d75e226bb25e?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-[0.79] w-[30px]"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-purple-900">
                1900 - 8888
              </div>
              <div className="mt-1.5 text-xs font-medium tracking-wider text-zinc-500">
                24/7 Support Center
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="grow my-auto text-base font-bold leading-5 text-right text-slate-700">
            Follow Us
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e6dfcf5cec92388db8b1bb805f908e850c8d2d95105c964e647cfe3176eafbb?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ece22da4f9239be6d8f3a18e870086413d13818321250de4c65472e22e658e?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32b182dc42274c2d7b48b5b5b801719adf54baecad69134cd836909f53e506d4?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6698805b3b6d9850b864dec53c8bef91940935ddeedfab64cb8d6d3c7e6384?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf49e66d168783011b6706f1b585f43d8d4af79413bc53305c84f7c83c70f759?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 aspect-square w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;