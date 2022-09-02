export const BASE_API_URL = process.env.REACT_APP_API_URI!

if(!BASE_API_URL){
    throw new Error(`Не указан URL для api, проверьте файл .env, есть ли там REACT_APP_API_URI`)
}
