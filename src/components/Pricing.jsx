import { useState } from 'react';

import { pricing } from '../data';

import { HiCheck, HiOutlineArrowRight } from 'react-icons/hi';
const Pricing = () => {
	const [index, setIndex] = useState(1);
	const { cards, title } = pricing;
	return (
		<section className=" section">
			<div className="container mx-auto">
				<h2
					data-aos="fade-up"
					data-aos-delay="200"
					className="h2 mb-10 lg:mb-20 text-center"
				>
					{title}
				</h2>
				<div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
					{cards.map((card, cardIndex) => {
						const { title, icon, btnText, price, delay, services, userAmount } =
							card;
						return (
							<div
								data-aos="fade-up"
								data-aos-delay={delay}
								data-aos-offset="300"
								key={cardIndex}
							>
								<div
									onClick={() => setIndex(cardIndex)}
									className={` ${
										cardIndex === index
											? 'bg-white shadow-2xl'
											: ' border border-gray'
									} w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all duration-300 `}
								>
									<div className="mb-8">
										<img
											src={icon}
											alt="icon"
										/>
									</div>

									<div className="text-[32px] font-semibold mb-8">{title}</div>

									<div className="flex flex-col gap-y-2 mb-6">
										{services.map((service, index) => {
											const { name } = service;
											return (
												<div
													className="flex items-center gap-x-10"
													key={index}
												>
													<div>
														<HiCheck className="text-light" />
														{name}
													</div>
												</div>
											);
										})}
									</div>

									<div className="mb-10">
										<div>
											<span className="text-2xl font-semibold">{price}/</span>{' '}
											<span className="text-xl text-light font-light">
												year
											</span>
										</div>
										<div className="text-base text-light mb-10">
											{userAmount}
										</div>
										<div>
											<button
												className={`${
													cardIndex === index
														? 'bg-accent hover:bg-accentHover text-white'
														: 'border border-accent text-accent'
												} btn btn-sm space-x-[14px]`}
											>
												<span>{btnText}</span>
												<HiOutlineArrowRight />
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
