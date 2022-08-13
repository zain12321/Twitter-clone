import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
function Follow() {
	return (
		<div className="w-[570px] border-b">
			<div className="flex items-center justify-between px-4 py-3 ">
				<h1 className="text-[20px] text-[#050505] font-bold ">Who to Follow</h1>
				<BsThreeDots />
			</div>
			<div>
				<div className="flex space-x-11 items-center hover:bg-gray-200 px-4 w-[570px] pb-8 mr-4 h-36">
					<div className="flex items-center space-x-4 w-[400px]">
						<div>
							<img
								className="h-11 w-11 rounded-full"
								src="https://pbs.twimg.com/profile_images/1513602770246553605/DFpGDqv0_400x400.jpg"
								alt=""
							/>
						</div>
						<div className="pt-9">
							<p className="flex ">
								<span className="text-[#050505] hover:underline font-semibold">Dr. Sehebaz Gill</span>
								<img
									className="h-6 w-10 rounded-full"
									src="https://i.pinimg.com/736x/5e/a5/4d/5ea54d3b115ae0fc0f51a3fc7086a49d.jpg"
									alt=""
								/>
							</p>
							<p className="text-[15px] text-gray-500">@SehbazGill</p>
							<p className="text-[15px] text-[#050505]">
								Federal Minister for information &Broadcasting <br />Government of Pakistan and Law And
								Justice
							</p>
						</div>
					</div>
					<div className=" border-2 bg-[#050505] border-[#050505] h-8 rounded-full  pl-5 w-24">
						<button className="text-[#FFFFFF] pl-[6px] pt-[1px] font-semibold">Follow</button>
					</div>
				</div>

				<div className="flex space-x-11 cursor-pointer items-center hover:bg-gray-200 px-4 w-[570px] pb-11  mr-4 h-40">
					<div className="flex items-center space-x-4 w-[520px]">
						<div>
							<img
								className="h-11 w-11 rounded-full"
								src="https://media-exp2.licdn.com/dms/image/C5603AQFujxUS-UkFLg/profile-displayphoto-shrink_100_100/0/1617823443982?e=1660780800&v=beta&t=Cnu_NMeKm04_50oRo7abhba1VMMR_VCZZhrd-FSqkP4"
								alt=""
							/>
						</div>
						<div className="pt-14">
							<p className="flex ">
								<span className="text-[#050505] hover:underline font-semibold">Asad Qaisar</span>
								<img
									className="h-6 w-10 rounded-full"
									src="https://i.pinimg.com/736x/5e/a5/4d/5ea54d3b115ae0fc0f51a3fc7086a49d.jpg"
									alt=""
								/>
							</p>
							<p className="text-[15px] text-gray-500">@AsadQaiser</p>
							<p className="text-[15px] text-[#050505]">
								{' '}
								to congratulate people of Pakistan on peaceful <br />transition of power. It’s matter of
								pride that <br />our institutions respect Constitution as{' '}
							</p>
						</div>
					</div>
					<div className=" border-2 bg-[#050505] border-[#050505] h-8 rounded-full    w-[126px]">
						<button className="text-[#FFFFFF] pl-[23px] pt-[1px] font-semibold">Follow</button>
					</div>
				</div>

				<div className="flex  space-x-11  items-center hover:bg-gray-200 w-[570px] px-4 mr-4 h-44  pb-11">
					<div className="flex items-center space-x-4 w-[400px]">
						<div>
							<img
								className="h-11 w-11 rounded-full"
								src="https://pbs.twimg.com/media/FQFtJxkWYAIulrV?format=jpg&name=small"
								alt=""
							/>
						</div>
						<div className="pt-14">
							<p className="flex ">
								<span className="text-[#050505] hover:underline font-semibold">ChFawad Hussain</span>
								<img
									className="h-6 w-10 rounded-full"
									src="https://i.pinimg.com/736x/5e/a5/4d/5ea54d3b115ae0fc0f51a3fc7086a49d.jpg"
									alt=""
								/>
							</p>
							<p className="text-[15px] text-gray-500">@FawadHussain</p>
							<p className="text-[#050505] text-[16px]">
								PTI | Professor UI | PhD in Leadership & <br />Management|Ex Spokesperson,& EX Special
								Assistant<br />
							</p>
						</div>
					</div>
					<div className=" border-2 bg-[#050505] border-[#050505] h-8 rounded-full  pl-2 w-24">
						<button className="text-[#FFFFFF] pl-[15px] pt-[1px] font-semibold">Follow</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Follow;
