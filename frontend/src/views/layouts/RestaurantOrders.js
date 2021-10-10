import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import {
  getOrdersByRestaurantId,
  getOrderDetailsById,
} from "../../controllers/orders";
import OrderDetails from "../../components/modals/OrderDetails";

const RestaurantOrders = ({ restaurant }) => {
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [viewReceiptModal, setViewReceiptModal] = useState(false);

  const getOrdersFunc = () => {
    getOrdersByRestaurantId(restaurant.id)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  const onModalClick = (orderId) => {
    getOrderDetailsById(orderId)
      .then((res) => res.json())
      .then((data) => {
        setOrderDetails(data);
        setViewReceiptModal(true);
      });
  };

  const onModalClose = () => {
    setViewReceiptModal(false);
  };

  useEffect(() => {
    getOrdersFunc();
  }, []);

  console.log(orders);
  return (
    <>
      <Header restaurantFlag={true} />
      {orders &&
        orders.map((item) => (
          <>
            <div class="row">
              <div class="col-12">
                <p>
                  Customer:{" "}
                  <a
                    href={
                      "/userprofile?userid=" + item.user_id + "&restaurant=true"
                    }
                  >
                    <b style={{ textDecoration: "underline" }}>
                      {item.first_name + " " + item.last_name}
                    </b>
                  </a>
                </p>
              </div>
              <div class="col-12">
                <p>
                  {item.order_count} items for ${item.total}. {item.created}{" "}
                  <button onClick={() => onModalClick(item.id)}>
                    View Receipt
                  </button>
                </p>
              </div>
            </div>
          </>
        ))}
      <Footer />
      <OrderDetails
        show={viewReceiptModal}
        onHide={onModalClose}
        orderDetails={orderDetails}
        restaurantFlag={true}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
});

export default connect(mapStateToProps)(RestaurantOrders);
