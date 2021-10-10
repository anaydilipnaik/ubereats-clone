import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { addDish, updateDish } from "../../controllers/restaurants";

const EditDishModal = ({ show, onHide, dish, dishCategories }) => {
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
    data.append("restaurant_id", 3);
    data.append("main_ingredients", mainIngredients);
    data.append("description", description);
    data.append("dish_category_id", dishCategory);
    data.append("price", price);
    data.append("myFile", dishImage);
    addDish(data).then((res) => {
      if (res.data === "Success") {
        onHide();
      }
    });
  };

  const onUpdateDish = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (dishName) data.append("name", dishName);
    if (mainIngredients) data.append("main_ingredients", mainIngredients);
    if (description) data.append("description", description);
    if (dishCategory) data.append("dish_category_id", dishCategory);
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
      updateDish(data, dish.id).then((res) => {
        if (res.data === "Success") {
          onHide();
        }
      });
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
        <form>
          <div class="form-group">
            <label>Dish Name</label>
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
            <label>Main Ingredients</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter ingredients"
              onChange={(e) => setMainIngredients(e.target.value)}
              required
              defaultValue={dish ? dish.main_ingredients : null}
            />
          </div>
          <div class="form-group">
            <label>Description</label>
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
              <label for="exampleFormControlSelect1">Category</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setDishCategory(e.target.value)}
                required
              >
                <option>Select category</option>
                {dishCategories &&
                  dishCategories.map((item) =>
                    dish && dish.dish_category_id === item.id ? (
                      <option selected value={item.id}>
                        {item.category_name}
                      </option>
                    ) : (
                      <option value={item.id}>{item.category_name}</option>
                    )
                  )}
              </select>
            </div>
            <div class="form-group col-6">
              <label>Price</label>
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
            <label for="exampleFormControlFile1">Upload Dish Image</label>
            <input
              type="file"
              class="form-control-file"
              onChange={(e) => setDishImage(e.target.files[0])}
              id="exampleFormControlFile1"
              required
            />
          </div>
          {dish ? (
            <button
              type="submit"
              class="btn btn-primary"
              onClick={onUpdateDish}
            >
              Update
            </button>
          ) : (
            <button type="submit" class="btn btn-primary" onClick={onAddDish}>
              Add
            </button>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditDishModal;
