CREATE SCHEMA `ubereats` ;

CREATE TABLE `ubereats`.`countries` (
  `id` INT NOT NULL,
  `country_name` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `ubereats`.`users` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `middle_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_no` INT NOT NULL,
  `display_picture` VARCHAR(45) NULL,
  `dob` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `country_id` INT NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `country_id_fk_idx` (`country_id` ASC) VISIBLE,
  CONSTRAINT `country_id_fk`
    FOREIGN KEY (`country_id`)
    REFERENCES `ubereats`.`countries` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`restaurants` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_no` VARCHAR(45) NOT NULL,
  `timings` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `ubereats`.`restaurant_images` (
  `id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `restaurant_image` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `restaurant_images_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `restaurant_images_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`dish_categories` (
  `id` INT NOT NULL,
  `category_name` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ubereats`.`dishes` (
  `id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `main_ingredients` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `dish_category_id` INT NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `dishes_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  INDEX `dishes_dish_category_id_idx` (`dish_category_id` ASC) VISIBLE,
  CONSTRAINT `dishes_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `dishes_dish_category_id`
    FOREIGN KEY (`dish_category_id`)
    REFERENCES `ubereats`.`dish_categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `ubereats`.`dish_images` (
  `id` INT NOT NULL,
  `dish_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `dish_image` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `dish_images_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  INDEX `dish_images_dish_id_idx` (`dish_id` ASC) VISIBLE,
  CONSTRAINT `dish_images_dish_id`
    FOREIGN KEY (`dish_id`)
    REFERENCES `ubereats`.`dishes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `dish_images_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`orders` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `order_status` VARCHAR(45) NOT NULL,
  `delivery_type` VARCHAR(45) NOT NULL,
  `taxes` FLOAT NOT NULL,
  `total` FLOAT NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `orders_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `orders_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `orders_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ubereats`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `orders_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`order_contents` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `dish_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `qty` INT NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `order_contents_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `order_contents_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  INDEX `order_contents_dish_id_idx` (`dish_id` ASC) VISIBLE,
  INDEX `order_contents_order_id_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `order_contents_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ubereats`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_contents_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_contents_dish_id`
    FOREIGN KEY (`dish_id`)
    REFERENCES `ubereats`.`dishes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order_contents_order_id`
    FOREIGN KEY (`order_id`)
    REFERENCES `ubereats`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`user_addresses` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `address_1` VARCHAR(45) NOT NULL,
  `address_2` VARCHAR(45) NULL,
  `landmark` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `user_addresses_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_addresses_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `ubereats`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`user_favourites` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `user_favourites_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `user_favourites_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  CONSTRAINT `user_favourites_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ubereats`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_favourites_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    CREATE TABLE `ubereats`.`user_cart` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `restaurant_id` INT NOT NULL,
  `cart_status` VARCHAR(45) NOT NULL,
  `delivery_type` VARCHAR(45) NOT NULL,
  `qty` INT NOT NULL,
  `dish_id` INT NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `user_cart_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `user_cart_restaurant_id_idx` (`restaurant_id` ASC) VISIBLE,
  INDEX `user_cart_dish_id_idx` (`dish_id` ASC) VISIBLE,
  CONSTRAINT `user_cart_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ubereats`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_cart_restaurant_id`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `ubereats`.`restaurants` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_cart_dish_id`
    FOREIGN KEY (`dish_id`)
    REFERENCES `ubereats`.`dishes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);