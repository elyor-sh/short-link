export const ENVIRONMENT = process.env.REACT_APP_ENV === 'production' ? 'production' : 'development'

export const BASE_API_URL = ENVIRONMENT === 'development' ?  process.env.REACT_APP_API_URI! : process.env.REACT_APP_PROD_API_URI!
export const REDIRECT_URI = BASE_API_URL + '/s/'

if(!BASE_API_URL){
    throw new Error(`Не указан URL для api, проверьте файл .env, есть ли там REACT_APP_API_URI`)
}
