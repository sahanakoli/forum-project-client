import useAxiosSecure from "../hooks/useAxiosSecure"



export const saveUser = async user =>{
    const currentUser = {
        email: user.email,
        role:'user',
        status: 'Verified'
    }

    const { data } = await useAxiosSecure.put(`/users/${user?.email}`, currentUser)

    return data;
}