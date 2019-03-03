const axios = require("axios")
describe("node接口测试", function() {
	it("test接口测试", function(done) {
		axios.get("")
			.then(function(response) {
				if (response.data.result === "hello world") {
					done()
				} else {
					done(new Error("请求接口数据出错"))
				}
			})
			.catch(function(error) {
				done(error)
			})
	})
})