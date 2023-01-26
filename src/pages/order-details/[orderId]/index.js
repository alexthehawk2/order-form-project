import CustomerDetails from "@/components/Forms/CustomerDetails";
import React from "react";
import { useRouter } from "next/router";
export default function OrderIdSlug() {
  const router = useRouter();
  return (
    <>
      <CustomerDetails orderId={router.query.orderId} />
    </>
  );
}
