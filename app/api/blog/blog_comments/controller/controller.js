const all = require("../model/all");
const _delete = require("../model/delete");
const destroy = require("../model/destroy");
const restore = require("../model/restore");
const get = require("../model/get");
const store = require("../model/store");
const update = require("../model/update");
// const all_search = require("../model/all_search");

const controllers = {
	all: async function (req, res) {
		const data = await all(req.query);
		return res.json(data);
	},
	// allSearch: async function (req, res) {
	// 	const data = await all_search();
	// 	return res.json(data);
	// },
	get: async function (req, res) {
		const data = await get(req.params.id);
		return res.json(data);
	},
	store: async function (req, res) {
		console.log('comment req body',req.body);
		const data = await store(req.body);

		if(data.status === "success"){
			return res.status(data.status_code).json(data);
		}else{
			return res.status(data.status_code).json(data);
		}
	},
	update: async function (req, res) {
		const data = await update( req.body);
		if(data.status === "success"){
			return res.status(data.status_code).json(data);
		}else{
			return res.status(data.status_code).json(data);
		}
	},
	delete: async function (req, res) {
		const data = await _delete(req.body);
		return res.json(data);
	},
	restore: async function (req, res) {
		const data = await restore(req.body);
		return res.json(data);
	},
	destroy: async function (req, res) {
		const data = await destroy(req.body);
		return res.json(data);
	},
};

module.exports = controllers;
