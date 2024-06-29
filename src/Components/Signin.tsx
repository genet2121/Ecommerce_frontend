import * as React from "react";
import styled from 'styled-components';
const SigninPage = () =>{
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col justify-center items-end px-16 py-3 w-full text-white bg-purple-900 border-b border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start mr-28 max-w-full w-[1219px] max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-5 max-md:flex-wrap">
            <div className="flex-auto text-xs leading-5">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="text-sm font-semibold leading-6 text-center underline">
              ShopNow
            </div>
          </div>
          <div className="flex gap-3 text-sm font-medium leading-3">
            <div className="shrink-0 my-auto w-px h-2.5 bg-zinc-200" />
            <div className="flex gap-1.5">
              <div className="grow">English </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfab9dff4b7c69d7021c535ce6c376f619ed291a9688c10da78436f2338dbc5?"
                className="shrink-0 self-start w-3 aspect-square"
              />
            </div>
            <div className="shrink-0 my-auto w-px h-2.5 bg-zinc-200" />
            <div className="flex gap-1 self-start">
              <div className="grow">USD </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1386b04b6b95e7c741e3faa71f66dae263ac75109e629a9320443165c007d6b4?"
                className="shrink-0 w-3 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 self-center mt-8 text-sm max-md:flex-wrap">
        <div className="flex flex-auto gap-4 p-0.5 bg-white rounded border-2 border-purple-900 border-solid max-md:flex-wrap">
          <div className="flex flex-col justify-center font-bold leading-[357%] text-slate-700">
            <div className="flex flex-col justify-center items-start px-5 py-4 w-full bg-white rounded-md">
              <div className="flex gap-3.5 justify-center">
                <div className="grow">All Categories</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e9494ee140ec275606e09528f5e6bee0e52abfa62564f491dbf1f1a8b719a1?"
                  className="shrink-0 my-auto w-3.5 aspect-square"
                />
                <div className="shrink-0 w-px h-5 bg-stone-300" />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col grow shrink-0 justify-center items-start py-5 text-purple-900 rounded-none basis-0 min-h-[50px] w-fit max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative justify-center">Search for items...</div>
          </div>
        </div>
        <div className="flex gap-2.5 px-4 py-1 my-auto font-medium text-purple-900 bg-white rounded-md border border-gray-200 border-solid shadow-sm leading-[250%]">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/66265a47247ddc7e732c71a620260305607a07b2890aa3b4822a0f662a1afb41?"
              className="shrink-0 w-3.5 aspect-[0.4]"
            />
            <div className="my-auto">Your Location</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bed6e0faad92c0489116d64d921108a861b16bc4b972a7e5dbe0834d4099e11?"
            className="shrink-0 my-auto w-3.5 aspect-square"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-0.5 mt-8 w-full bg-white border-t border-b border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1568px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 self-stretch aspect-[1.25] w-[89px]"
          />
          <div className="flex gap-5 justify-between self-stretch my-auto text-base font-bold leading-[70px] text-slate-700 max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-2 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c25b99bb8e3ee64098fc74400b04feff8e8686f3407333b0814832ed20f890a?"
                className="shrink-0 w-5 aspect-[0.95]"
              />
              <div className="my-auto">Deals</div>
            </div>
            <div className="flex gap-5 justify-between self-start px-px mt-1.5">
              <div>
                <span className="text-slate-700">Home</span>{" "}
              </div>
              <div>About</div>
              <div>Shop </div>
            </div>
            <div className="flex gap-5 justify-between my-auto">
              <div>Sellers </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a4f26ecb213f0cdbb9d06565baca8d06fe38a49838586d4940ee28f4d1ea0f?"
                className="shrink-0 self-start mt-1 w-2 aspect-square"
              />
            </div>
            <div>Contact</div>
          </div>
          <div className="flex gap-3 items-start self-stretch my-auto leading-[100%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/687496689009eb14167cb69ea2ed93425d6e708585c12327b7ce652ece8ea793?"
              className="shrink-0 w-9 aspect-[0.94]"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-purple-900">8100</div>
              <div className="mt-1.5 text-xs font-medium tracking-wider text-zinc-500">
                24/7 Support Center
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 self-center mt-0 w-full max-w-[1311px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="z-10 mt-44 w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start py-20 w-full bg-white max-md:max-w-full">
              <div className="mt-28 max-w-full w-[785px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full aspect-[1.41] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-4 max-md:mt-10">
                      <div className="flex flex-col pr-5 pb-5">
                        <div className="flex flex-col text-black">
                          <div className="text-4xl font-medium tracking-widest leading-7">
                            Login
                          </div>
                          <div className="mt-6 text-xl leading-6">
                            Enter your details below
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-12 max-md:mt-10">
                          <div className="flex flex-col">
                            <div className="flex flex-col">
                              <div className="text-base leading-6 text-black">
                                Email or Phone Number
                              </div>
                              <div className="flex flex-col justify-center mt-2">
                                <div className="shrink-0 h-px bg-black border border-black border-solid" />
                              </div>
                            </div>
                            <div className="flex flex-col mt-10">
                              <div className="text-base leading-6 text-black">
                                Password
                              </div>
                              <div className="flex flex-col justify-center mt-2">
                                <div className="shrink-0 h-px border border-solid bg-zinc-500 border-zinc-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-12 text-xl leading-6 text-purple-600 max-md:mt-10">
                          Forgot Password?
                        </div>
                      </div>
                      <div className="flex justify-center items-center px-2.5 py-4 w-full text-base text-white shadow-2xl rounded-[50px] max-md:px-5">
                        <div className="flex gap-2.5 px-0.5">
                          <div className="my-auto">Sign up</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5391b14005b1f3e77ad0016514d54ebbf9feda912ed5037b5946b31a23b8cf4a?"
                            className="shrink-0 w-6 aspect-square"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center self-center mt-12 max-w-full text-base leading-6 text-black w-[242px] max-md:mt-10">
                        <div className="flex flex-col justify-center">
                          <div className="flex gap-4">
                            <div>Don’t have account?</div>
                            <div className="justify-center font-medium">
                              Sign up
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start px-16 py-7 mt-0 w-full text-base font-bold bg-white border-t border-b border-gray-200 border-solid leading-[70px] max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-2 ml-36 max-md:ml-2.5">
          <div className="grow my-auto text-purple-600">
            <span className="text-purple-600">Home</span>{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/434de4c0aab1cdd9e334f435e2e0decd1e5c1d76969fadfcd78cc1cfd7db9638?"
            className="shrink-0 self-start w-3.5 aspect-square"
          />
          <div className="text-slate-700">Login</div>
        </div>
      </div>
      <div className="flex gap-0 items-start pt-20 pr-20 pb-1.5 w-full font-bold text-center text-white bg-gray-700 leading-[120%] mt-[798px] max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 mt-5 max-w-full aspect-[1.85] w-[340px]"
        />
        <div className="flex flex-col items-center px-20 pt-5 pb-px mt-5 whitespace-nowrap max-md:px-5">
          <div className="text-7xl max-md:text-4xl">0+</div>
          <div className="mt-6 text-2xl">Buyers</div>
        </div>
        <div className="flex flex-col px-16 pt-5 pb-1.5 mt-5 max-md:px-5">
          <div className="self-center text-7xl max-md:text-4xl">0+</div>
          <div className="self-start mt-5 text-2xl">Verified Sellers</div>
        </div>
        <div className="flex flex-col px-16 pt-5 pb-1.5 mt-5 max-md:px-5">
          <div className="self-center text-7xl max-md:text-4xl">0+</div>
          <div className="self-start mt-5 text-2xl">Products Sold</div>
        </div>
        <div className="flex flex-col items-center px-20 pt-5 pb-1.5 mt-5 whitespace-nowrap max-md:px-5">
          <div className="text-7xl max-md:text-4xl">0+</div>
          <div className="mt-6 text-2xl">Partners</div>
        </div>
        <div className="flex flex-col px-14 pt-5 pb-px mt-5 max-md:px-5">
          <div className="self-center text-7xl max-md:text-4xl">0+</div>
          <div className="mt-5 text-2xl">Glorious years</div>
        </div>
      </div>
    </div>
  );
}
export default SigninPage;