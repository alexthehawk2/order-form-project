import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function CustomerDetails({ orderId }) {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      area: "",
      pincode: "",
      city: "",
      state: "",
    },
    hasAcceptedRentalPolicy: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const paymentMethodHandler = (e) => {
    if (e.target.id === "card-pay") {
      setPaymentMethod("payment");
    } else {
      setPaymentMethod("success");
    }
  };
  const onInputChangeHandler = (e, type) => {
    if (type === "phone") {
      if (e.target.value.length <= 10) {
        setCustomerDetails((prevData) => ({
          ...prevData,
          [type]: e.target.value,
        }));
      }
    } else if (type === "address") {
      if (e.target.id === "pincode") {
        if (e.target.value.length <= 6) {
          setCustomerDetails((prevData) => ({
            ...prevData,
            address: {
              ...prevData.address,
              [e.target.id]: e.target.value,
            },
          }));
        }
      } else {
        setCustomerDetails((prevData) => ({
          ...prevData,
          address: {
            ...prevData.address,
            [e.target.id]: e.target.value,
          },
        }));
      }
    } else if (type === "hasAcceptedRentalPolicy") {
      setCustomerDetails((prevData) => ({
        ...prevData,
        [type]: e.target.checked,
      }));
    } else {
      setCustomerDetails((prevData) => ({
        ...prevData,
        [type]: e.target.value,
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-5">
              <label className="form-label form-label-2">
                Customer Details
              </label>
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="form-input"
                onChange={(e) => onInputChangeHandler(e, "name")}
                value={customerDetails.name}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="form-input"
                onChange={(e) => onInputChangeHandler(e, "phone")}
                value={customerDetails.phone}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="form-input"
                onChange={(e) => onInputChangeHandler(e, "email")}
                value={customerDetails.email}
              />
            </div>
            <div className="mb-5 pt-3">
              <label className="form-label form-label-2">Address Details</label>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full sm:w-half px-3">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="form-input"
                      onChange={(e) => onInputChangeHandler(e, "address")}
                      value={customerDetails.address.area}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half px-3">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="form-input"
                      onChange={(e) => onInputChangeHandler(e, "address")}
                      value={customerDetails.address.city}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half px-3">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="form-input"
                      onChange={(e) => onInputChangeHandler(e, "address")}
                      value={customerDetails.address.state}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half px-3">
                  <div className="mb-5">
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      placeholder="Pin Code"
                      className="form-input"
                      onChange={(e) => onInputChangeHandler(e, "address")}
                      value={customerDetails.address.pincode}
                    />
                  </div>
                </div>
                <div className="w-full px-3">
                  <label className="form-label form-label-2">
                    Payment Method
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment-method"
                      id="cod"
                      onChange={paymentMethodHandler}
                    />
                    <label class="form-check-label" for="cod">
                      Cash on delivery
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment-method"
                      id="card-pay"
                      onChange={paymentMethodHandler}
                    />
                    <label class="form-check-label" for="card-pay">
                      Card Payment
                    </label>
                  </div>
                </div>
                <div className="w-full px-3">
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    onChange={(e) =>
                      onInputChangeHandler(e, "hasAcceptedRentalPolicy")
                    }
                    value={customerDetails.hasAcceptedRentalPolicy}
                  />
                  <label className="rent-policy">
                    I accept the{" "}
                    <a href="https://gameathon.in/rentalpolicy">
                      rental policy
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <Link
                href={"/" + "order-details/" + orderId + "/" + paymentMethod}
              >
                <button className="custom-btn">Proceed to Payment</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
