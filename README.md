<h1>#Milestone17</h1>
The cart schema stores user cart details in MongoDB. It includes:
userId: Links the cart to a user.
items[]: Stores product details (productId, name, price, quantity, image).
totalPrice: Automatically updates when products are added/removed.
The API endpoint (/cart/add):
Finds or creates a cart for the user.
Checks if the product already exists in the cart.
If yes, it updates the quantity.
If no, it adds the product to the cart.
Updates total price dynamically.
Saves the cart in MongoDB and returns the updated cart.
This allows users to add products to their cart while keeping track of quantities and total cost. 








