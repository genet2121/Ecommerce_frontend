import React from "react";

const EmailSubscription = () => {
  return (
    <div className="flex items-center justify-center" style={{ marginTop: 40, marginLeft: 90 }}>
      <div className="w-[700px]" style={{ borderRadius: "12px", overflow: "hidden", position: "relative" }}>
        <img
          src="images/subscription.jpg"
          alt="subscription"
          className="h-[300px]"
          style={{ width: "100%" }}
        />
        <div className="subscription" style={{ position: 'absolute', width: '100%', height: '200px', opacity: 0.5, top: 0 }}>
          <div className="left-[51px] top-[4px] absolute text-slate-700 text-[32px] font-bold  leading-[60px]">Don’t miss amazing<br />deals</div>
          <div className="w-[398px] h-6 left-[51px] top-[140px] absolute text-zinc-500 text-xl font-normal font-['Lato'] leading-normal">Sign up for the daily newsletter</div>
          <div className="w-[350px] h-16 left-[42px] top-[204px] absolute bg-white rounded-[50px] justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch relative">
              <input type="email" placeholder="Your email address" className="w-[292.45px] h-16 pl-[58px] pr-0.5 rounded-tl-[50px] rounded-bl-[50px] justify-end items-center inline-flex" />
              <button className="w-[157.55px] h-16 pl-10 pr-[39.68px] py-[22px] left-[292.45px] top-0 absolute  rounded-[50px] justify-center items-center inline-flex" style={{ background: '#5D328F', color: 'white' }}>Subscribe
              </button>
            
            </div>
          </div>
            <div className="flex relative gap-1.5 self-center top-64" style={{marginLeft:520}}>
        <div className="shrink-0 bg-purple-900 border border-purple-900 border-solid h-[15px] rounded-[30px] w-[15px]" />
        <div className="shrink-0 border border-solid border-slate-700 h-[15px] rounded-[30px] w-[15px]" />
      </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
