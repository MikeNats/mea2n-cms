'use strict';

const dbCredentials = {
	"userName": "MikeNats",
	"passWord": "2103452729aA",
	"superSecret": "MikeNats",
	"dbAtUrl": "@ds017165.mlab.com:17165/cms",
} 

export const config = {
	dbConnectionUrl: () => { 
		return "mongodb://" + dbCredentials.userName + ":" + dbCredentials.passWord + dbCredentials.dbAtUrl
	},
	superSecret: dbCredentials.superSecret
	
};