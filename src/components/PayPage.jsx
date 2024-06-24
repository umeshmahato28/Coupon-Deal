import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase";
import RedeemCard from "./RedeemCard";
import { useParams } from "react-router-dom";
import myContext from "../context/myContext";
import ShimmerRedeem from "./ShimmerRedeem";

const PayPage = () => {
  const { loading, setLoading } = useContext(myContext);
  const { id } = useParams(); // Destructure id directly
  const [Data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(fireDb, "coupons"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
        setShow(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]); // Add setLoading to dependency array

  const coupon = Data.filter((coupon) => id === coupon.id);

  return (
    <div className="overflow-x-hidden">
      {loading && <ShimmerRedeem />}
      {!loading && show && coupon.length > 0 && <RedeemCard data={coupon[0]} />}
    </div>
  );
};

export default PayPage;
