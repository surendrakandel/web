export const ENV = import.meta.env.VITE_ENV === 'dev' ? 'dev' : 'prod';
export const BACKEND_URL =
	ENV === 'dev' ? import.meta.env.VITE_DEV_BACKEND_URL : import.meta.env.VITE_PROD_BACKEND_URL;
export const FRONTEND_URL =
	ENV === 'dev' ? import.meta.env.VITE_DEV_FRONTEND_URL : import.meta.env.VITE_PROD_FRONTEND_URL;
export let rapidEndBookingWindow = import.meta.env.VITE_RAPID_END_BOOKING_WINDOW;
