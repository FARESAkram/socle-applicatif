import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"
import { API_URL } from "../../constants/api";

const UserCard = () => {
    const location = useLocation();
    const params = useParams<{id: string}>();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(location.state);
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
    useEffect(() => {
        if (user == null || user == undefined)
        {
            axios.get<User>(`${API_URL}/users/${params.id}`).then(response => {
                setUser(response.data);
            }).catch(error => {
                if(error instanceof Error)
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.message,
                    })
                }
                else if ( error instanceof ProgressEvent)
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
                        text: error.response?.data.message,
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
                navigate('/users');
            })
        }
    }, [])
    const update = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try
        {
            const url = `${API_URL}${user!.putEndPoint}`;
            console.log({url});
            const response = await axios.put(url, user);
            const data: User = response.data as User;
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User updated successfully',
            })
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
                    text: error.message,
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
        (user != null && user != undefined )? (
            <div className="self-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={e => update(e)}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={e => handleChange(e)} type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={user.lastName} required />
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
                        >Update</button>
                    </div>
                </form>
            </div>
        ):(<div className="dark:text-white">Error</div>)
    )
}

export default UserCard