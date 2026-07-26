import React from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

const OrderSummary = ({ items }) => {
	const subtotal = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	const shipping = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 8;

	const tax = subtotal * 0.08;

	const total = subtotal + shipping + tax;

	return (
		<aside className='rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl'>
			<h2 className='text-lg font-semibold text-zinc-100'>Order Summary</h2>

			<div className='mt-6 space-y-4'>
				<div className='flex items-center justify-between text-sm'>
					<span className='text-zinc-500'>Subtotal</span>

					<span className='font-medium text-zinc-200'>
						${subtotal.toFixed(2)}
					</span>
				</div>

				<div className='flex items-center justify-between text-sm'>
					<span className='text-zinc-500'>Shipping</span>

					<span className='font-medium text-zinc-200'>
						{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
					</span>
				</div>

				<div className='flex items-center justify-between text-sm'>
					<span className='text-zinc-500'>Estimated Tax</span>

					<span className='font-medium text-zinc-200'>${tax.toFixed(2)}</span>
				</div>

				<div className='border-t border-white/10 pt-4'>
					<div className='flex items-center justify-between'>
						<span className='text-base font-semibold text-zinc-200'>Total</span>

						<span className='text-xl font-semibold text-white'>
							${total.toFixed(2)}
						</span>
					</div>
				</div>
			</div>

			<button
				type='button'
				disabled={items.length === 0}
				className='mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer'
			>
				Proceed to Checkout
				<ArrowRight size={16} />
			</button>

			<div className='mt-6 space-y-3 border-t border-white/10 pt-5'>
				<div className='flex items-center gap-3'>
					<Truck
						size={16}
						className='text-zinc-500'
					/>

					<p className='text-xs text-zinc-500'>
						Free shipping on orders over $100
					</p>
				</div>

				<div className='flex items-center gap-3'>
					<ShieldCheck
						size={16}
						className='text-zinc-500'
					/>

					<p className='text-xs text-zinc-500'>
						Secure checkout and protected payment
					</p>
				</div>
			</div>
		</aside>
	);
};

export default OrderSummary;
