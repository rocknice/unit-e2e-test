const Mocha = require("mocha")
const mocha = new Mocha({
	reporter: 'mochawesome',
	reporterOption: {
		reportDir: "./docs/mochawesome-report"
	}
});
mocha.addFile("./service/router.spec.js");
mocha.run(function(errlength) {
	if (errlength === 0) {
		process.exit()
	} else {
		console.log('出错长度：', errlength)
		process.exit(1)
	}
})