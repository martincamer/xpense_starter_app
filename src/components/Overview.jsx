import { overview } from '../data';

const Overview = () => {
	const { productImg } = overview;

	return (
		<section className="lg:min-h-[712px] lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px] ">
			<div
				className="container mx-auto overflow-hidden"
				data-aos="fade-up"
				data-aos-offset="300"
			>
				<img
					src={productImg}
					alt="imagen overview"
				/>
			</div>
		</section>
	);
};

export default Overview;
