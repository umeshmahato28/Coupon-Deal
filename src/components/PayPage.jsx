import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase";
import RedeemCard from "./RedeemCard";
import { useParams } from "react-router-dom";

const PayPage = () => {
  const id = useParams();
  const [Data, setData] = useState([]);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(fireDb, "coupons"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      setshow(true);
    };

    fetchData();
  }, []);

  const coupon = Data.filter((coupon) => id.id === coupon.id);

  return (
    <div className="overflow-x-hidden">
      {show && <RedeemCard data={coupon[0]} />}
    </div>
  );
};

export default PayPage;
