const fs = require('fs').promises;

module.exports = async (filename, target, replace) =>{
	const data = await fs.readFile(filename, 'utf8');
	const result = data.replace(target, replace);
	await fs.writeFile(filename, result, 'utf8');
}