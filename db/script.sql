CREATE SCHEMA `ubereats` ;

CREATE TABLE `ubereats`.`countries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `country_name` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `ubereats`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
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

  ALTER TABLE `ubereats`.`users` 
  DROP FOREIGN KEY `country_id_fk`;
  ALTER TABLE `ubereats`.`users` 
  CHANGE COLUMN `phone_no` `phone_no` INT NULL ,
  CHANGE COLUMN `dob` `dob` VARCHAR(45) NULL ,
  CHANGE COLUMN `state` `state` VARCHAR(45) NULL ,
  CHANGE COLUMN `country_id` `country_id` INT NULL ,
  CHANGE COLUMN `nickname` `nickname` VARCHAR(45) NULL ;
  ALTER TABLE `ubereats`.`users` 
  ADD CONSTRAINT `country_id_fk`
    FOREIGN KEY (`country_id`)
    REFERENCES `ubereats`.`countries` (`id`);

  ALTER TABLE `ubereats`.`users` 
  DROP FOREIGN KEY `country_id_fk`;
  ALTER TABLE `ubereats`.`users` 
  CHANGE COLUMN `country_id` `country` VARCHAR(45) NULL DEFAULT NULL ,
  DROP INDEX `country_id_fk_idx` ;
  ;

    CREATE TABLE `ubereats`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL,
  `active` INT NULL DEFAULT 1,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ubereats`.`dishes` (
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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
  `id` INT NOT NULL AUTO_INCREMENT,
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

    ALTER TABLE `ubereats`.`restaurants` 
ADD COLUMN `restaurant_image` VARCHAR(45) NULL AFTER `description`;

ALTER TABLE `ubereats`.`dishes` 
ADD COLUMN `dish_image` VARCHAR(45) NULL AFTER `description`;

USE `ubereats`;
DROP procedure IF EXISTS `PlaceOrder`;

USE `ubereats`;
DROP procedure IF EXISTS `ubereats`.`PlaceOrder`;
;

DELIMITER $$
USE `ubereats`$$
CREATE DEFINER=`admin`@`%` PROCEDURE `PlaceOrder`(
   IN orderJson varchar(700),
   IN orderContentsArr varchar(700)
)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION, SQLWARNING
    BEGIN
	  ROLLBACK;
      GET STACKED DIAGNOSTICS CONDITION 1
      @errorMsg = MESSAGE_TEXT;
      SELECT @errorMsg as error_message;
    END;

  START TRANSACTION;

  SET @indx = 0;
  SET @userId = JSON_EXTRACT(invoiceJson, "$.user_id");
  SET @restaurantId = JSON_EXTRACT(invoiceJson, "$.restaurant_id");
  SET @orderStatus = JSON_EXTRACT(invoiceJson, "$.order_status");
  SET @deliveryType = JSON_EXTRACT(invoiceJson, "$.delivery_type");
  SET @taxes = JSON_EXTRACT(invoiceJson, "$.taxes");
  SET @total = JSON_EXTRACT(invoiceJson, "$.total");

  INSERT INTO orders(user_id, restaurant_id, order_status, delivery_type, taxes, total)
  VALUES (@userId, @restaurantId, JSON_UNQUOTE(@orderStatus), @taxes, @total);

  SET @orderId = (SELECT LAST_INSERT_ID());
  
  UPDATE user_cart SET cart_status = "CC" WHERE user_id = @userId and cart_status = "AC";

  IF JSON_LENGTH(orderContentsArr) > 0 THEN
    REPEAT

      SET @orderContentJson = JSON_EXTRACT(orderContentsArr, CONCAT("$[", @indx, "]"));
      SET @userId = JSON_EXTRACT(@orderContentJson,"$.user_id");
      SET @restaurantId = JSON_EXTRACT(@orderContentJson,"$.restaurant_id");
      SET @dishId = JSON_EXTRACT(@orderContentJson,"$.dish_id");
      SET @qty = JSON_EXTRACT(@orderContentJson,"$.qty");

      INSERT INTO order_contents (user_id, restaurant_id, dish_id, order_id, qty)
      VALUES(@user_id, @restaurantId, @dishId, @orderId, @qty);

       SET @indx = @indx + 1;
       UNTIL @indx = JSON_LENGTH(orderContentsArr)

    END
    REPEAT;
  END IF;

  COMMIT;
END$$

DELIMITER ;