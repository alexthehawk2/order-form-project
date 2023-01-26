import success from "@/pages/order-details/[orderId]/success";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import classes from "./paymentDetails.module.css";
export default function PaymentDetails() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const router = useRouter();
  const onInputChangeHandler = (e, type) => {
    if (type === "cardNumber") {
      if (e.target.value.length <= 16) {
        setCardNumber(e.target.value);
      }
    } else if (type === "name") {
      setName(e.target.value);
    } else if (type === "expiryDate") {
      if (e.target.value.length <= 7) {
        if (e.target.value.length >= 2) {
          const expiry = e.target.value;
          const b = "/";
          const position = 2;
          const output = [
            expiry.slice(0, position),
            b,
            expiry.slice(position),
          ].join("");
          if (e.target.value.includes("/")) {
            setExpiryDate(e.target.value);
          } else setExpiryDate(output);
        } else {
          setExpiryDate(e.target.value.replace(/\D/, ""));
        }
      }
    } else if (type === "securityNumber") {
      setCvv(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const route = router.asPath.replace("payment", "success");

    router.push(route);
  };
  return (
    <div className="container text-center payment">
      <div className={`row ${classes.card_row}`}>
        <div className={`col-7 ${classes.card_body} me-3`}>
          <div className={classes.card_logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.09em"
              height="1em"
              viewBox="0 0 256 83"
            >
              <defs>
                <linearGradient
                  id="logosVisa0"
                  x1="45.974%"
                  x2="54.877%"
                  y1="-2.006%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#222357" />
                  <stop offset="100%" stop-color="#254AA5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logosVisa0)"
                d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                transform="matrix(1 0 0 -1 0 82.668)"
              />
            </svg>
          </div>
          <div className={`${classes.card_chip}`}>
            <span className={classes.card_chip__outer}>
              <span className={classes.card_chip__inner}></span>
            </span>
          </div>
          <div className={classes.card_number}>
            <span>{cardNumber || "1234123412341234"}</span>
          </div>
          <div className={classes.card_details}>
            <span>{name || "John Doe"}</span>
            <div className={classes.card_expiry}>
              <span>Month/Year</span>
              <div>
                <span>Valid Thru</span>
                <span>{expiryDate || "MM/YYYY"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-card">
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <div class="mb-1">
              <label className={classes.form_label_cust}>Card Number</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                placeholder="Enter 16 digit card number"
                onChange={(e) => onInputChangeHandler(e, "cardNumber")}
                value={cardNumber}
                maxLength="16"
              />
            </div>
            <div class="mb-1">
              <label for="cardholder-name" className={classes.form_label_cust}>
                Cardholder Name
              </label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="cardholder-name"
                placeholder="Cardholder name"
                onChange={(e) => onInputChangeHandler(e, "name")}
                value={name}
              />
            </div>
            <div class="mb-1">
              <label for="expiry-date" className={classes.form_label_cust}>
                Expiry date
              </label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="expiry-date"
                placeholder="MM / YYYY"
                onChange={(e) => onInputChangeHandler(e, "expiryDate")}
                value={expiryDate}
              />
            </div>
            <div class="mb-1">
              <label for="security-number" className={classes.form_label_cust}>
                Security Number
              </label>
              <input
                type="Number"
                class="form-control form-control-sm"
                name="security-number"
                placeholder="CVV"
                onChange={(e) => onInputChangeHandler(e, "securityNumber")}
                value={cvv}
              />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary">
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
