import {toast} from "react-toastify";

export const validateLink = (link: string): boolean => {
    const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    if(link.length > 65536){
        toast.error('Длина ссылка должна быть не больше 65536 символов', {toastId: 'link_max_length'})
    }

    return urlRegex.test(link) && link.length < 65536
}