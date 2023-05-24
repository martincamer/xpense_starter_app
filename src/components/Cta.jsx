import { cta } from '../data';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Cta = () => {
	const { title, subtitle, btnText, img1, img2 } = cta;
	return (
		<section className="section bg-cta bg-cover bg-left-top">
			<div className="max-w-[1340px] mx-auto px-[25px]">
				<div className="max-w-[920px] mx-auto text-center">
					<h2
						className="h2 text-white mb-6"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						{title}
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="300"
						className="text-2xl lg:text-4xl text-white"
					>
						{subtitle}
					</p>
				</div>

				<div className="flex justify-between">
					<img
						data-aos="zoom-out-right"
						data-aos-delay="700"
						className="hidden xl:flex"
						src={img1}
						alt=""
					/>

					<button
						data-aos="fade-up"
						data-aos-delay="400"
						className="btn btn-md btn-white mt-[40px] lg:textr-[22px] gap-x-[10px] mx-auto"
					>
						{btnText} <HiOutlineChevronDown />
					</button>
					<img
						data-aos="zoom-out-left"
						data-aos-delay="700"
						className="hidden xl:flex"
						src={img2}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Cta;
