# Urods

## Description

Urods is an application that allows users to purschase different types of Opal.
Easy to use, you will be able to track the origins of each rock, quality, type and size.
Please visit the application [here](https://project-inventory-ff35c68cb7af.herokuapp.com/).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)
- [License](#license)
- [Author](#authors)

## Installation
To run the Urods locally, follow these steps:

1. Clone the repository to your local.
2. Install the dependencies: `npm install`
3. Set environment variables: Rename the `.env.EXAMPLE` file into `.env` and fill in the DB_USER and DB_PASSWORD with your database credentials and save the file.
4. Set up the database: 

    * Navigate to db directory and open the mySql shell and execute the schema.sql by running `source schema.sql` to create database.
    * Navigate to root directory and run `npm run seed` to seed data to your database.

5. Start the server: `npm start`


## Usage 
Once the application is up and running, follow these steps:

1. Access the application through your web browser.
2. Now that you are in the Home page you could familiarize with page.
3. if you are interested in a product you could create an account for identification purposes and to be able to keep track of your orders.
3. Once you create your account your login details will be saved.
4. Click on one of the categories to view the items that we have in stock!.
5. if you are inside of a category you can scroll between products and access to the information of each product including(size, type, price etc)
6. if you decided to purschase a product all you have to do is press the button buy and it will be added to the cart.
7. Click delete product to remove the item from cart.
7. Once the product is in the cart and you decided to continue you can choose between the options(continue shopping) or (Go to payment).
8. if go to payment you will be re directed to Stripe for a secure payment method.
9. Log out will be automatic when finished.

## Credit
- [Bootstrap](https://startbootstrap.com/previews/sb-admin-2)
- https://www.sitepoint.com/get-started-anime-js/ 

## License
MIT license.

## Authors
- © 2023 [Sebastian](https://github.com/Sebastianrod8)