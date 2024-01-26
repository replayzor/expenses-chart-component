export function Header() {
	return (
		<header className="flex items-center justify-between py-5 px-6 bg-primary-softRed rounded-xl w-[90%] mx-auto">
			<div className="flex flex-col gap-1">
				<h1 className="text-neutral-veryPaleOrange ">My balance</h1>
				<p className="text-2xl font-bold text-white">$921.48</p>
			</div>
			<img src="/images/logo.svg" alt="" className="h-10" />
		</header>
	);
}
