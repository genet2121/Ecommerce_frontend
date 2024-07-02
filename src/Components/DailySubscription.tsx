import * as React from "react";

const DailySubscription =() =>{
  return (
    <div className="flex items-center justify-center mb-52" style={{ marginTop: 40}}>
    <div className="w-[1500px] h-[417px]" style={{ borderRadius: "12px", overflow: "hidden", position: "relative" }}>
      <img
        src="images/dailysub.jpg"
        alt="subscription"
        className="h-[350px]"
        style={{ width: "100%" }}
      />
      <div className="subscription" style={{ position: 'absolute', width: '100%', height: '200px', opacity: 0.5, top: 0 }}>
        <div className="left-[78px] top-[43px] absolute  text-[32px] font-bold  leading-[60px]" style={{color:'#253D4E'}}>Stay home & get your daily<br />needs from our shop</div>
        {/* <div className="w-[398px] h-6 left-[51px] top-[140px] absolute  text-xl font-normal font-['Lato'] leading-normal">Sign up for the daily newsletter</div> */}
        <div className="w-[398px] h-6 left-[78px] top-[170px] absolute"><span className=" text-lg font-normal font-['Lato'] leading-normal" style={{color:'#7E7E7E'}}>Start You'r Daily Shopping with </span><span className="text-purple-900 text-lg font-normal font-['Lato'] leading-normal">Time Ecommerce</span></div>
        <div className="w-[350px] h-16 left-[78px] top-[230px] absolute bg-white rounded-[50px] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch relative">
       
            <input type="email" placeholder="Your email address" className="w-[292.45px] h-16 pl-[58px] pr-0.5 bg-white rounded-tl-[50px] rounded-bl-[50px] justify-end items-center inline-flex" />
            <button className="w-[157.55px] h-16 pl-10 pr-[39.68px] py-[22px] left-[292.45px] top-0 absolute  rounded-[50px] justify-center items-center inline-flex" style={{ background: '#7311E3', color: 'white' }}>Subscribe
            </button>
          
          </div>
        </div>
       
      </div>
    </div>
  </div>
  );
}
export default DailySubscription;