import axios from "axios";

// Get 10,000 records
export default {
	getData: () => {
		return axios({
			method: "get",
			url: `https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search?resource_id=7b00dd2f-a73a-4674-8d50-4e77bded2dd4&limit=10000`,
			headers: {
				accept: "application/json",
			},
		})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return `Error: ${error}`;
			});
	},
};
