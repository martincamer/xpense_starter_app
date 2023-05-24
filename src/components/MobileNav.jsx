import { nav } from '../data';

const MobileNav = () => {
	return (
		<div className="bg-accent/95 w-full h-full">
			<ul className="h-full flex flex-col justify-center items-center gap-y-8">
				{nav.map((item, index) => {
					const { href, name } = item;

					return (
						<li key={index}>
							<a
								className="link text-2xl text-white"
								href={href}
							>
								{name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MobileNav;
