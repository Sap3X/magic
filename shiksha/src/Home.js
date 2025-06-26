import React from "react";
function Home(){
    return(
<div className="flex flex-col items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/wmxh7e84_expires_30_days.png')] bg-cover bg-center pt-[17px] pb-[687px] mb-[110px]">
	<div className="flex justify-between items-start self-stretch mb-[30px] mx-[237px]">
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/kbj6ppzm_expires_30_days.png"} 
			className="w-[371px] h-[93px] rounded-[10px] object-fill"
		/>
		<div className="flex shrink-0 items-start py-5">
			<span className="text-black text-2xl font-bold my-3 ml-[15px] mr-8" >
				{"Home"}
			</span>
			<span className="text-black text-2xl font-bold my-3 ml-[9px] mr-[26px]" >
				{"About Us"}
			</span>
			<span className="text-black text-2xl font-bold my-3 ml-1 mr-[21px]" >
				{"Careers"}
			</span>
			<span className="text-black text-2xl font-bold my-3 ml-[18px] mr-[35px]" >
				{"Products"}
			</span>
			<span className="text-[#F05A28] text-2xl font-bold my-3 mx-[9px]" >
				{"Contact Us"}
			</span>
		</div>
	</div>
	<span className="text-[#2F327D] text-6xl font-bold mb-[13px] ml-[753px]" >
		{"SHIKSHA 2.0"}
	</span>
	<span className="text-white text-3xl font-bold ml-[626px]" >
		{"“ The Gen 2 Spoken English Teaching Robot ”"}
	</span>
</div>
    );
}
export default Home;