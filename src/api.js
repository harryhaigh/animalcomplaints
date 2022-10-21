import axios from "axios";

// Get 10,000 records
export default {
	getData: () => {
		return axios({
			method: "get",
			url: `https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search?resource_id=87114bf7-3da5-497e-a481-337a5cc197eb&limit=10000`,
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
	getSuburbs: () => {
		return axios({
			method: "get",
			url: `https://postcodeapi.trawg.com/pc/4110`,
			headers: {
				accept: "application/json",
			},
		})
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return `Error: ${error}`;
			});
	},
};
