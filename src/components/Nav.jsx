import { nav } from '../data';

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-x-[20px]">
				{nav.map((item, index) => {
					const { href, name } = item;

					return (
						<li key={index}>
							<a
								className="hover:text-accent transition text-black text-xl"
								href={href}
							>
								{name}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
