import * as React from "react";

const CategoryDetail =() =>{
  return (
    <div className="flex flex-col pt-16 bg-stone-50">
      <div className="flex z-10 flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 text-lg whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                className="shrink-0 aspect-[1.25] w-[89px]"
              />
              <div className="flex flex-col my-auto">
                <div className="font-bold text-zinc-800">Time</div>
                <div className="mt-2 text-purple-900">Technologies</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between my-auto text-sm font-medium leading-9 text-purple-900">
              <div className="flex gap-2 items-center px-4 py-1 bg-white rounded-md border border-gray-200 border-solid shadow-sm">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/197f599a3453fe613c41f517974a430420e38ecc169232a261d22e1b4bebef1a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="shrink-0 self-start w-3.5 aspect-[0.4]"
                />
                <div className="self-stretch my-auto">Your Location</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56e70344c5cc73c0fe9176394e7fdc1b3aba3a11ef39d4d4daecb102d8293789?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="shrink-0 self-stretch my-auto w-3.5 aspect-square"
                />
              </div>
              <div className="flex gap-4 px-4 py-3.5 bg-white rounded-md border border-gray-200 border-solid shadow-sm">
                <div className="flex gap-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a7b869da9c7e91ff2680e893201e3a2d353e688f2c4243110bd33c88b699c9e?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square fill-black w-[15px]"
                  />
                  <div>English - ETB</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e3cbd8cd0cd6f3c019a19934edc10020d0d5530b47a78b0067459122dbc11a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="shrink-0 self-start w-3.5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-sm font-medium leading-9">
            <div className="justify-center px-16 py-3.5 text-purple-900 bg-white rounded-md border border-purple-900 border-solid shadow-sm max-md:pr-6 max-md:pl-5">
              Sign in
            </div>
            <div className="justify-center items-start px-14 py-3.5 text-white bg-purple-900 rounded-md border border-gray-200 border-solid shadow-sm max-md:px-5">
              Sign up
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-16 w-full text-sm font-medium leading-9 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5">
            <div className="flex flex-col">
              <div className="flex gap-1.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3677027e2a74b607d4ce5b5815ce398cb0a5889a124c2a538e7ef9e86a169711?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="shrink-0 aspect-square w-[30px]"
                />
                <div className="my-auto">All categories</div>
              </div>
              <div className="shrink-0 h-0.5 bg-purple-900 rounded-[50px]" />
            </div>
            <div className="flex-auto my-auto">Become a Seller</div>
          </div>
          <div className="flex-auto my-auto max-md:max-w-full">Get the app</div>
        </div>
        <div className="self-center mt-24 w-full max-w-[1728px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex gap-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col text-sm leading-9 text-black">
                  <div className="justify-center items-start px-6 py-7 font-bold bg-violet-100 rounded-xl shadow-sm max-md:px-5">
                    Home Decor & Garden
                  </div>
                  <div className="flex flex-col self-start mt-11 ml-6 font-semibold max-md:mt-10 max-md:ml-2.5">
                    <div>Apparel & Fashion</div>
                    <div className="mt-12 max-md:mt-10">
                      Beauty & Personal care
                    </div>
                    <div className="mt-12 max-md:mt-10">Electronics</div>
                    <div className="mt-14 max-md:mt-10">Health & Wellness</div>
                    <div className="mt-14 max-md:mt-10">Toys & Games</div>
                    <div className="mt-12 max-md:mt-10">Sports & Outdoors</div>
                    <div className="mt-12 max-md:mt-10">Automotive</div>
                    <div className="mt-14 max-md:mt-10">Office Supplies</div>
                    <div className="mt-12 max-md:mt-10">Baby & Kids</div>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white max-md:hidden">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/212fefcdf9859a6a8eca9bc987aef7c6d65d62694c4d0e393dddb5386d5f2a4d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="w-5 aspect-[1.33]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48a854b665d3f876ae341faf57b9d974ed76a87d78d3128147da43d8e106e39d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="w-5 aspect-[1.33] mt-[609px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col self-start text-sm leading-9 text-black">
                  <div className="flex gap-3 p-3 font-bold bg-violet-100 rounded-xl shadow-sm">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a374d928f2026926438eebf2832b1598f2bbd3b5e87e3d3fa463273f02c2b02b?apiKey=7cc667458d2043d895938c0111c31bd4&"
                      className="shrink-0 w-10 aspect-square"
                    />
                    <div className="flex-auto my-auto">Gifts & Crafts</div>
                  </div>
                  <div className="flex flex-col items-start pr-20 pl-3 mt-7 font-semibold max-md:pr-5">
                    <div className="flex gap-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc2531172b3b1f521dedbfdae1ca43a7b20e75dc9364e74585948215aaf6b881?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-10 aspect-square"
                      />
                      <div className="flex-auto my-auto">Home & Garden</div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dea921dc2918d49e2dec83aa9575d8287fb5503167972ace0069d85ea1055e62?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-10 aspect-square"
                      />
                      <div className="flex-auto my-auto">
                        Construction & Real-estate
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/447a9255ceb5cd937ef68d59f9937941c5c660fc04f8e3b50211addfe1e5f649?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-10 aspect-square"
                      />
                      <div className="flex-auto my-auto">Lights & Lighting</div>
                    </div>
                    <div className="flex gap-3 mt-6 whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/485b542adee42e6240c3db01b9e2df10e7abfe1502668af62ea4aaa080018b9e?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-10 aspect-square"
                      />
                      <div className="flex-auto my-auto">Furniture</div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8aed7dc2c1709cd6ffa594dfcd61838a211458db6a4b4b63c097e31654c3cea?apiKey=7cc667458d2043d895938c0111c31bd4&"
                        className="shrink-0 w-10 aspect-square"
                      />
                      <div className="flex-auto my-auto">Pet Supplies</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white max-md:hidden">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/212fefcdf9859a6a8eca9bc987aef7c6d65d62694c4d0e393dddb5386d5f2a4d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="w-5 aspect-[1.33]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48a854b665d3f876ae341faf57b9d974ed76a87d78d3128147da43d8e106e39d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="w-5 aspect-[1.33] mt-[609px] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-0 self-start text-xl font-bold leading-9 text-black">
                  <div className="grow my-auto">Gifts & Crafts</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc4afeab813a5f09188d6e92e0994b4b63bb156455801dd57cd2eddb8c0bb945?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[25px]"
                  />
                </div>
                <div className="mt-16 ml-3.5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-center text-xl font-semibold leading-9 text-center text-black whitespace-nowrap max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf29cc7025a06fffce6d7fef3a38583ffb14b2d3f952c5d4ae25b8485f16d09?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="aspect-square w-[150px]"
                        />
                        <div className="mt-12 max-md:mt-10">Flags</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb86c32851f564830ea90738f237a49eb212d1c2fc1994cd5931296a96d431fe?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-12 max-md:mt-10">Gift Cards</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87bc0ca801cbf667cba378460e81a9ed8df22d4f7a48d1b8beec00b53e3f0106?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="self-center rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-12 max-md:mt-10">Satin Lanyards</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5e6b0ccef8ff60d19d4919082971f6d3df839f3a79ae1905eac5c9af823d9e5?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="aspect-square w-[150px]"
                        />
                        <div className="mt-8">Decorative Stickers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-24 ml-3.5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ef2522aed87727cc51512f2997085db7f2da460fde9854fbbfe045f30d98429?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-12 max-md:mt-10">Paper Crafts</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-center text-xl font-semibold leading-9 text-center text-black whitespace-nowrap max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5922bc1b32152a4b9f22afccf0b7220fa2e6956b7b8afb5ec420fc86d560e73?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-12 max-md:mt-10">Posters</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/855cc498cc34f27267b2022abdedbc7c08318d1fdc60104ab548f0689e65064a?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-8">Plastic Key Chains</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7df76aed71548989c26581457d24fc1c0005d55c373e3fc48034dbde9103e75?apiKey=7cc667458d2043d895938c0111c31bd4&"
                          className="rounded-full aspect-square w-[150px]"
                        />
                        <div className="mt-8">Other Key Chains</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end mt-28 mr-7 max-w-full w-[981px] max-md:mt-10 max-md:mr-2.5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b0dc47b1cb7ea66ded9dd1ba43846e11af38faf04b15951bbaac30cc4b5722?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="rounded-full aspect-square w-[150px]"
                />
                <div className="mt-12 max-md:mt-10">Gift Sets</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14da640d2f1ff9e6907622358955f11e0d897a0dbfab2cfc9a95db5bd0de002c?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="self-center rounded-full aspect-square w-[150px]"
                />
                <div className="mt-12 max-md:mt-10">Novelty Gifts</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/feed8b40ea498f68e6be5c081bdaa9dcabcdb4f1118acf7df5f5114b934f615c?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="rounded-full aspect-square w-[150px]"
                />
                <div className="mt-8">Promotional Memo Pad</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b90c6be9c46752dad7c49c86ef14fbf487a7e0b4cdfb5cdb19a97475aaf12fd?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="rounded-full aspect-square w-[150px]"
                />
                <div className="mt-8">Cartoon Stickers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-28 ml-20 max-w-full w-[427px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-semibold leading-9 text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87caab5788c7cc21b9726425a6cbe9b56ba98e740df5c11e20657b5850adc6e8?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="self-center rounded-full aspect-square w-[150px]"
                />
                <div className="mt-12 max-md:mt-10">Crystal Crafts</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="justify-center self-stretch px-14 py-3 my-auto w-full text-xl font-semibold leading-9 text-center text-black whitespace-nowrap bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10">
                More
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-56 text-7xl font-bold text-purple-900 leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Ethiopia’s leading B2C market place
        </div>
      </div>
      <div className="flex flex-col items-center pt-20 mt-0 w-full bg-zinc-300 bg-opacity-70 max-md:max-w-full">
        <div className="flex gap-0 items-center px-5 py-20 mt-20 w-full font-bold text-center text-white bg-gray-700 rounded-2xl leading-[120%] max-w-[1610px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-stretch px-20 pt-5 pb-px my-auto max-md:px-5">
            <div className="self-center text-7xl max-md:text-4xl">0+</div>
            <div className="mt-5 text-2xl">Glorious years</div>
          </div>
          <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-1.5 my-auto whitespace-nowrap max-md:px-5">
            <div className="flex flex-col">
              <div className="text-7xl max-md:text-4xl">0+</div>
              <div className="mt-6 text-2xl">Partners</div>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-px my-auto whitespace-nowrap max-md:px-5">
            <div className="flex flex-col">
              <div className="text-7xl max-md:text-4xl">0+</div>
              <div className="mt-6 text-2xl">Buyers</div>
            </div>
          </div>
          <div className="flex flex-col self-stretch px-20 pt-5 pb-1.5 my-auto max-md:px-5">
            <div className="self-center text-7xl max-md:text-4xl">0+</div>
            <div className="self-start mt-5 text-2xl max-md:ml-1.5">
              Verified Sellers
            </div>
          </div>
          <div className="flex flex-col self-stretch px-20 pt-5 pb-1.5 my-auto max-md:px-5">
            <div className="self-center text-7xl max-md:text-4xl">0+</div>
            <div className="mt-5 text-2xl max-md:mr-0.5 max-md:ml-1">
              Products Sold
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-5 mt-36 w-full text-center max-w-[1727px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-1 gap-px items-start px-4 pt-1.5 bg-violet-100 rounded-xl border border-solid border-slate-100">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7475e79c8b62550bf89cc48ec2829822557c74935df70347198064775cc213f2?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start aspect-square w-[60px]"
            />
            <div className="flex flex-col self-end mt-6">
              <div className="self-center text-base font-bold leading-5 text-slate-700">
                Best prices & offers
              </div>
              <div className="mt-4 text-sm leading-6 text-zinc-500">
                Best price for product in the market
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-between items-start pt-1.5 pr-16 pl-4 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/40af762eb2d745c4c81a5a2974bafa63b72f06432c80949e8cc3e3643bafd021?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start aspect-square w-[60px]"
            />
            <div className="flex flex-col self-end mt-6">
              <div className="text-base font-bold leading-5 text-slate-700">
                Free delivery
              </div>
              <div className="mt-4 text-sm leading-6 text-zinc-500">
                free delivery 24/7
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-between items-start pt-1.5 pr-20 pl-3 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0e0789f97f631ee4f0a0831e9ccedd099244e67ebb8b71ddc09b6e8f37b7cf?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start aspect-square w-[60px]"
            />
            <div className="flex flex-col self-end mt-6">
              <div className="self-start ml-3 text-base font-bold leading-5 text-slate-700 max-md:ml-2.5">
                Great deals
              </div>
              <div className="mt-5 text-sm leading-6 text-zinc-500">
                when you sign up
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-between items-start pt-1.5 pr-12 pl-3 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cedb7cc7bad9e14dd24fae202ed2152fbf60dd830c63bfffc141c7d3933e29a?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start aspect-square w-[60px]"
            />
            <div className="flex flex-col self-end mt-6">
              <div className="text-base font-bold leading-5 text-slate-700">
                Wide assortments
              </div>
              <div className="self-center mt-5 text-sm leading-6 text-zinc-500">
                Mega discounts
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-between items-start pt-1.5 pr-16 pl-3.5 bg-violet-100 rounded-xl border border-solid border-slate-100 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd48b027120be7da76a756a30a8270c3b3aed10ea4732d9eac538483b3954c94?apiKey=7cc667458d2043d895938c0111c31bd4&"
              className="shrink-0 self-start aspect-square w-[60px]"
            />
            <div className="flex flex-col self-end mt-6">
              <div className="text-base font-bold leading-5 text-slate-700">
                Easy returns
              </div>
              <div className="mt-4 text-sm leading-6 text-zinc-500">
                Within 30 days
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-16 pt-16 mt-44 w-full rounded-3xl min-h-[417px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4168fc3c2ac75842288ccf165b2efab865b0018ff1a2a70e3bd90092adeb1aa9?apiKey=7cc667458d2043d895938c0111c31bd4&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col my-auto max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-slate-700 max-md:max-w-full">
              Stay home & get your daily
              <br />
              needs from our shop
            </div>
            <div className="mt-7 text-lg leading-6 text-purple-900 max-md:max-w-full">
              Start You'r Daily Shopping with{" "}
              <span className="text-purple-900">Time Ecommerce</span>
            </div>
            <div className="flex gap-px justify-center mt-12 text-base bg-white rounded-[50px] max-md:flex-wrap max-md:mt-10">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-start px-14 py-7 aspect-[5.13] rounded-[50px_0px_0px_50px] text-zinc-500 w-fit max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03a5183cb5f198a6574a4f9e8f8c1342cd7f973a89d818219bffba5a31826a3b?apiKey=7cc667458d2043d895938c0111c31bd4&"
                  className="object-cover absolute inset-0 size-full"
                />
                Your emaill address
              </div>
              <div className="justify-center px-10 py-7 font-bold tracking-wide text-center text-white whitespace-nowrap bg-purple-900 leading-[150%] rounded-[50px] max-md:px-5">
                Subscribe
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a88632d1f96ad5d0145268185ed04deb8444a4304ef4ca3ea6cc59b4aba60024?apiKey=7cc667458d2043d895938c0111c31bd4&"
            className="self-start w-full aspect-[1.82] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col items-center self-stretch px-20 py-7 mt-80 w-full bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="w-full max-w-[1620px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 max-md:mt-10">
                        <div className="flex gap-4 text-lg whitespace-nowrap">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aca5251a35d616fb609041618396a1244633b31439709a640e7f954e1dd7e31d?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 aspect-[1.25] w-[89px]"
                          />
                          <div className="flex flex-col my-auto">
                            <div className="font-bold text-zinc-800">Time</div>
                            <div className="mt-2 text-purple-900">
                              Technologies
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-lg text-slate-700">
                          Awesome grocery store website
                          <br />
                          template
                        </div>
                        <div className="flex gap-2 mt-9 font-semibold text-slate-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dce00a1509d9a65af6182175be9e6c06be978866eb1547af009300acd604229?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 self-start w-4 aspect-[0.94]"
                          />
                          <div className="flex-auto">
                            Address:{" "}
                            <span className="">5171 W Campbell Ave</span>
                          </div>
                        </div>
                        <div className="mt-2.5 leading-[160%] text-slate-700">
                          undefined Kent, Utah 53127 United States
                        </div>
                        <div className="flex gap-2 mt-4 font-semibold text-slate-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c6fa4c607094c7d8aa49c6dd55cdf132f97677da434a71dcb686315c14f554?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 self-start w-4 aspect-square"
                          />
                          <div className="flex-auto">
                            Call Us:
                            <span className="">(+91) - 540-025-124553</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3.5 font-semibold text-slate-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb59f2f69c72cb1ebae347f897f678ec8d4fa612f3c1e1828356a0feb07ceb8?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 self-start w-4 aspect-[0.94]"
                          />
                          <div className="flex-auto">
                            Email:<span className="">sale@Nest.com</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4 font-semibold text-slate-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08f446c9582b324a384611734407dccb48a7fddb7e28f64b5825d149ab740684?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 self-start w-4 aspect-square"
                          />
                          <div className="flex-auto">
                            Hours:
                            <span className="">10:00 - 18:00, Mon - Sat</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-6 text-base leading-6 text-slate-700 max-md:mt-10">
                        <div className="text-2xl font-bold leading-7">
                          Company
                        </div>
                        <div className="mt-7">About Us</div>
                        <div className="mt-7">Delivery Information</div>
                        <div className="mt-6">Privacy Policy</div>
                        <div className="mt-6">Terms & Conditions</div>
                        <div className="mt-7">Contact Us</div>
                        <div className="mt-7">Support Center</div>
                        <div className="mt-6">Careers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="mt-6 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-slate-700 max-md:mt-10">
                        <div className="text-2xl font-bold leading-7">
                          Account
                        </div>
                        <div className="mt-8">Sign In</div>
                        <div className="mt-6">View Cart</div>
                        <div className="mt-7">My Wishlist</div>
                        <div className="mt-6">Track My Order</div>
                        <div className="mt-6">Help Ticket</div>
                        <div className="mt-6">Shipping Details</div>
                        <div className="mt-6">Compare products</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-slate-700 max-md:mt-10">
                        <div className="text-2xl font-bold leading-7">
                          Corporate
                        </div>
                        <div className="mt-7">Become a Vendor</div>
                        <div className="mt-7">Affiliate Program</div>
                        <div className="mt-6">Farm Business</div>
                        <div className="mt-7">Farm Careers</div>
                        <div className="mt-7">Our Suppliers</div>
                        <div className="mt-6">Accessibility</div>
                        <div className="mt-6">Promotions</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-slate-700 max-md:mt-10">
                        <div className="text-2xl font-bold leading-7">
                          Popular
                        </div>
                        <div className="mt-7">Milk & Flavoured Milk</div>
                        <div className="mt-7">Butter and Margarine</div>
                        <div className="mt-6">Eggs Substitutes</div>
                        <div className="mt-6">Marmalades</div>
                        <div className="mt-7">Sour Cream and Dips</div>
                        <div className="mt-6">Tea & Kombucha</div>
                        <div className="mt-7">Cheese</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col max-md:mt-10">
                        <div className="text-2xl font-bold leading-7 text-slate-700">
                          Install App
                        </div>
                        <div className="flex gap-3 mt-16 max-md:mt-10">
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
                        <div className="mt-14 text-base leading-6 text-slate-700 max-md:mt-10">
                          Secured Payment Gateways
                        </div>
                        <div className="flex gap-5 mt-9 max-md:pr-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4286406faec5a93e8f09084d7c3c169da310fac4a8b28d543dbe24591bf64578?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 aspect-[1.2] w-[29px]"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62793702b52271fc4ebcbc2a2c885cae78127b7e7630d52b47dec950a56af53?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 aspect-[1.2] w-[29px]"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a280b5775e2b31110c214be9ff82f63d441c70917b659f98e6ae9f087d707c28?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 w-7 aspect-[1.16]"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e967b849b753e6df8987d374ed987beb5b292bd81baefaaa20ddf39a6c6e038?apiKey=7cc667458d2043d895938c0111c31bd4&"
                            className="shrink-0 aspect-[1.2] w-[29px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 self-start mt-14 max-w-full h-px border-t border-green-200 border-solid w-[1620px] max-md:mt-10" />
          <div className="flex gap-5 justify-between items-start mt-5 w-full max-w-[1620px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="mt-3.5 text-sm leading-6 text-purple-900">
              © 2024, <span className="text-purple-900">Time E-commerce</span>
              <br />
              All rights reserved
            </div>
            <div className="flex gap-5 justify-between mt-2.5 text-center leading-[100%]">
              <div className="flex gap-3 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bbc3638df626a56741274e602deb01fab4664a6f70d43241167f2d3a47f3d66?apiKey=7cc667458d2043d895938c0111c31bd4&"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b9ad9a795c4e1eee8bbbeda8826641268908af84576604839cb6bdbe043ad1?apiKey=7cc667458d2043d895938c0111c31bd4&"
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
            <div className="flex flex-col">
              <div className="flex gap-4">
                <div className="grow my-auto text-base font-bold leading-5 text-right text-slate-700">
                  Follow Us
                </div>
                <div className="flex gap-1.5 px-0.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca842dea6f181ab2924873965914068ccdd9c1b3fc6344ae065b732a44c3bbc?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd954ae730f567921e742e9aa7ced6f111e207679ec99fc6013c3d3aac6dd7e5?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c89d033a1d87981f0c8221a89890b821938c10d5209f4966b732ea9576e3f58?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e0be1a09dc78e0ade8c228c06adae18c775bec91d7dda5f5243e1f9e6d41f57?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/473de62c57153c2fd98c2c490f47e06af8f9f990b301d1eeb063f15698a98135?apiKey=7cc667458d2043d895938c0111c31bd4&"
                    className="shrink-0 aspect-square w-[30px]"
                  />
                </div>
              </div>
              <div className="mt-2 text-sm leading-6 text-right text-zinc-500">
                Up to 15% discount on your first subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryDetail;