import { collection, getDocs } from 'firebase/firestore';
import React, {  useEffect, useState } from 'react';
import { fireDb } from '../firebase';
import UserCard from './UserCard';
import removeItem from './removeItem';

const UserInfo = () => {
    
    const [Data, setData] = useState([]);
    const [users, setUsers] = useState("kkk");

    useEffect(() => {
       

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDb, 'coupons'));
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(items);

            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
               console.log("final");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('users'));
        setUsers(user);
    }, []);

    const filteredCoupons = Data.filter((coupon) => users.uid === coupon.uploadBy);

    return (
        <div className="overflow-x-hidden">
            <div>
                <div className="bg-[#181e24] h-[100vh] w-screen overflow-x-hidden flex justify-center items-center mt-[80px] md:mt-[30px]">
                    <div className="bg-[#2a323c] relative md:h-10/12 md:w-3/4 w-full flex md:flex-row flex-col py-14 text-white rounded-md">
                        <div className="md:w-1/2 h-full m-4 flex flex-col items-center justify-around gap-y-3 border-b-2 md:border-r-2 md:border-b-0">
                            <h1 className="font-bold text-3xl">User Info</h1>
                            <div className="w-36 h-36 m-4 rounded-full flex flex-col bg-slate-500">
                                <img
                                    src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                                    alt="user"
                                    className="rounded-full"
                                />
                            </div>
                            <h1>Name: {users.name}</h1>
                            <h1>Email: {users.email}</h1>
                            <button className="px-2 m-2 text-center text-white cursor-not-allowed bg-blue-500 rounded-md shadow-sm hover:bg-blue-700">
                                Edit profile
                            </button>
                        </div>
                        <div className="md:w-1/2  h-full m-4">
                            <h1 className="font-bold text-xl text-center h-12">Your Uploaded Coupon</h1>
                            <div className="flex overflow-x-auto w-full scrollbar-hide items-center justify-center">
                                {filteredCoupons.map((coupon) => (
                                    <UserCard key={coupon.id} data={coupon} itemId={coupon.id} removeItem={removeItem} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
