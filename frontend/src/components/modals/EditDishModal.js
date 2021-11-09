import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addDishFunc, updateDishFunc } from "../../redux/actions/dishActions";

const EditDishModal = ({
  show,
  onHide,
  dish,
  dishCategories,
  restaurant,
  addDishFunc,
  updateDishFunc,
}) => {
  const [dishName, setDishName] = useState(null);
  const [mainIngredients, setMainIngredients] = useState(null);
  const [description, setDescription] = useState(null);
  const [dishCategory, setDishCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [dishImage, setDishImage] = useState(null);

  const onAddDish = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", dishName);
    data.append("restaurantId", restaurant._id);
    data.append("mainIngredients", mainIngredients);
    data.append("description", description);
    data.append("dishCategoryId", dishCategory);
    data.append("price", price);
    data.append("myFile", dishImage);
    addDishFunc(data, restaurant.token, onHide);
  };

  const onUpdateDish = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (dishName) data.append("name", dishName);
    if (mainIngredients) data.append("mainIngredients", mainIngredients);
    if (description) data.append("description", description);
    if (dishCategory) data.append("dishCategoryId", dishCategory);
    if (price) data.append("price", price);
    if (dishImage) data.append("myFile", dishImage);
    if (
      dishName ||
      mainIngredients ||
      description ||
      dishCategory ||
      price ||
      dishImage
    )
      updateDishFunc(data, dish._id, restaurant.token, onHide);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {dish ? "Update" : "Create"} Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={dish ? onUpdateDish : onAddDish}>
          <div class="form-group">
            <label style={{ marginTop: "15px" }}>
              <b>Dish Name</b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter dish name"
              onChange={(e) => setDishName(e.target.value)}
              required
              defaultValue={dish ? dish.name : null}
            />
          </div>
          <div class="form-group">
            <label style={{ marginTop: "15px" }}>
              <b>Main Ingredients</b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter ingredients"
              onChange={(e) => setMainIngredients(e.target.value)}
              required
              defaultValue={dish ? dish.mainIngredients : null}
            />
          </div>
          <div class="form-group">
            <label style={{ marginTop: "15px" }}>
              <b>Description</b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
              required
              defaultValue={dish ? dish.description : null}
            />
          </div>
          <div class="row">
            <div class="form-group col-6">
              <label
                style={{ marginTop: "15px" }}
                for="exampleFormControlSelect1"
              >
                <b>Category</b>
              </label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setDishCategory(e.target.value)}
                required
              >
                <option>Select category</option>
                {dishCategories &&
                  dishCategories.map((item) =>
                    dish && dish.dishCategoryId === item.categoryType ? (
                      <option selected value={item.categoryType}>
                        {item.categoryType}
                      </option>
                    ) : (
                      <option value={item.categoryType}>
                        {item.categoryType}
                      </option>
                    )
                  )}
              </select>
            </div>
            <div class="form-group col-6">
              <label style={{ marginTop: "15px" }}>Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={dish ? dish.price : null}
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label style={{ marginTop: "15px" }} for="exampleFormControlFile1">
              <b>Upload Dish Image</b>
            </label>
            <input
              type="file"
              class="form-control-file"
              onChange={(e) => setDishImage(e.target.files[0])}
              style={{ marginTop: "15px", marginLeft: "15px" }}
              // required={dish ? false : true}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            {dish ? (
              <button
                style={{ marginTop: "15px" }}
                type="submit"
                class="btn btn-primary"
              >
                Update
              </button>
            ) : (
              <button
                style={{ marginTop: "15px" }}
                type="submit"
                class="btn btn-primary"
              >
                Add
              </button>
            )}
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  restaurant: state.login.restaurant,
});

export default connect(mapStateToProps, { addDishFunc, updateDishFunc })(
  EditDishModal
);
