import { BACKEND_URL } from "$api/config";


// /** @type {import('./__types/[slug]').Load} */
// export async function load({params, fetch, stuff}){
// const email = params["email"]
// const token = params["token"]
// console.log("params were ", params)
// console.log("email was ", email , " and token was ", token)
// const url = BACKEND_URL + `user/v1/confirm-email?email=${email}&token=${token}`;
// try {
//     let res = fetch(url)
//     return {
//     status: 302,
//     redirect: "/login"
//     };
// } catch (error) {
//     console.log(`could not confirm email for ${email} token ${token}`)
// }
// }