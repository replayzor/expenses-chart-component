export function Footer() {
	return (
		<footer className="flex flex-row items-end justify-between pb-2">
			<div className="py-6 pl-4">
				<h2 className="font-normal text-neutral-mediumBrown">
					Total this month
				</h2>
				<p className="text-3xl font-bold">$478.33</p>
			</div>
			<div className="flex flex-col pb-4 pr-4">
				<p className="ml-auto font-bold text-neutral-darkBrown">+2.4%</p>
				<p className="text-neutral-mediumBrown">from last month</p>
			</div>
		</footer>
	);
}
