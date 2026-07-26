import React from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<main className='mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
			{/* Page Header */}
			<section className='mb-8'>
				<p className='text-xs font-medium uppercase tracking-[0.2em] text-violet-400'>
					Your Cart
				</p>

				<div className='mt-2 flex items-end justify-between gap-4'>
					<div>
						<p className='mt-2 text-sm text-zinc-500'>
							{items.length === 0
								? "Your cart is currently empty."
								: `${items.length} ${
										items.length === 1 ? "product" : "products"
									} in your cart.`}
						</p>
					</div>

					{items.length > 0 && (
						<Link
							to='/shop'
							className='hidden items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white sm:flex'
						>
							<ArrowLeft size={16} />
							Continue Shopping
						</Link>
					)}
				</div>
			</section>

			{/* Empty Cart */}
			{items.length === 0 && (
				<section className='flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] px-6 text-center backdrop-blur-xl'>
					<div className='flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]'>
						<ShoppingBag
							size={28}
							className='text-zinc-500'
						/>
					</div>

					<h2 className='mt-6 text-xl font-semibold text-zinc-200'>
						Your cart is empty
					</h2>

					<p className='mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500'>
						You haven't added anything yet. Explore our collection and find
						something you like.
					</p>

					<Link
						to='/shop'
						className='mt-7 inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white'
					>
						<ShoppingBag size={16} />
						Start Shopping
					</Link>
				</section>
			)}

			{/* Cart */}
			{items.length > 0 && (
				<section className='grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start'>
					{/* Cart Items */}
					<div className='space-y-4'>
						{items.map((product) => (
							<CartItem
								key={product.id}
								product={product}
							/>
						))}

						<Link
							to='/shop'
							className='flex items-center gap-2 pt-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-200 sm:hidden'
						>
							<ArrowLeft size={16} />
							Continue Shopping
						</Link>
					</div>

					{/* Order Summary */}
					<OrderSummary items={items} />
				</section>
			)}
		</main>
	);
};

export default Cart;
