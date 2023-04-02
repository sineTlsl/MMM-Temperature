
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets")
const NodeHelper = require("node_helper");
const mysql = require('mysql');

const db = mysql.createConnection({
    // 개인 정보
});

module.exports = NodeHelper.create({
    start: function() {
		console.log("Starting node helper: " + this.name);
		db.connect();
        // this.countDown = 10000000
    },

    // getDom: function () {
        // var wrapper = document.createElement("div")

        // var element = document.createElement("div")
        // element.className = "myContent"
        // element.innerHTML = "Hello, " + this.config.foo

        // var subElement = document.createElement("p")
        // subElement.innerHTML = "Count(1초마다 업데이트):  " + this.count
        // subElement.id = "COUNT"

        // wrapper.appendChild(element)
        // wrapper.appendChild(subElement)

        // return wrapper
    // },

/*     notificationReceived: function(notification, payload, sender) {
        switch(notification) {
            case "DOM_OBJECTS_CREATED":
                var timer = setInterval(()=>{
                    this.sendSocketNotification("DO_YOUR_JOB", this.count)
                    this.count++
                }, 1000)
                break
        }
    }, */

    socketNotificationReceived: function (notification, payload) {
        switch(notification) {
            case "GET_WEATHER":
                let self = this;
		self.getOutData(payload);
		self.getHomeData(payload);
		self.getYesterdayOut(payload);
		self.getYesterdayHome(payload);
		break;
        }
    },

    getOutData: async function (payload) {
	var sampleTimestamp = Date.now();
	var date = new Date(sampleTimestamp);
	var year = date.getFullYear().toString().slice(-2);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);

	var ymd = year + "-" + month + "-" + day;
	var query = "select temper from temperature_out where nowDay=" + "'" + ymd  + "'" + " order by temRank DESC";

	let self = this;
	db.query(query, function (error, result) {
		if (error) {
			console.log(error);
			self.sendSocketNotification("WEATHER_DATA_ERROR", result);
		}
		else {
			self.sendSocketNotification("WEATHER_DATA_OUT", result);
		}
	});
    },

    getHomeData: async function (payload) {
	var sampleTimestamp = Date.now();
	var date = new Date(sampleTimestamp);
	var year = date.getFullYear().toString().slice(-2);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);

	var ymd = year + "-" + month + "-" + day;
	var query = "select temper from temperature_home where nowDay=" + "'" + ymd  + "'" + " order by temRank DESC";

	let self = this;
	db.query(query, function (error, result) {
		if (error) {
			console.log(error);
			self.sendSocketNotification("WEATHER_DATA_ERROR", result);
		}
		else {
			self.sendSocketNotification("WEATHER_DATA_HOME", result);
		}
	});
    },

    getYesterdayOut: async function (payload) {
	var sampleTimestamp = Date.now();
	var date = new Date(sampleTimestamp);
	var year = date.getFullYear().toString().slice(-2);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var yesterday = new Date(date.setDate(date.getDate() - 1)).toString();
	var pos = yesterday.split("GMT");
	yesterday = pos[0].substr(-17);
	yesterday = yesterday.substr(0,2);
	var hours = ('0' + date.getHours()).slice(-2).toString();

	var ymd = year + "-" + month + "-" + yesterday;
	var query = "select temper from temperature_out where nowDay=" + "'" + ymd  + "'" + " AND nowTime LIKE " + "'" + hours + ":%'";

	let self = this;
	db.query(query, function (error, result) {
		if (error) {
			console.log(error);
			self.sendSocketNotification("WEATHER_DATA_ERROR", result);
		}
		else {
			self.sendSocketNotification("YESTERDAY_OUT", result);
		}
	});
    },

    getYesterdayHome: async function (payload) {
	var sampleTimestamp = Date.now();
	var date = new Date(sampleTimestamp);
	var year = date.getFullYear().toString().slice(-2);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var yesterday = new Date(date.setDate(date.getDate() - 1)).toString();
	var pos = yesterday.split("GMT");
	yesterday = pos[0].substr(-17);
	yesterday = yesterday.substr(0,2);
	var hours = ('0' + date.getHours()).slice(-2).toString();

	var ymd = year + "-" + month + "-" + yesterday;
	var query = "select temper from temperature_home where nowDay=" + "'" + ymd  + "'" + " AND nowTime LIKE " + "'" + hours + ":%'";

	let self = this;
	db.query(query, function (error, result) {
		if (error) {
			console.log(error);
			self.sendSocketNotification("WEATHER_DATA_ERROR", result);
		}
		else {
			self.sendSocketNotification("YESTERDAY_HOME", result);
		}
	});
    },

    stop: function() {
	console.log("Shutting down DataBase");
	db.end();
    },
});
