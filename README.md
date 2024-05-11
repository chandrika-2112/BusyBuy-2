# BuyBusy E-Commerce Application

hi im jayaprasad.im a full stack learner from coding ninjas.here is my proejct .

BuyBusy is a web application designed for the customers of an e-commerce business. This project has been refactored to use Redux Toolkit for global state management, providing a centralized store for efficient state persistence.

## Hosted Link

[Live Demo](#) <https://buy-busy-2-git-main-jayaprasad78s-projects.vercel.app/>

## Acceptance Criteria

- Integrate Redux Toolkit for global state management.
- Create reducers and actions for state mutation.
- Implement a login page for existing users.
- Develop asynchronous thunks for tasks like Login/Signup and Adding/Removing products in the cart.
- Utilize `extraReducers()` to handle state updates based on asynchronous thunks, including Pending, Fulfilled, and Rejected actions.
- Update components to leverage the Redux Toolkit state management system.

## Additional Functionality

To maximize the project score, the following features have been added:

- **Sidebar for Product Filtering:**
  - Implemented a sidebar to filter products based on price and categories on the HomePage.
  - Applied search and filter simultaneously for an enhanced user experience.

- **Performance Optimization:**
  - Utilized functions like `createSelector()` for memoized selectors, which cache the result of a calculation and only recompute it if the input data changes.
  - Integrated `createEntityAdapter()` to create a normalized state structure for storing collections of entities, promoting better performance.

## Project Setup

Follow these steps to set up the project:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd buybusy-ecommerce
