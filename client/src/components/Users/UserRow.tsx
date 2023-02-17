import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { API_URL } from "../../constants/api"

type Props = {
    index: number
    user: User
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const UserRow = ( {setUsers,index,user}: Props ) => {
    const navigate = useNavigate();  
    const userId = user.getEndPoint.split("/")[2]
    const checkUser = () => {
        navigate(`/users/${userId}`, { state: user });      
    }
    const deleteUser = () => {
        axios.delete(`${API_URL}/users/${userId}`).then((u) => {
            const user: User = u.data
            setUsers((prevState) => {
                return prevState.filter(u => u.email !== user.email)
            })
            Swal.fire({
                title: 'User deleted',
                text: `User ${user.firstName} ${user.lastName} has been deleted`,
                icon: 'success',
            }).then(() => {
            })
            
        })
    }
    return (
        <tr>
            <td className="text-center py-3 px-6">
                {index}
            </td>
            <td className="text-center py-3 px-6">
                {user.lastName}
            </td>
            <td className="text-center py-3 px-6">
                {user.firstName}
            </td>
            <td className="text-center py-3 px-6">
                {user.email}
            </td>
            <td className="text-center py-3 px-6">
                {user.birthDate}
            </td>
            <td className="text-center py-3 px-6">
                <div className="flex justify-around">
                    <p onClick={checkUser} className="cursor-pointer text-green-500">Check</p>
                    <p onClick={deleteUser} className="cursor-pointer text-red-400">Delete</p>
                </div>
            </td>
        </tr>
    )
}

export default UserRow