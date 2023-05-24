import { footer } from '../data';
import Copyright from '../components/Copyright';

const Footer = () => {
	const { form, legal, links, logo, newsletter } = footer;
	return (
		<footer className="pt-[142px] pb-[60px]">
			<div className="container mx-auto">
				<div className="flex flex-col text-center items-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
					<div>
						<img
							src={logo}
							alt=""
						/>
					</div>

					{/* list 1  */}
					<div>
						<div className="text-2xl uppercase font-medium mb-6">links</div>
						<ul className="flex flex-col gap-y-3">
							{links.map((item, index) => {
								const { href, name } = item;
								return (
									<li key={index}>
										<a
											className="font-medium hover:text-accent transition"
											href={href}
										>
											{name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* list 2 */}
					<div>
						<div className="text-2xl uppercase font-medium mb-6">legal</div>
						<ul className="flex flex-col gap-y-3">
							{legal.map((item, index) => {
								const { href, name } = item;
								return (
									<li key={index}>
										<a
											className="font-medium hover:text-accent transition"
											href={href}
										>
											{name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* newsletter  */}
					<div className="">
						<div className="text-2xl uppercase font-medium mb-6">
							{newsletter.title}
						</div>
						<div className="text-xl text-light mb-[18px]">
							{newsletter.subtitle}
						</div>
						{/* form  */}
						<form className="max-w-[394px] mb-[10px]">
							<div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
								<input
									className="w-full h-full pl-6 border-none outline-none placeholder:text-dark bg-white rounded-lg"
									type="text"
									placeholder={form.placeholder}
								/>
								<button
									className={
										'btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white'
									}
								>
									{form.btnText}
								</button>
							</div>
						</form>
						<span className="text-sm text-light">{form.smallText}</span>
					</div>
				</div>
			</div>
			<hr />
			<Copyright />
		</footer>
	);
};

export default Footer;
