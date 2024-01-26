// library imports
import axios from "axios";

type UserData = {
	day: string;
	amount: number;
};

export const fetchData = async (): Promise<UserData[]> => {
	try {
		const response = await axios<UserData[]>("data.json");
		return response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
};
