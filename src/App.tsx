// library imports
import { useQuery } from "react-query";
import { Chart, registerables } from "chart.js";

// utils imports
import { fetchData } from "./utils/api";

// components
import Loading from "./components/Loading";
import { BottomFooter } from "./components/BottomFooter";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
				<Loading />
			) : (
				<div className="w-full max-w-[500px]">
					{/* Header */}
					<Header />

					{/* Main content */}
					<section className="w-[90%] mx-auto rounded-xl bg-white mt-4">
						<Main chartData={chartData} options={options} />
						<div className="w-[90%] m-auto border border-neutral-cream"></div>

						{/* Footer */}
						<Footer />
					</section>

					{/* Bottom Footer */}
					<BottomFooter />
				</div>
			)}
		</main>
	);
}

export default App;
