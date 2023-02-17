import axios, { AxiosError } from "axios"
import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { API_URL } from "../../constants/api";

const UserRegister = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        putEndPoint: '',
        deleteEndPoint: '',
        getEndPoint: '',
        postEndPoint: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setUser((prevState) => {
            if (prevState == null || prevState == undefined)
                return prevState;
            return {
                    ...prevState,
                    [id]: value
        };})
    }
    const addUser = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try
        {
            const url = `${API_URL}/users`;
            console.log({url});
            console.log("registering user: ", user);
            const response = await axios.post(url, user);
            console.log({response});
            const data: User = response.data as User;
            await Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User added successfully',
            })
            navigate('/users');

        }
        catch (error: unknown)
        {
            console.log(error);
            if ( error instanceof ProgressEvent)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Network error',
                })
            }
            else if ( error instanceof AxiosError )
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response?.data.message || error.message,
                })
            }
            else
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Unknown error',
                })
            }
        }
    }
    return (
    <div className="self-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={e => addUser(e)}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={e => handleChange(e)} type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={user.lastName} required />
                    <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={e => handleChange(e)} type="text" name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={user.firstName} required />
                    <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={e => handleChange(e)} type="date" name="birthDate" id="birthDate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={user.birthDate.toLocaleString()} required />
                <label htmlFor="birthDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth date</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={e => handleChange(e)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={user.email} required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div>
                <button 
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add</button>
            </div>
        </form>
    </div>
    )
}

export default UserRegister