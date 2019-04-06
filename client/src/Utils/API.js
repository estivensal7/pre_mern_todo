import axios from "axios";

export default {
	// Gets all items
	getItems: function() {
		return axios.get("/api/items");
	},
	// Gets the item with the given id
	getItem: function(id) {
		return axios.get("/api/items/?_id=" + id);
	},
	// Deletes the item with the given id
	deleteItem: function(id) {
		return axios.delete("/api/items/?_id=" + id);
	},
	// Saves an item to the database
	saveItem: function(itemData) {
		return axios.post("/api/items", itemData);
	}

	// // Gets all users with given name
	// checkLogin: function(name) {
	// 	return axios.get("/api/users/?name=" + name);
	// },
	// // Creates new user
	// createUser: function(userData) {
	// 	return axios.post("/api/users/", userData);
	// }
};
