//OEE数据，班次柱状图（时段产量数据），工序班次表，状态条百分比统计， 错误信息top10饼图，错误信息top5表，机台机器数统计
{
	"AllStatus": [{
		"code": "JT01",
		"state": 2,
		"info": "加工中，模式：自动模式"
	}, {
		"code": "JT01",
		"state": 2,
		"info": "加工中，模式：自动模式"
	}],
	"ErrCout": [{
		"alarmcount": 106,
		"alarmmsg": "红灯告警：G3011.3：机床加工中真空负压不足",
	}, {
		"alarmcount": 106,
		"alarmmsg": "红灯告警：G3011.3：机床加工中真空负压不足",
	}],
	"Errtime_Top10": [{
		"device_id": "JT05",
		"errtime": "7660",
	}],
	"OEE": {
		"Ar": "0.293",
		"Pr": "0.980",
		"Qr": "0.971",
		"TotalPro": 148,
		"oee": "0.279"
	},
	"OperateTimeRate": [],
	"ProNum": [{
		AMacNum: 5,
		AProNum: 148,
		DT_Update: "2019-04-13 16:17:44",
		PMacNum: 5,
		PProNum: 613,
		ProName: "C12KN",
		ProcessCode: "C12KN-GX",
		ProcessName: "C12KN-GX",
		SProNum: 122,
		ShiftName: "白班",
		TechnicsName: "C12KN-GY",
		YRate: 0.2414
	}, {
		AMacNum: 0,
		AProNum: 0,
		DT_Update: "2019-04-13 16:17:44",
		PMacNum: 5,
		PProNum: 613,
		ProName: "C12KN",
		ProcessCode: "C12KN-GX",
		ProcessName: "C12KN-GX",
		SProNum: 122,
		ShiftName: "晚班",
		TechnicsName: "C12KN-GY",
		YRate: 0
	}],
	"SeProNum": [{
		CTime: "09-10",
		Num: 41,
		ProName: "C12KN",
		ProcessCode: "C12KN-GX",
		ProcessName: "C12KN-GX",
		ShiftCode: "001"
	}, {
		CTime: "15-16",
		Num: 76,
		ProName: "C12KN",
		ProcessCode: "C12KN-GX",
		ProcessName: "C12KN-GX",
		ShiftCode: "001"
	}],
	"Time": {
		alarmtime: 0.117,
		closetime: 0,
		idletime: 0,
		runtime: 0.395,
		stoptime: 0.488,
		warmuptime: 0
	},
	"mac_number": {
		mac_abnormal: 0,
		mac_idle: 0,
		mac_noworking: 0,
		mac_prepare: 0,
		mac_total: 5,
		mac_warmup: 0,
		mac_warning: 0,
		mac_working: 5
	}
}

//设备运转运转状态
{
	"mac_code": "R001", //设备编号 string类型 
	"cur_status": 1, //当前状态，int类型, -1未连接状态，0采集系统启动，2加工状态，1待机状态，3告警状态，4调试状态，21产量计数增1
	"pre_status": 2, //上次状态，int类型, -1未连接状态，0采集系统启动，2加工状态，1待机状态，3告警状态，4调试状态，21产量计数增1
	"dur_time": 120.5, //上次状态持续时间 (单位：秒)
	"pub_time": 1529979162, //信息推送时间戳，long类型，10位的时间戳
}

//单机产能数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		CreateTime: "2019-04-15T09:29:16",
		CycleID: 2,
		MachineCode: "JT01",
		ProNum: 4,
		ShiftName: "白班",
		StatsDate: "2019-04-15T00:00:00"
	}
}

//数据统计
//加载统计数据
{
	"ThreeMonth": {
		"Efficiency": {
			"One": {
				"End_date": "2019-01-31",
				"Oee": 0.547,
				"Operate_Time_Rate": 0.52,
				"Performance_Rate": 1.086,
				"Pro_Num": 16745,
				"Quality_Rate": 0.969,
				"Start_date": "2019-01-01"
			},
			"Two": {
				"End_date": "2019-02-28",
				"Oee": 0,
				"Operate_Time_Rate": 0.006,
				"Performance_Rate": 0,
				"Pro_Num": 0,
				"Quality_Rate": 1,
				"Start_date": "2019-02-01"
			},
			"Three": {
				"End_date": "2019-03-31",
				"Oee": 0.04,
				"Operate_Time_Rate": 0.178,
				"Performance_Rate": 0.227,
				"Pro_Num": 1583,
				"Quality_Rate": 1,
				"Start_date": "2019-03-01"
			}
		},
		"Status": {
			"One": {
				"Adjust_Time_Rate": 2167256,
				"End_date": "2019-01-31",
				"Fault_Time_Rate": 274703,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 4432613,
				"Start_date": "2019-01-01",
				"WarmUp_Time_Rate": 3853
			},
			"Two": {
				"Adjust_Time_Rate": 337373,
				"End_date": "2019-02-28",
				"Fault_Time_Rate": 385239,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 6556,
				"Start_date": "2019-02-01",
				"WarmUp_Time_Rate": 0
			},
			"Three": {
				"Adjust_Time_Rate": 7687030,
				"End_date": "2019-03-31",
				"Fault_Time_Rate": 543505,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 2178013,
				"Start_date": "2019-03-01",
				"WarmUp_Time_Rate": 246807
			}
		},
		"Alarm": [{
			"AlarmCount": 490,
			"AlarmMsg": "紧急停止状态"
		}, {
			"AlarmCount": 172,
			"AlarmMsg": "红灯告警:"
		}, {
			"AlarmCount": 168,
			"AlarmMsg": "急停状态"
		}, {
			"AlarmCount": 159,
			"AlarmMsg": "红灯告警:G3011.3:机床加工中真空负压不足      "
		}, {
			"AlarmCount": 127,
			"AlarmMsg": "紧急停止"
		}, {
			"AlarmCount": 113,
			"AlarmMsg": "红灯告警:参数写入开关处于打开"
		}, {
			"AlarmCount": 90,
			"AlarmMsg": "红灯告警:G3016.6 夹具二未松开到位"
		}, {
			"AlarmCount": 79,
			"AlarmMsg": "红灯告警:G3016.12:主轴速度未到达，禁止G01移动"
		}, {
			"AlarmCount": 79,
			"AlarmMsg": "红灯告警:(X)负向超程 (软超程1)"
		}, {
			"AlarmCount": 76,
			"AlarmMsg": "红灯告警:G3011.10:真空报警！"
		}],
		"ErrorTime": [{
			"Device_Id": "JT02",
			"ErrTime": 111332
		}, {
			"Device_Id": "JT04",
			"ErrTime": 307761
		}, {
			"Device_Id": "JT05",
			"ErrTime": 18656
		}, {
			"Device_Id": "JT03",
			"ErrTime": 58751
		}, {
			"Device_Id": "JT01",
			"ErrTime": 46995
		}]
	},
	"ThreeWeek": {
		"Efficiency": {
			"One": {
				"End_date": "2019-04-14",
				"Oee": 0.17,
				"Operate_Time_Rate": 0.17,
				"Performance_Rate": 1.011,
				"Pro_Num": 1606,
				"Quality_Rate": 0.991,
				"Start_date": "2019-04-08"
			},
			"Two": {
				"End_date": "2019-04-21",
				"Oee": 0.054,
				"Operate_Time_Rate": 0.185,
				"Performance_Rate": 0.291,
				"Pro_Num": 504,
				"Quality_Rate": 0.997,
				"Start_date": "2019-04-15"
			},
			"Three": {
				"End_date": "2019-04-28",
				"Oee": 0.028,
				"Operate_Time_Rate": 0.033,
				"Performance_Rate": 0.857,
				"Pro_Num": 263,
				"Quality_Rate": 0.997,
				"Start_date": "2019-04-22"
			}
		},
		"Status": {
			"One": {
				"Adjust_Time_Rate": 921901,
				"End_date": "2019-04-14",
				"Fault_Time_Rate": 38901,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 512957,
				"Start_date": "2019-04-08",
				"WarmUp_Time_Rate": 0
			},
			"Two": {
				"Adjust_Time_Rate": 1882391,
				"End_date": "2019-04-21",
				"Fault_Time_Rate": 114400,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 558739,
				"Start_date": "2019-04-15",
				"WarmUp_Time_Rate": 0
			},
			"Three": {
				"Adjust_Time_Rate": 2053362,
				"End_date": "2019-04-28",
				"Fault_Time_Rate": 400380,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 99134,
				"Start_date": "2019-04-22",
				"WarmUp_Time_Rate": 0
			}
		},
		"Alarm": [{
			"AlarmCount": 132,
			"AlarmMsg": "紧急停止状态"
		}, {
			"AlarmCount": 85,
			"AlarmMsg": "红灯告警:G  代码不正确"
		}, {
			"AlarmCount": 65,
			"AlarmMsg": "红灯告警:G3011.3:机床加工中真空负压不足      "
		}, {
			"AlarmCount": 50,
			"AlarmMsg": "红灯告警:目标点在负限位外"
		}, {
			"AlarmCount": 49,
			"AlarmMsg": "红灯告警:目标点在正限位外"
		}, {
			"AlarmCount": 42,
			"AlarmMsg": "气压异常不能转动主轴"
		}, {
			"AlarmCount": 30,
			"AlarmMsg": "红灯告警:有刀具寿命已完"
		}, {
			"AlarmCount": 29,
			"AlarmMsg": "红灯告警:G3014.3:油冷机报警(X0.4)                 "
		}, {
			"AlarmCount": 27,
			"AlarmMsg": "红灯告警:G3016.4 夹具二未夹紧到位"
		}, {
			"AlarmCount": 24,
			"AlarmMsg": "红灯告警:(X)负向超程 (软超程1)"
		}],
		"ErrorTime": [{
			"Device_Id": "JT03",
			"ErrTime": 10224
		}, {
			"Device_Id": "JT01",
			"ErrTime": 8717
		}, {
			"Device_Id": "JT02",
			"ErrTime": 96198
		}, {
			"Device_Id": "JT04",
			"ErrTime": 394
		}, {
			"Device_Id": "JT05",
			"ErrTime": 787
		}]
	},
	"Day": {
		"Efficiency": {
			"One": {
				"End_date": "2019-04-23",
				"Oee": 0.087,
				"Operate_Time_Rate": 0.096,
				"Performance_Rate": 0.926,
				"Pro_Num": 119,
				"Quality_Rate": 0.98,
				"Start_date": "2019-04-23"
			},
			"Two": {
				"End_date": "2019-04-24",
				"Oee": 0.075,
				"Operate_Time_Rate": 0.083,
				"Performance_Rate": 0.902,
				"Pro_Num": 100,
				"Quality_Rate": 1,
				"Start_date": "2019-04-24"
			},
			"Three": {
				"End_date": "2019-04-25",
				"Oee": 0.022,
				"Operate_Time_Rate": 0.026,
				"Performance_Rate": 0.832,
				"Pro_Num": 29,
				"Quality_Rate": 1,
				"Start_date": "2019-04-25"
			},
			"Four": {
				"End_date": "2019-04-26",
				"Oee": 0.01,
				"Operate_Time_Rate": 0.021,
				"Performance_Rate": 0.495,
				"Pro_Num": 14,
				"Quality_Rate": 1,
				"Start_date": "2019-04-26"
			},
			"Five": {
				"End_date": "2019-04-27",
				"Oee": 0,
				"Operate_Time_Rate": 0,
				"Performance_Rate": 0,
				"Pro_Num": 0,
				"Quality_Rate": 1,
				"Start_date": "2019-04-27"
			},
			"Six": {
				"End_date": "2019-04-28",
				"Oee": 0,
				"Operate_Time_Rate": 0,
				"Performance_Rate": 0,
				"Pro_Num": 0,
				"Quality_Rate": 1,
				"Start_date": "2019-04-28"
			},
			"Seven": {
				"End_date": "2019-04-29",
				"Oee": 0.016,
				"Operate_Time_Rate": 0.041,
				"Performance_Rate": 0.4,
				"Pro_Num": 22,
				"Quality_Rate": 1,
				"Start_date": "2019-04-29"
			}
		},
		"Status": {
			"One": {
				"Adjust_Time_Rate": 204488,
				"End_date": "2019-04-23",
				"Fault_Time_Rate": 52207,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 41500,
				"Start_date": "2019-04-23",
				"WarmUp_Time_Rate": 0
			},
			"Two": {
				"Adjust_Time_Rate": 301596,
				"End_date": "2019-04-24",
				"Fault_Time_Rate": 7009,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 35808,
				"Start_date": "2019-04-24",
				"WarmUp_Time_Rate": 0
			},
			"Three": {
				"Adjust_Time_Rate": 324646,
				"End_date": "2019-04-25",
				"Fault_Time_Rate": 557,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 11254,
				"Start_date": "2019-04-25",
				"WarmUp_Time_Rate": 0
			},
			"Four": {
				"Adjust_Time_Rate": 380769,
				"End_date": "2019-04-26",
				"Fault_Time_Rate": 1079,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 9139,
				"Start_date": "2019-04-26",
				"WarmUp_Time_Rate": 0
			},
			"Five": {
				"Adjust_Time_Rate": 432000,
				"End_date": "2019-04-27",
				"Fault_Time_Rate": 0,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 0,
				"Start_date": "2019-04-27",
				"WarmUp_Time_Rate": 0
			},
			"Six": {
				"Adjust_Time_Rate": 359599,
				"End_date": "2019-04-28",
				"Fault_Time_Rate": 72960,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 0,
				"Start_date": "2019-04-28",
				"WarmUp_Time_Rate": 0
			},
			"Seven": {
				"Adjust_Time_Rate": 333678,
				"End_date": "2019-04-29",
				"Fault_Time_Rate": 8396,
				"Idle_Time_Rate": 0,
				"Real_Process_Time_Rate": 17751,
				"Start_date": "2019-04-29",
				"WarmUp_Time_Rate": 0
			}
		},
		"Alarm": [{
			"AlarmCount": 16,
			"AlarmMsg": "红灯告警:G3011.3:机床加工中真空负压不足      "
		}, {
			"AlarmCount": 8,
			"AlarmMsg": "红灯告警:G3011.11:气压报警(X0.7)     "
		}, {
			"AlarmCount": 6,
			"AlarmMsg": "红灯告警:"
		}, {
			"AlarmCount": 5,
			"AlarmMsg": "告警:1015: 气压报警!"
		}, {
			"AlarmCount": 2,
			"AlarmMsg": "告警:4:程序的开头无地址"
		}, {
			"AlarmCount": 2,
			"AlarmMsg": "G3011.3:机床加工中真空负压不足      "
		}, {
			"AlarmCount": 1,
			"AlarmMsg": "G3011.11:气压报警(X0.7)     "
		}],
		"ErrorTime": [{
			"Device_Id": "JT04",
			"ErrTime": 19
		}, {
			"Device_Id": "JT05",
			"ErrTime": 144
		}, {
			"Device_Id": "JT03",
			"ErrTime": 4168
		}, {
			"Device_Id": "JT01",
			"ErrTime": 4065
		}]
	}
}
{
	"Day": {
		"Alarm": [],
		"Efficiency": {
			"one": {},
			"two": {}
			...
		},
		"ErrorTime": [],
		"Status": {
			"one": {}
			...
		}
	},
	"ThreeMonth": {
		"Alarm": [],
		"Efficiency": {
			"one": {},
			"two": {},
			"three": {}
		},
		"ErrorTime": [],
		"Status": {
			"one": {},
			"two": {},
			"three": {}
		}
	}
	"ThreeWeek": {
		"Alarm": [],
		"Efficiency": {
			"one": {},
			"two": {},
			"three": {}
		},
		"ErrorTime": [],
		"Status": {
			"one": {},
			"two": {},
			"three": {}
		}
	}
}

//品质数据--工序能力直方图
{
	"IsSuccess": true,
	"Extensions": "",
	"Value": [{
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.592,
		"DetectionTime": "2018/11/28 16:35:34",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.581,
		"DetectionTime": "2018/11/28 16:34:29",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.591,
		"DetectionTime": "2018/11/28 16:31:03",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.589,
		"DetectionTime": "2018/11/28 16:29:10",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.586,
		"DetectionTime": "2018/9/21 15:03:36",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.582,
		"DetectionTime": "2018/9/21 14:51:02",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.577,
		"DetectionTime": "2018/9/21 14:00:06",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.575,
		"DetectionTime": "2018/9/21 13:58:39",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.58,
		"DetectionTime": "2018/9/19 17:02:10",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.581,
		"DetectionTime": "2018/9/19 16:40:07",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.599,
		"DetectionTime": "2018/9/15 10:33:40",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.5531,
		"DetectionTime": "2018/9/14 18:57:48",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.5838,
		"DetectionTime": "2018/9/14 16:29:29",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.5831,
		"DetectionTime": "2018/9/14 16:27:55",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.5815,
		"DetectionTime": "2018/9/14 16:25:16",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.6,
		"DetectionTime": "2018/9/6 16:56:11",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.573,
		"DetectionTime": "2018/8/8 10:15:40",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.574,
		"DetectionTime": "2018/8/7 17:50:54",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.657,
		"DetectionTime": "2018/7/21 10:44:26",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.61,
		"DetectionTime": "2018/7/17 10:35:13",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.58,
		"DetectionTime": "2018/7/14 16:49:43",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.586,
		"DetectionTime": "2018/7/14 15:46:10",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.581,
		"DetectionTime": "2018/7/10 10:35:15",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.58,
		"DetectionTime": "2018/7/10 10:11:47",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.59,
		"DetectionTime": "2018/7/10 10:05:48",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.555,
		"DetectionTime": "2018/7/6 18:13:33",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.552,
		"DetectionTime": "2018/7/6 15:43:39",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.554,
		"DetectionTime": "2018/7/6 14:49:46",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.564,
		"DetectionTime": "2018/7/6 14:47:58",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.564,
		"DetectionTime": "2018/7/5 17:10:38",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.556,
		"DetectionTime": "2018/7/5 14:48:54",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.558,
		"DetectionTime": "2018/7/5 14:29:14",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.554,
		"DetectionTime": "2018/7/4 11:17:26",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.545,
		"DetectionTime": "2018/7/4 11:02:17",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.624,
		"DetectionTime": "2018/7/4 10:49:08",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.625,
		"DetectionTime": "2018/7/4 10:46:59",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.575,
		"DetectionTime": "2018/7/4 10:09:05",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.614,
		"DetectionTime": "2018/6/30 11:38:09",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.614,
		"DetectionTime": "2018/6/30 11:10:58",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.595,
		"DetectionTime": "2018/6/30 11:03:28",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.541,
		"DetectionTime": "2018/6/30 10:25:28",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.577,
		"DetectionTime": "2018/6/30 10:11:08",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.578,
		"DetectionTime": "2018/6/30 9:45:05",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.557,
		"DetectionTime": "2018/6/30 9:16:48",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.573,
		"DetectionTime": "2018/6/29 15:55:45",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.554,
		"DetectionTime": "2018/6/29 15:53:04",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.639,
		"DetectionTime": "2018/6/29 10:49:19",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.622,
		"DetectionTime": "2018/6/29 10:47:15",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.546,
		"DetectionTime": "2018/6/29 9:20:43",
		"CompValue": 0
	}, {
		"CECode": "C001",
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64,
		"LowerLimit": 10.54,
		"DetectionValue": 10.615,
		"DetectionTime": "2018/6/23 17:44:02",
		"CompValue": 0
	}]
};

//统计数据-效率统计数据
[{

		ar: 16,
		month: "1月",
		oee: 8,
		output: 8256,
		pr: 60,
		qr: 91
	},
	{
		ar: 24,
		month: "2月",
		oee: 1,
		output: 1107,
		pr: 5,
		qr: 91
	}
]

//设备数据
{
	"AbsoluteCoordinateX": 53.5,
	"AbsoluteCoordinateY": 2.5,
	"AbsoluteCoordinateZ": 48.723,
	"AllStatus": [{
		"State": {
			"code": "C1",
			"info": "加工中,模式:MEMory",
			"state": 2
		}
	}],
	"AverageTime": "546.894118",
	"Coolant": false,
	"CoolantOverLoad": false,
	"CreateTime": "2019-4-17 8:44:29",
	"CurToolNum": 3,
	"CuttingTime": 19096708,
	"DoorLock": false,
	"EmergencyStop": false,
	"Feedrate": 6000,
	"FileProgram_Main": "O4000",
	"FileProgram_Running": "O9020",
	"FourthAxisLock": false,
	"HolderOne": false,
	"HolderTwo": false,
	"IndicatorLight": 1,
	"JV": 0,
	"LastProcessTime": "558.000000",
	"Lube": false,
	"LubeOverLoad": false,
	"MachineCode": "R142",
	"MachineCoordinateX": 250.069,
	"MachineCoordinateY": -132.378,
	"MachineCoordinateZ": 19,
	"MachineFactory": "华中控制器",
	"MachineID": "b0f4cba7-fa41-11e6-a812-109836a61f2b",
	"Mode": "MEMory",
	"NUMOFTOOL": 0,
	"NumberProgram_Main": 4000,
	"NumberProgram_Running": 9020,
	"Old_StatusID": 1,
	"Old_StatusMsg": "待料中,模式:MEMory",
	"OperatingTime": 7618836,
	"OperatingTimePreProduct": 0,
	"PowerOnTime": 43373040,
	"ProductNum": 53401,
	"ROV": 100,
	"RelativeCoordinateX": 50.669,
	"RelativeCoordinateY": 71.022,
	"RelativeCoordinateZ": 148.842,
	"Renishaw": false,
	"SPOV": 100,
	"SpLoad": 207,
	"SpindleCoolantOverLoad": false,
	"SpindleSpeed": 0,
	"StatusID": 2,
	"StatusMsg": "加工中,模式:MEMory",
	"SvloadX": 4,
	"SvloadY": 3,
	"SvloadZ": 25,
	"VacuumOutput": false,
	"VacuumPluseOutput": false,
	"WorkLight": false,
	"alarmLast": "",
	"alarmLastTime": "",
	"historyWarningTop3": [{
		"StatusMsg": "Default",
		"WarningCount": 404
	}],
	"quality": "97.60",
	"statusbar": [{
		"Msg": "",
		"Prog_M": "",
		"Prog_S": "",
		"ST": "0:7:56",
		"Status": "2",
		"Time": "560.0"
	}]
}

//获取产品列表
[{
	"Code": "HM31",
	"ID": "f0421bf8-7270-4f12-ba1d-facfbf09b768",
	"Name": "HM31手机壳"
}]

//工艺相关信息
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		"FileList": [{
			"DrawingNumber": "HM31TZ01",
			"FileName": "actual_rixuN.jpg.png",
			"FilePath": "/UploadFile/ProFile/20190320/154041_actual_rixuN.png",
			"FileType": 3
		}],
		"ProCode": "HM31",
		"ProName": "HM31手机壳",
		"ProgramList": [{
			"FileContentStr": null,
			"ProgamName": "O1111.NC",
			"ProgamVer": "V1.0",
			"ProgarmCode": "1111"
		}],
		"StaffList": [{
			"StaffCode": null,
			"StaffName": "李登祥",
			"StaffType": 3
		}]
	}
}

//工艺对应关系
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"AverageCPK": 0,
		"CircleAttr": "内圆",
		"CorrectionDirection": "左",
		"CorrectionMethod": "G41",
		"CorresProcess": "N6",
		"DrawingLowerLimit": -0.05,
		"DrawingUpperLimit": 0.05,
		"Position": "内孔长度",
		"ProcessCorres": "⌀0.7",
		"ProgramValue": "D4",
		"Remark": null,
		"StandardValue": 10.59,
		"ToleranceLowerLimit": 0,
		"ToleranceUpperLimit": 0.015,
		"ToolLibraryTypeCode": "T01"
	}]
}

//直方图
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"CECode": "C001",
		"CompValue": 0,
		"DetectionTime": "2018/11/28 16:35:34",
		"DetectionValue": 10.592,
		"LowerLimit": 10.54,
		"QC": "小陈",
		"StandardValue": 10.59,
		"UpperLimit": 10.64
	}]
}

//磨头磨损情况数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"Cpk": 1,
		"CpkType": 1,
		"PositionName": "内孔长度"
	}]
}

//根据产品信息获取刀补位置
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"AverageCPK": 0,
		"CircleAttr": "内圆",
		"CorrectionDirection": "左",
		"CorrectionMethod": "G41",
		"CorresProcess": "N6",
		"DrawingLowerLimit": -0.05,
		"DrawingUpperLimit": 0.05,
		"Position": "内孔长度",
		"ProcessCorres": "⌀0.7",
		"ProgramValue": "D4",
		"Remark": null,
		"StandardValue": 10.59,
		"ToleranceLowerLimit": 0,
		"ToleranceUpperLimit": 0.015,
		"ToolLibraryTypeCode": "T01"
	}]
}

//根据设备和刀库值获取刀具编号
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"ChangeTime": "2019/3/13 10:07:08",
		"ToolCode": "DT03133-1-T01-1",
		"UseStatus": "在用"
	}]
}

//获取产品列表
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"Code": "HM31",
		"ID": "f0421bf8-7270-4f12-ba1d-facfbf09b768",
		"Name": "HM31手机壳"
	}]
}

//根据设备获取刀具库编号
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": [{
		"LibCode": "T01"
	}]
}

//对刀仪设备编号
{
	"RECORDS": [{
		"ToolCode": "C001"
	}]
}

//刀具相关信息及两个历史数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		"Batch": "1125",
		"CheckEquCode": "C001",
		"CheckItems": [{
			"DetectionValue": 0.01,
			"ItemName": "偏摆",
			"LowerLimit": 0,
			"MeasureType": 1,
			"StandardValue": 0,
			"UpperLimit": 0
		}],
		"Granularity": 300,
		"InspectDate": "2018-12-05 00:00:00",
		"Inspector": "小陈",
		"Manufacturer": "TEST",
		"ProductCode": "HM34",
		"SpecFileList": [],
		"ToolCode": "123R008",
		"ToolPreLife": 300,
		"ToolSpecCode": "HM33CG2-023",
		"ToolSpecName": "TEST",
		"ToolSpecPosCode": "孔精底"
	}

}

//根据产品信息获取状态条数据
{
	"statusbar": [{
		"Msg": "待料中,模式:自动模式",
		"ST": "08:00:05",
		"Status": "1",
		"Time": "0243.000"
	}, {
		"Msg": "待料中,模式:MEMory",
		"ST": "08:06:30",
		"Status": "1",
		"Time": "0243.000"
	}]
}

//获取错误信息
{
	"historyWarning": []
}

//获取OEE等效率数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		"Ar": 0.8722117,
		"MCode": "C1",
		"OEE": 0.253709644,
		"Pr": 0.296817154,
		"Qr": 0.98,
		"ShiftName": null
	}
}

//状态汇总数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		"AvgProcessTime": 359,
		"CloseTimes": 0,
		"FaultTimes": 0,
		"IdleTimes": 0,
		"MaxProcessTime": 359,
		"ProNum": 0,
		"ProcessTimes": 0.477393627,
		"StatsDate": "2019-04-20 00:00:00",
		"WaitingTimes": 0.5226064,
		"WarmupTimes": 0
	}
}

//获取计划达成情况数据
{
	"Extensions": "",
	"IsSuccess": true,
	"Value": {
		"ActualProNum": 2,
		"PlanProNum": 220,
		"ProCode": "HM31",
		"ProcessCode": "HM31CNC1",
		"ShiftCode": "001",
		"ShiftName": "白班",
		"YieldDate": "2019-04-20 00:00:00",
		"YieldRate": 0.009090909
	}
}

//产能分析
//加载空间的数据
{
	"pro_data": [{
		"code": "HE22-CNC4",
		"name": "HE22手机壳"
	}],
	"shift_data": [{
		"code": "002",
		"name": "晚班"
	}],
	"team_data": [{
		"code": "200SMART01",
		"name": "生产单元1"
	}]
}

//更新图表，车间实时产出达成率
{
	"capacity_data": [{
		"ActualProNum": "9590",
		"PlanProNum": "12540",
		"ProCode": "HE22-CNC4",
		"ShiftCode": "002",
		"StandarbProNum": "5016",
		"StatsDate": "0.7648",
		"UnitCode": "200SMART01"
	}]
}

//更新车间实时设备综合效率
{
	"efficient_data": [{
		"ProductCode": "HE22-CNC4",
		"ShiftCode": "002",
		"StandarbQualityRate": "0.9850000",
		"StatusCode": "2019-04-11",
		"UnitCode": "200SMART01",
		"ar": "0.8190",
		"pr": "1.1825962",
		"qr": "0.9800000"
	}]
}

//设备综合效率损失分析
{
	"arPr_data": [{
		"CloseTimes": "417222",
		"OperateTimes": "7498241",
		"ProductCode": "HE22-CNC4",
		"ShiftCode": "002",
		"StandarbCloseTimes": "417222",
		"StandarbOperateTimes": "9628200",
		"StatsDate": "2019-04-21",
		"UnitCode": "200SMART01"
	}],
	"arTop5_data": [{
		"Interval1": 1566273,
		"ProductCode": "HE22-CNC4",
		'ShiftCode': "001",
		"StatsDate": "2019-04-21",
		"StatusCount": "3",
		"StatusMsg": "待机",
		"UnitCode": "200SMART01"
	}]
}