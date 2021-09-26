import { toast } from 'react-toastify';

export function toastSuccess(messsage) {
    toast.success(messsage);
}

export function toastError(err) {
    if (err.response) {
        const { message } = err.response.data;
        if (message) {
            return toast.error(message);
        }
    }
    if (err.message) {
        return toast.error(err.message);
    }
 
    toast.error("Error happened! Please Try Again.");
}