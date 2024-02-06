const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const { server_locals } = require("../..");
// const userModel = require("../../app/models/user.model");
const userModel = require("../../app/api/user/model/model");
const router = express.Router();
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

router
	.post("/login-submit", async function (req, res) {
		console.log(req.body);
		
		const { email, password } = req.body;
		console.log('pre pass', password);
		let user = await userModel.where({ email: email }).findOne();
		console.log('last pass', user);
		// console.log(user);
		// return ;
		if (user) {
			console.log(user);
			// console.log(user?.role[0]?.title);
			// let title = user?.role[0]?.title;
			let title = user?.username;
			let role = user?.role;
			console.log('title', title);
			let passMatch = await bcrypt.compare(password, user?.password);
			console.log(passMatch);
			// return;
			if (passMatch) {
				// console.log(passMatch);
				let data = {
					username: user.username,
					email: user.email,
					_id: user._id,
					photo_url: '',
					device_id: '',
					genrate_time: '',
				};
				// console.log('data', req?.session?.user);
				req.session.isAuth = true;
				req.session.user = data;
				var token = await jwt.sign(data, '91eb159c-a766-48c3-b143-849170dbceb8');
				res.cookie('token', token)
				// console.log('prev_auth_url',req.session.prev_auth_url);
				let prevUrl = req.session.prev_auth_url;
				console.log('prevurl',prevUrl);
				console.log('token',token);
				// return;
				if (prevUrl) {
					delete req.session.prev_auth_url;
					if (prevUrl != "/favicon.ico") {
						return res.redirect(prevUrl);
					}
				}
				return res.status(201).json({ code: 'password match', message: 'your password match', title: title, role: role });
			}
			return res.status(401).json({ code: 'password does not match', message: 'your crediential does not match' });
		}
		/* if (user.username == user) {
			console.log(user);
			let passMatch = await bcrypt.compare(password, user.password);
			// console.log(passMatch);
			if (passMatch) {
				console.log(passMatch);
				let data = {
					username: user.username,
					email: user.email, 
					_id: user._id,
					photo_url: '',
					device_id: '',
					genrate_time: '', 
				};
				// console.log('data', req?.session?.user);
				req.session.isAuth = true;
				req.session.user = data;
				var token = await jwt.sign( data , '91eb159c-a766-48c3-b143-849170dbceb8');
				res.cookie('token',token)
				// console.log('prev_auth_url',req.session.prev_auth_url);
				let prevUrl = req.session.prev_auth_url;
				if (prevUrl) {
					delete req.session.prev_auth_url;
					if(prevUrl != "/favicon.ico"){
						return res.redirect(prevUrl);
					}
				}
				return res.status(201).json({code: 'password match', message: 'your password match'});
			}
			return res.status(401).json({code: 'password does not match', message: 'your crediential does not match'});
		} */

		// return res.redirect("/login");
		return res.status(401).json({ code: 'user not found', message: 'your crediential does not match' });;
	})
	.post("/signup-submit", async function (req, res) {
		// console.log(req.body);
		const { username, email, password, password_confirmation } = req.body;
		let error = {};
		req.session.old = req.body;
		if (!username || !email || !password || !password_confirmation) {
			if (!username) {
				error.username = "username is required";
			}
			if (!email) {
				error.email = "email is required";
			}
			if (!password) {
				error.password = "password is required";
			}
			if (!password_confirmation) {
				error.password_confirmation = "password_confirmation is required";
			}
			req.session.error = error;
			return res.redirect("/signup");
		}
		if (password != password_confirmation) {
			error.password = "password does not matched";
			req.session.error = error;
			return res.redirect("/signup");
		}

		let user = await new userModel({
			username,
			email,
			password: await bcrypt.hash(password, 13),
		}).save();

		// console.log(user);

		req.session.isAuth = true;
		req.session.user = user;
		let prevUrl = req.session.prev_auth_url;
		if (prevUrl) {
			delete req.session.prev_auth_url;
			return res.redirect(prevUrl);
		}
		res.redirect("/dashboard");
	})
	.use(isAuthMiddleware())
	.post("/logout", function (req, res) {
		console.log("logoutlogo9ut");
		req.session.isAuth = false;
		return res.redirect("/");
	});

module.exports = () => router;
