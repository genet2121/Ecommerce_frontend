import * as React from "react";
import styled from 'styled-components';
const SignUpPage = () =>{
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
            <div className="shrink-0 my-auto w-px h-2.5y bg-zinc-200" />
            <div className="flex gap-1.5">
              <div className="grow">English </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90db6e33c52fd7aea4de0a39e2b15dbb0f2de5d6f3f26f6153bbdae574bb5a22?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c34979c405d33dbee8044db429309477a0c94c2e6a38ba11d29ffbbe71c1c3f9?"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cade6e4aa36c533be29a22d5e669e61f07df80530893eebc6824d044add5e6cc?"
              className="shrink-0 w-3.5 aspect-[0.4]"
            />
            <div className="my-auto">Your Location</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76c27317ab7388143b204f852f2b6a7e3a3bd1979dc514d1df8a0c018cae939?"
            className="shrink-0 my-auto w-3.5 aspect-square"
          />
        </div>
      </div>
      <div className="flex z-10 justify-center items-center px-16 py-0.5 mt-8 w-full bg-white border-t border-b border-gray-200 border-solid leading-[437.5%] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-w-full w-[1157px] max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 self-stretch aspect-[1.25] w-[89px]"
          />
          <div className="flex gap-2 self-stretch my-auto text-base font-bold whitespace-nowrap text-slate-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33004af3c15cc70b45cd0cd161e17234ad54ec243b0b3619cacf9256895948ed?"
              className="shrink-0 w-5 aspect-[0.95]"
            />
            <div className="my-auto">Deals</div>
          </div>
          <div className="flex gap-5 justify-between self-stretch px-px my-auto text-base font-bold text-slate-700">
            <div>
              <span className="text-slate-700">Home</span>{" "}
            </div>
            <div>About</div>
            <div>Shop </div>
          </div>
          <div className="flex gap-5 justify-between self-stretch my-auto text-base font-bold text-slate-700">
            <div>Sellers </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/864e64c1d3be5c680ff8a5d8655b37342e4d82993ab39db183c321a93ac2da72?"
              className="shrink-0 self-start mt-1 w-2 aspect-square"
            />
          </div>
          <div className="self-stretch my-auto text-base font-bold text-slate-700">
            Contact
          </div>
          <div className="flex gap-3 items-start self-stretch my-auto leading-[100%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f95ea7fb76dd8e172c44ed3dbbb9b2787703021ba95d7447400c06bd9c0d3f3?"
              className="shrink-0 w-9 aspect-[0.94]"
            />
            <div className="flex flex-col mt-1">
              <div className="text-2xl font-bold text-purple-900">8100</div>
              <div className="mt-1.5 text-xs font-medium tracking-wider text-zinc-500">
                24/7 Support Center
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-0 ml-14 max-w-full w-[1229px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="z-10 mt-40 w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col mt-20 max-w-full w-[390px] max-md:mt-10">
                <div className="flex flex-col pr-5">
                  <div className="flex flex-col text-black">
                    <div className="text-4xl font-medium tracking-widest leading-7">
                      Create an account
                    </div>
                    <div className="mt-6 text-xl leading-6">
                      Enter your details below
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-12 max-md:mt-10">
                    <div className="flex flex-col">
                      <div className="text-base leading-6 text-gray">
                        FirstName
                      </div>
                      <div className="flex flex-col justify-center mt-2 bg-black">
                        <div className="shrink-0 h-px bg-black border border-black border-solid" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-12 max-md:mt-10">
                    <div className="flex flex-col pb-7">
                      <div className="flex flex-col">
                        <div className="text-base leading-6 text-gray">
                          LastName
                        </div>
                        <div className="flex flex-col justify-center mt-2">
                          <div className="shrink-0 h-px bg-black border border-black border-solid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-32 text-xl leading-6 text-black max-md:mt-10">
                  Register as{" "}
                </div>
                <div className="flex gap-5 items-start mt-3.5 w-full text-base leading-6 text-black whitespace-nowrap max-md:pr-5">
                  <div className="flex gap-3">
                    <div>Buyer</div>
                    <div className="shrink-0 bg-purple-600 rounded-full h-[27px] w-[31px]" />
                  </div>
                  <div className="flex gap-4">
                    <div className="my-auto">Seller</div>
                    <div className="shrink-0 rounded-full bg-zinc-300 h-[27px] w-[31px]" />
                  </div>
                </div>
                <div className="flex justify-center items-center px-2.5 py-4 mt-7 w-full text-base text-white shadow-2xl rounded-[50px] max-md:px-5">
                  <div className="flex gap-2.5 px-0.5">
                    <div className="my-auto">Sign up</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa37d8b7e930ae1269eea2504d8d66937d9f0d450923fd2fedc5211a48f0a68?"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-7 ml-9 max-w-full text-base leading-6 text-black w-[248px] max-md:ml-2.5">
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-4">
                        <div className="my-auto">Already have account?</div>
                        <div className="flex flex-col font-medium">
                          <div>Log in</div>
                          <div className="shrink-0 h-px" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd46d69da71c2727d57c9b8b0231502252f677580ef5d39d22da1abd361c8b0?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col justify-center">
                        <div className="justify-center">
                          Continue with Google
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
      <div className="flex z-10 flex-col justify-center items-start px-16 py-7 mt-0 w-full text-base font-bold bg-white border-t border-b border-gray-200 border-solid leading-[70px] max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start ml-52 max-w-full w-[286px] max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1049715b0b4e58cc8dc0cd53498417ab690ed43320dd2e3852528f70a84fca?"
            className="shrink-0 w-3.5 aspect-square"
          />
          <div className="flex gap-5 justify-between mt-1">
            <div className="text-purple-600">
              <span className="text-purple-600">Home</span>{" "}
            </div>
            <div className="text-slate-700">Sign up</div>
          </div>
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

export default SignUpPage;

