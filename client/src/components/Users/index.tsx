import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { API_URL } from "../../constants/api";
import UserRow from "./UserRow";


const Users = ( ) => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get(`${API_URL}/users`).then((response) => {
            setUsers(response.data);
            setFilteredUsers(response.data);
        }).catch((error) => {
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
                        text: error.response!.data.message,
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
        });
    }, []);
    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);
    const COLUMNS = [
        "#", "last name", "first name", "email", "birth date", "actions"
    ]
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // filter the table
        if ( value === "")
        {
            setFilteredUsers(users);
        }
        else 
        {
            const f = users.filter((user) => {
                return user.firstName.toLowerCase().includes(value.toLowerCase()) || user.lastName.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase()) || user.birthDate.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredUsers(f);
        }
    }

    return (
        <div className="overflow-x-auto relative mx-5">
            <input onInput={handleInput} type="text" placeholder="Search" className="flex self-center w-60 my-4 mx-auto border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none" />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {COLUMNS.map((column, index) => (
                            <th key={index} scope="col" className="text-center py-3 px-6">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredUsers.map((user, index) => (
                        <UserRow key={index} user={user} index={index+1} setUsers={setUsers} />
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Users;