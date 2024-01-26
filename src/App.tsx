import { useQuery } from "react-query";
import { fetchData } from "./utils/api";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function App() {
	const { data, isLoading } = useQuery({
		queryKey: "data",
		queryFn: async () => {
			// Simulate a 2s delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			return fetchData();
		},
	});

	const chartData = {
		labels: data?.map((item) => item.day),
		datasets: [
			{
				label: "Spent",
				data: data?.map((item) => item.amount),
				backgroundColor: "hsl(10, 79%, 65%)",
				hoverBackgroundColor: "hsl(186, 34%, 60%)",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<main className="flex flex-col items-center justify-center h-screen font-DM bg-neutral-cream">
			{isLoading ? (
				<div className="border-2 size-20 text-primary-cyan border-primary-softRed animate-spin"></div>
			) : (
				<div className="w-full max-w-[500px]">
					{/* Header */}
					<header className="flex items-center justify-between py-5 px-6 bg-primary-softRed rounded-xl w-[90%] mx-auto">
						<div className="flex flex-col gap-1">
							<h1 className="text-neutral-veryPaleOrange ">My balance</h1>
							<p className="text-2xl font-bold text-white">$921.48</p>
						</div>
						<img src="/images/logo.svg" alt="" className="h-10" />
					</header>

					{/* Main content */}
					<section className="w-[90%] mx-auto rounded-xl bg-white mt-4">
						<h1 className="pt-6 pb-10 pl-4 text-[26px] font-bold text-neutral-darkBrown">
							Spending - Last 7 days
						</h1>
						<div className="pb-4">
							<Bar data={chartData} options={options} />
						</div>
						<div className="w-[90%] m-auto border border-neutral-cream"></div>

						{/* Footer */}
						<footer className="flex flex-row items-end justify-between pb-2">
							<div className="py-6 pl-4">
								<h2 className="font-normal text-neutral-mediumBrown">
									Total this month
								</h2>
								<p className="text-3xl font-bold">$478.33</p>
							</div>
							<div className="flex flex-col pb-4 pr-4">
								<p className="ml-auto font-bold text-neutral-darkBrown">
									+2.4%
								</p>
								<p className="text-neutral-mediumBrown">from last month</p>
							</div>
						</footer>
					</section>

					{/* Bottom Footer */}
					<div className="text-center text-[11px]">
						Challenge by{" "}
						<a
							className="text-blue-500"
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							rel="noreferrer"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							className="text-blue-500"
							href="https://github.com/replayzor"
							target="_blank"
							rel="noreferrer"
						>
							Ionut Oltean
						</a>
						.
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
