import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import {
  getOrdersByUserId,
  getOrderDetailsById,
} from "../../controllers/orders";
import OrderDetails from "../../components/modals/OrderDetails";

const UserOrders = ({ user }) => {
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [viewReceiptModal, setViewReceiptModal] = useState(false);

  const getOrdersFunc = () => {
    getOrdersByUserId(user.id)
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

  return (
    <>
      <Header />
      {orders &&
        orders.map((item) => (
          <>
            <div class="row">
              <div class="col-12">
                <p>
                  {item.restaurant_name} ({item.restaurant_location})
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
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(UserOrders);
