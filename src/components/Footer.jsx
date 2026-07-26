import React from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
	return (
		<footer className='border-t border-white/10 bg-zinc-950'>
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
				<div className='grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]'>
					{/* Brand */}
					<div>
						<Link
							to='/'
							className='inline-flex items-center gap-3'
						>
							<div className='flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white'>
								N
							</div>

							<span className='text-lg font-semibold tracking-[0.2em] text-zinc-100'>
								NEXORA
							</span>
						</Link>

						<p className='mt-5 max-w-md text-sm leading-6 text-zinc-500'>
							Everyday essentials, thoughtfully curated. Explore tech, fashion,
							home, sports, and more in one simple shopping experience.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className='text-sm font-semibold text-zinc-200'>Explore</h3>

						<div className='mt-4 flex flex-col gap-3'>
							<Link
								to='/'
								className='w-fit text-sm text-zinc-500 transition hover:text-zinc-200'
							>
								Home
							</Link>

							<Link
								to='/shop'
								className='w-fit text-sm text-zinc-500 transition hover:text-zinc-200'
							>
								Shop
							</Link>

							<Link
								to='/cart'
								className='w-fit text-sm text-zinc-500 transition hover:text-zinc-200'
							>
								Cart
							</Link>
						</div>
					</div>

					{/* Project */}
					<div>
						<h3 className='text-sm font-semibold text-zinc-200'>NEXORA</h3>

						<p className='mt-4 text-sm leading-6 text-zinc-500'>
							A modern e-commerce project built with React, Redux Toolkit,
							Axios, React Router, and Tailwind CSS.
						</p>

						<a
							href='https://github.com/prathamkave/redux-crud'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white'
						>
							<span>View Project</span>
							<ArrowUpRight size={15} />
						</a>
					</div>
				</div>

				{/* Bottom */}
				<div className='mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between'>
					<p className='text-xs text-zinc-600'>
						© {new Date().getFullYear()} NEXORA. All rights reserved.
					</p>

					<p className='text-xs text-zinc-600'>
						Built for learning. Designed like a real product.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
