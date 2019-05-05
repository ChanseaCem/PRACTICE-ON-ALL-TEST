//更新月告警时间统计
var errtMonthData = [];
var merrt_data = data.ThreeMonth.ErrorTime;
		//console.log(merrt_data);
		if(merrt_data) {
			merrt_data.sort(compare('ErrTime'));
		}
		for(var key in merrt_data) {
			key = merrt_data.length - key - 1;
			if(merrt_data[key] && typeof merrt_data[key] == 'object') {
				errtMonthData.push({
					"country": merrt_data[key].Device_Id,
					"value": merrt_data[key].ErrTime
					// "timeValue":intToTime(merrt_data[key].ErrTime)
				})
			}
		}
		_this.loadMonthErrTimeChart(errtMonthData);
		//更新月告警次数统计
		var errcMonthData = [];
		var merrc_data = data.ThreeMonth.Alarm;
		for(var key in merrc_data) {
			if(merrc_data[key] && typeof merrc_data[key] == 'object') {
				errcMonthData.push({
					"country": merrc_data[key].AlarmMsg,
					"value": merrc_data[key].AlarmCount
				})
			}
		}

		{
			country: "JT04"
			value: 307761
		}