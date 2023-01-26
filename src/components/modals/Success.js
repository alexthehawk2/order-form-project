import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import classes from "./success.module.css";
export default function Success() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      <div className={classes.card_container}>
        <div className={classes.card_body}>
          <PacmanLoader color="#3654d6" loading={loading} />

          {!loading && (
            <div>
              <h2 style={{ color: "red" }}>🎉 Order Confirmed 🎉</h2>
              <p>Order ID : {router.query.orderId}</p>
              <p>Your Order will be delivered soon.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
