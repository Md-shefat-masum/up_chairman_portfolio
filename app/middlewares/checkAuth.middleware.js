var jwt = require('jsonwebtoken');
module.exports = async (server, req) => {
	let {token } = req.cookies;
	server.locals.checkIsAuth = false;
	server.locals.user = {}
	if(token){
		try {
			let decode = await jwt.verify(token,'91eb159c-a766-48c3-b143-849170dbceb8');
			// console.log(decode);
			server.locals.checkIsAuth = true;
			server.locals.user = decode;
		} catch (error) {
			server.locals.checkIsAuth = false;
			server.locals.user = {}
			// console.log("wrong token");
		}
	}
}
