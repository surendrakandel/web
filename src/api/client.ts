import { browser } from '$app/environment';
import { ENV } from '$src/api/config';
import { basic_provider } from '$src/stores/basic_provider';
import axios, { type AxiosRequestConfig } from 'axios';
let auth = '';

export const userClient = axios.create({
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/user/v1/'
			: 'https://www.api.firstshipper.com/user/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
userClient.interceptors.request.use((request:any) => {
	request.headers['authorization'] = auth;
	return request;
});
export const businessClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/business/v1/'
			: 'https://www.api.firstshipper.com/business/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
businessClient.interceptors.request.use((request:any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const bolClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev' ? 'http://127.0.0.1:8090/bol/v1/' : 'https://www.api.firstshipper.com/bol/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});

bolClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const bookingClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/booking/v1/'
			: 'https://www.api.firstshipper.com/booking/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});

bookingClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const quoteClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/quote/v1/'
			: 'https://www.api.firstshipper.com/quote/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
quoteClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const locationClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/location/v1/'
			: 'https://www.api.firstshipper.com/location/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
locationClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const trackingClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL:
		ENV == 'dev'
			? 'http://127.0.0.1:8090/tracking/v1/'
			: 'https://www.api.firstshipper.com/tracking/v1/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
trackingClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

export const nodeClient = axios.create({
	
	withCredentials: true,
	timeout: 60000,
	baseURL: ENV == 'dev' ? 'http://127.0.0.1:3000/' : 'https://www.firstshipper.com/',
	headers: {
		// @ts-ignore
		common: {
			'Access-Control-Allow-Origin': '127.0.0.1:8090',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
		}
	}
});
nodeClient.interceptors.request.use((request: any) => {
	request.headers['authorization'] = auth;
	return request;
});

if (browser && basic_provider != undefined) {
	basic_provider.subscribe((value) => {
		if (value != undefined) {
			auth = value.token;
			return;
		}
		return value;
	});
}

// user_client = 0,
// bol_client = 1,
// booking_client = 2,
// quote_client = 3,
// business_client = 4,
// email_client = 5,
// sms_client = 6,
// rapid_client = 7,
// road_runner_client = 8,
// clear_lane_client = 9,
// location_client = 10,
// payment_client = 11,
// report_client = 12,
// tracking_client = 13,
// UNRECOGNIZED = -1,
