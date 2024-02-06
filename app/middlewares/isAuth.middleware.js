var jwt = require('jsonwebtoken');
const isAuth = async (req, res, next) => {
	// console.log(req.cookies);
	let {token } = req.cookies;
	if(token){
		try {
			let data = await jwt.verify(token,'91eb159c-a766-48c3-b143-849170dbceb8');
			req.session.user = data;
			req.session.isAuth = true
		} catch (error) {
			req.session.isAuth = false
		}
	}

	if (req.session.isAuth) {
		next();
	} else {
		// req.session.prev_auth_url = req.originalUrl;
		if(/^[^.]*$/.test(req.originalUrl)){
			req.session.prev_auth_url = req.originalUrl;
		}
		res.redirect("/login");
	}
};

module.exports = () => isAuth;
