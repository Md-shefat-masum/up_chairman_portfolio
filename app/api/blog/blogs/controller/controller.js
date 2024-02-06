const all = require("../model/all");
const _delete = require("../model/delete");
const destroy = require("../model/destroy");
const restore = require("../model/restore");
const get = require("../model/get");
const store = require("../model/store");
const update = require("../model/update");
const blogModel = require("../model/model")
// const blogModel = require("../../models/blog.model");
// const all_search = require("../model/all_search");

const controllers = {
	all: async function (req, res) {
		const data = await all(req.query);
		return res.json(data);
	},
	check_unique_url: async function (req, res) {
		let url = req.body.url;
		console.log('url', url);
		const model_data = await blogModel.findOne().where({ url: url });
		
		console.log('model_data',model_data?.length);
		if (model_data){
			if(req.body.id && req.body.id == model_data.id){
				return res.json(false)
			}
			return res.json(true);
		}
		else{
			return res.json(false)
		}
	},
	get: async function (req, res) {
		const data = await get(req.params.id);
		return res.json(data);
	},
	store: async function (req, res) {
		const data = await store(req);
		if(data.status === "success"){
			return res.status(data.status_code).json(data);
		}else{
			return res.status(data.status_code).json(data);
		}
	},
	update: async function (req, res) {
		const data = await update( req);
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
