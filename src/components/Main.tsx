// library imports
import { Bar } from "react-chartjs-2";

export function Main({ chartData, options }) {
	return (
		<>
			{" "}
			<h1 className="pt-6 pb-10 pl-4 text-[26px] font-bold text-neutral-darkBrown">
				Spending - Last 7 days
			</h1>
			<div className="pb-4">
				<Bar data={chartData} options={options} />
			</div>
		</>
	);
}
