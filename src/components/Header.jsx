import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
	const cartCount = useSelector((state) => state.cart.items.length);

	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl'>
			<nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-18 items-center justify-between'>
					{/* Logo */}
					<Link
						to='/'
						className='group flex items-center gap-3'
					>
						<div className='flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white transition group-hover:bg-white/10'>
							N
						</div>

						<div className='leading-none'>
							<h1 className='text-lg font-semibold tracking-[0.2em] text-zinc-100'>
								NEXORA
							</h1>
							<p className='mt-1 hidden text-[9px] tracking-[0.25em] text-zinc-500 sm:block'>
								EVERYDAY STORE
							</p>
						</div>
					</Link>

					{/* Navigation */}
					<div className='flex items-center gap-2 sm:gap-6'>
						<div className='hidden items-center gap-1 rounded-xl border border-white/10 bg-white/3 p-1 sm:flex'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									`rounded-lg px-4 py-2 text-sm font-medium transition ${
										isActive
											? "bg-white/10 text-white"
											: "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
									}`
								}
							>
								Home
							</NavLink>

							<NavLink
								to='/shop'
								className={({ isActive }) =>
									`rounded-lg px-4 py-2 text-sm font-medium transition ${
										isActive
											? "bg-white/10 text-white"
											: "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
									}`
								}
							>
								Shop
							</NavLink>
						</div>

						{/* Cart */}
						<Link
							to='/cart'
							className='group relative flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 text-zinc-300 transition hover:border-white/15 hover:bg-white/6 hover:text-white'
						>
							<ShoppingCart
								size={19}
								strokeWidth={1.8}
							/>

							{/* Redux cart count */}
							{cartCount > 0 && (
								<span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-100 px-1.5 text-[10px] font-bold text-zinc-950'>
									{cartCount}
								</span>
							)}
						</Link>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className='flex items-center gap-2 border-t border-white/5 py-3 sm:hidden'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition ${
								isActive
									? "bg-white/10 text-white"
									: "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
							}`
						}
					>
						Home
					</NavLink>

					<NavLink
						to='/shop'
						className={({ isActive }) =>
							`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition ${
								isActive
									? "bg-white/10 text-white"
									: "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
							}`
						}
					>
						Shop
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
