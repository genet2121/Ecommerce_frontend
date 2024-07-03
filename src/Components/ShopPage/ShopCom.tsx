import * as React from "react";

const ShopCom = () =>{
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col p-8 mx-auto w-full text-sm font-medium leading-5 bg-white rounded-2xl border border-gray-200 border-solid shadow-sm text-slate-700 max-md:px-5 max-md:mt-10">
            <div className="flex flex-col justify-center py-1 text-2xl font-bold leading-7 whitespace-nowrap border-b border-gray-200 border-solid">
              <div>Category</div>
              <div className="shrink-0 mt-5 h-0.5 bg-purple-300 rounded-2xl" />
            </div>
            <div className="flex gap-4 px-5 py-2.5 mt-8 rounded-md border border-gray-100 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cbe31eb0100c6a9047a70c1d3ed3dd38efdd550d2ca90bf123f7f475505a42a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Milks & Dairies</div>
            </div>
            <div className="flex gap-4 px-5 py-2.5 mt-4 rounded-md border border-gray-100 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc6626393cb77c72e9ead6c0a8b9ee02d0493984cb3a0d0459ab19c225d0fd6?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Drinks & Smoothies</div>
            </div>
            <div className="flex gap-4 px-5 py-2.5 mt-4 rounded-md border border-gray-100 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4118d41075d4461d10ef8dd1da94f28d88ebc0c2bb99b1821b8419775591a4?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Pet Foods</div>
            </div>
            <div className="flex gap-4 px-5 py-2.5 mt-4 rounded-md border border-gray-100 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/067d16d3f04cf4364130bc232fd3df72d65ca079f5f811d96d06d1c32485f3b7?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Baking material</div>
            </div>
            <div className="flex gap-1.5 px-5 py-2.5 mt-4 rounded-md border border-gray-100 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b756ddb3f4aec149c3d827daba28e31dcac235b4799abc7f1c099e433274ed?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Chocolates & Hard candies</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 px-5 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto text-base font-semibold leading-6 text-purple-900">
                We found <span className="text-purple-900">100</span> items for
                you!
              </div>
              <div className="flex gap-3 text-sm font-medium leading-6">
                <div className="flex gap-3.5 px-6 py-4 bg-white rounded-xl border border-gray-200 border-solid max-md:pr-5">
                  <div className="flex gap-1.5 items-center self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/333f252a817dd1dc813c4c8baf1a205a68096005236c6bbeb4236d0575c722b8?apiKey=7cc667458d2043d895938c0111c31bd4&"
                      className="shrink-0 self-stretch w-3.5 aspect-square"
                    />
                    <div className="self-stretch my-auto text-neutral-500">
                      Show:
                    </div>
                    <div className="self-stretch my-auto text-zinc-500">
                      20{" "}
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2940b8f46ec12bfd1d4f2b470880e3dbd26e86238df41dfa888a050b17b3adf3?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[15px]"
                  />
                </div>
                <div className="flex gap-2.5 items-start py-3.5 pr-9 pl-4 bg-white rounded-xl border border-gray-200 border-solid max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae0d8a57d31a784ef35e56ff50e8f8951eb935f738961e1f0060c37c6bd6a926?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 w-3.5 aspect-square"
                  />
                  <div className="flex gap-1">
                    <div className="grow text-neutral-500">Sort by:</div>
                    <div className="text-zinc-500">Featured </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/56d61a1a0f173ba6820946b8a509f7fc9457b68bc3c55d52438e898a1ead7dea?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pt-px pb-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:mt-7">
                      <div className="flex flex-col justify-center bg-white">
                        <div className="flex flex-col items-center px-6 pt-6 bg-zinc-300 bg-opacity-50 max-md:px-5">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-16 aspect-[1.31] w-[206px] max-md:px-5">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd31473c1844e9f2181e4cfa7b6f98541d92619210a208712c9c6fe31e9e8d7?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd251ed29e99d777179854536131ae0e94ecaedf9716506e45386a7f145744?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="w-full aspect-[2.78]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 mt-5 max-md:px-5">
                        <div className="text-xs leading-6 text-zinc-400">
                          Hodo Foods
                        </div>
                        <div className="mt-3 text-base font-bold leading-5 text-slate-700">
                          All Natural Italian-Style
                          <br />
                          Chicken Meatballs
                        </div>
                        <div className="flex gap-5 justify-between mt-2.5">
                          <div className="flex gap-2.5">
                            <div className="flex flex-col text-xs leading-6 text-purple-900">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3093176b113835a16beeb75a5e4afed726a02bb18a4e910459718f66f029a56a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                                className="self-center aspect-[5] w-[100px]"
                              />
                              <div className="mt-3.5">
                                By{" "}
                                <span className="text-purple-900">
                                  Stouffer
                                </span>
                              </div>
                            </div>
                            <div className="self-start text-sm leading-6 text-zinc-400">
                              (5)
                            </div>
                          </div>
                          <div className="self-end mt-8 text-xs font-bold leading-6 text-emerald-400">
                            In stock
                          </div>
                        </div>
                        <div className="self-center mt-3 text-lg font-bold leading-6 text-purple-900">
                          Br. 52.85
                        </div>
                        <div className="flex gap-3 mt-5 text-sm font-bold">
                          <div className="flex gap-1.5 justify-center items-start px-5 py-3 text-purple-900 whitespace-nowrap bg-purple-300 rounded leading-[171%]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8852959c6a9814d0f61aea633773bb1689b36e9ceed23becebf8633bcc53f912?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="shrink-0 w-3.5 aspect-square"
                            />
                            <div>Add</div>
                          </div>
                          <div className="flex gap-2 justify-center px-5 py-2.5 tracking-tight text-center text-white bg-purple-900 rounded leading-[300%]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f86af849bcd04033782008f1513c1e0e561f9bbe271952e9a1b5c2a7cb8e65?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="shrink-0 self-start w-3.5 aspect-square"
                            />
                            <div>Buy Now</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow pt-px pb-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:mt-7">
                      <div className="flex justify-center items-center px-6 pt-6 bg-white max-md:px-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93c5827b3a3475a3b3a6a7efbbb899424b9ab397355066d773a727c32f6d68c4?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="aspect-[1.32] w-[206px]"
                        />
                      </div>
                      <div className="flex flex-col px-6 mt-5 max-md:px-5">
                        <div className="text-xs leading-6 text-zinc-400">
                          Hodo Foods
                        </div>
                        <div className="mt-3 text-base font-bold leading-5 text-slate-700">
                          All Natural Italian-Style
                          <br />
                          Chicken Meatballs
                        </div>
                        <div className="flex gap-5 justify-between mt-2.5">
                          <div className="flex gap-2.5">
                            <div className="flex flex-col text-xs leading-6 text-purple-900">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3093176b113835a16beeb75a5e4afed726a02bb18a4e910459718f66f029a56a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                                className="self-center aspect-[5] w-[100px]"
                              />
                              <div className="mt-3.5">
                                By{" "}
                                <span className="text-purple-900">
                                  Stouffer
                                </span>
                              </div>
                            </div>
                            <div className="self-start text-sm leading-6 text-zinc-400">
                              (5)
                            </div>
                          </div>
                          <div className="self-end mt-8 text-xs font-bold leading-6 text-emerald-400">
                            In stock
                          </div>
                        </div>
                        <div className="self-center mt-3 text-lg font-bold leading-6 text-purple-900">
                          Br. 52.85
                        </div>
                        <div className="flex gap-3 mt-5 text-sm font-bold">
                          <div className="flex gap-1.5 justify-center items-start px-5 py-3 text-purple-900 whitespace-nowrap bg-purple-300 rounded leading-[171%]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd798ea5668c7f9f24068e58446c044c3dea6c940d363d0e08274d15c22b17ea?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="shrink-0 w-3.5 aspect-square"
                            />
                            <div>Add</div>
                          </div>
                          <div className="flex gap-2 justify-center px-5 py-2.5 tracking-tight text-center text-white bg-purple-900 rounded leading-[300%]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8cb78c6a6032539da06d83c5debddba18b46a7f919261e7666a7aa82e23c508?apiKey=7cc667458d2043d895938c0111c31bd4&"
                              className="shrink-0 self-start w-3.5 aspect-square"
                            />
                            <div>Buy Now</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-px pb-2.5 bg-white rounded-2xl border border-gray-200 border-solid">
                <div className="flex flex-col text-xs leading-3 text-white whitespace-nowrap bg-white">
                  <div className="z-10 justify-center px-5 py-3 bg-purple-900 rounded-2xl">
                    -14%
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9200c63f11088d7318ff189fb1aebf8c99f292bd4d7aa1d2ebd83fa6ba1d6fb4?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="self-end -mt-1.5 max-w-full aspect-[1.32] w-[206px]"
                  />
                </div>
                <div className="flex flex-col px-6 mt-5 max-md:px-5">
                  <div className="text-xs leading-6 text-zinc-400">
                    Pet Foods
                  </div>
                  <div className="mt-3 text-base font-bold leading-5 text-slate-700">
                    Blue Diamond Almonds
                    <br />
                    Lightly
                  </div>
                  <div className="flex gap-5 justify-between mt-3 w-full">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col text-xs leading-6 text-purple-900">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6a6e8a8fcc5a0fa85222126baf479dde7a8dfea690927886925dbe7d34c2bb8?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="self-center w-20 aspect-[4]"
                        />
                        <div className="mt-2.5">
                          By <span className="text-purple-900">NestFood</span>
                        </div>
                      </div>
                      <div className="self-start text-sm leading-6 text-zinc-400">
                        (4.0)
                      </div>
                    </div>
                    <div className="self-end mt-7 text-xs font-bold leading-6 text-emerald-400">
                      In stock
                    </div>
                  </div>
                  <div className="flex gap-3.5 self-start mt-3 ml-5 font-bold max-md:ml-2.5">
                    <div className="my-auto text-xs leading-6 text-zinc-400">
                      Br. 37.8
                    </div>
                    <div className="text-lg leading-6 text-purple-900">
                      Br. 52.85
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5 text-sm font-bold">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-3 text-purple-900 whitespace-nowrap bg-purple-300 rounded leading-[171%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/670244a1a7d1eeb205be53cf2b7166da46d50a41b753fd92fe8090e083ddee06?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-3.5 aspect-square"
                      />
                      <div>Add</div>
                    </div>
                    <div className="flex gap-2 justify-center px-5 py-2.5 tracking-tight text-center text-white bg-purple-900 rounded leading-[300%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/511a9f710ab68ed193f529db8b235056b693a333fe2f18773c5d671198900b34?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 self-start w-3.5 aspect-square"
                      />
                      <div>Buy Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopCom;
