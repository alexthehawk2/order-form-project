import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./orderSummary.module.css";
const DUMMY_DATA = [
  {
    id: nanoid(),
    qty: 1,
    title: "Hitman 3",
    description:
      "Hitman 3 is a 2021 stealth game developed and published by IO Interactive.",
    price: "199",
    posterUrl:
      "https://static.wikia.nocookie.net/hitman/images/3/30/HITMAN_3_Box_Art.jpg/revision/latest?cb=20210131203729",
  },
  {
    id: nanoid(),
    qty: 1,
    title: "GTA V",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
    price: "299",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
  },
  {
    id: nanoid(),
    qty: 1,
    title: "S.T.A.L.K.E.R 2: Heart of Chornobyl",
    description:
      "S.T.A.L.K.E.R. 2: Heart of Chornobyl is a next-gen sequel to the award-winning PC game franchise developed by GSC Game World.",
    price: "999",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/STALKER_2_cover_art.jpg/220px-STALKER_2_cover_art.jpg",
  },
];
export default function OrderSummary() {
  const [orderId, setOrderId] = useState(``);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setOrderId(`${nanoid()}`);
    let total = 0;
    DUMMY_DATA.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotal(total);
  }, []);

  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.order_summary__wrapper}>
          <div>
            <span className={classes.order_id}>Order ID: {orderId}</span>
            <br />
            <span
              className={
                classes.order_bold_text + " " + classes.order_summary__text
              }
            >
              Summary
            </span>
          </div>
          <div className={classes.order_items}>
            {DUMMY_DATA.map((item) => {
              return (
                <div key={item.id} className={classes.order_item}>
                  <div className={classes.image_box}>
                    <Image
                      width={80}
                      height={80}
                      src={item.posterUrl}
                      alt="img"
                    />
                  </div>
                  <div className={classes.order_data}>
                    <span className={classes.order_bold_text}>
                      {item.title}
                    </span>
                    <br />
                    <span className={classes.order_gray_text}>
                      {item.description}
                    </span>
                  </div>
                  <div className={classes.order_price_quantity}>
                    <span className={classes.order_bold_text}>
                      ₹{item.price}
                    </span>
                    <br />
                    <span className={classes.order_gray_text}>
                      QTY:{item.qty}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.order_total}>
            <span className={classes.blue_text}>Total</span>
            <span className={classes.blue_text}>₹{total}</span>
          </div>
        </div>
        <div className={classes.proceed_box}>
          <Link href={"/" + "order-details/" + orderId}>
            <div>
              <button className={classes.custom_btn}>Proceed to Payment</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
