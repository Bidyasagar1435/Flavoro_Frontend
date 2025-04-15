import React, { useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { useState } from "react";

const Success = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#29F94E" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been Successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
