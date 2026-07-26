import React from "react";
import { Link } from "react-router";

const Header = () => {
	return (
		<div>
			<nav className='bg-white dark:bg-gray-800 antialiased'>
				<div className='max-w-7xl px-4 mx-auto 2xl:px-0 py-4'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-8'>
							<div className='shrink-0'>
								<a
									href='#'
									title=''
									className=''
								>
									<img
										className='block w-auto h-8 dark:hidden'
										src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg'
										alt=''
									/>
									<img
										className='hidden w-auto h-8 dark:block'
										src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg'
										alt=''
									/>
								</a>
							</div>
							<ul className='hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center'>
								<li>
									<Link
										to={"/"}
										title=''
										className='flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500'
									>
										Home
									</Link>
								</li>
								<li className='shrink-0'>
									<Link
										to={"/shop"}
										title=''
										className='flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500'
									>
										Shop
									</Link>
								</li>
							</ul>
						</div>
						<div className='flex items-center lg:space-x-2'>
							<button
								id='myCartDropdownButton1'
								data-dropdown-toggle='myCartDropdown1'
								type='button'
								className='inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white'
							>
								<span className='sr-only'>Cart</span>
								<svg
									className='w-5 h-5 lg:me-1'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									width={24}
									height={24}
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312'
									/>
								</svg>
								<span className='hidden sm:flex'>My Cart</span>
								<svg
									className='hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									width={24}
									height={24}
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='m19 9-7 7-7-7'
									/>
								</svg>
							</button>
						</div>
					</div>
					<div
						id='ecommerce-navbar-menu-1'
						className='bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4'
					></div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
