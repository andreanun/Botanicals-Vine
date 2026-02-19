# Botanicals & Vine ~

For my home plant lovers. This frontend project serves as a comprehensive **Proof of Concept (PoC)** for a digital plant e-commerce shop. This is simply a MVP, more features coming soon :) .

---

## 🛠️ Tech Stack

| Category             | Technology                             |
| :------------------- | :------------------------------------- |
| **Framework**        | React (Vite)                           |
| **Styling**          | Tailwind CSS, Google Fonts             |
| **State Management** | React Hooks (Context API)              |
| **Testing**          | Vitest, React Testing Library, Cypress |
| **Icons**            | Font Awesome                           |
| **Version Control**  | Git / GitHub                           |

---

## ✨ Key Features

### 🔐 Authentication & Error Handling

A robust onboarding flow that handles both success and failure states gracefully.

- **Session Management:** Persists user login state across reloads.
- **Real-time Validation:** Provides immediate visual feedback for incorrect credentials or formatting errors.

|                                Sign Up Success                                 |                                    Login Error Handling                                    |
| :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| <img src="src/assets/sign_up_success.png" width="400" alt="Sign Up Success" /> | <img src="src/assets/incorrect_username.png" width="400" alt="Incorrect Username Error" /> |

> **Validation Logic:**
> <img src="src/assets/sign-up-error.png" alt="Form Validation" />
> _Prevents submission of invalid data to ensure backend integrity._

---

### 🍃 The Greenhouse (Catalog)

A high-performance grid layout that fetches and displays plant data dynamically.

- **Responsive Grid:** Adapts from mobile (1 col) to desktop (4 cols) using Tailwind breakpoints.
- **Visual Hierarchy:** Prioritizes high-quality imagery with clear pricing and naming conventions.

![Main Plant Catalog](src/assets/plant_page.png)

---

### 🛒 Custom Shopping Experience

The application handles complex product logic, such as selecting specific pot colors for the same plant species.

- **Product Details:** Dedicated views for care instructions and specifications.
- **State Logic:** The cart differentiates between a _Blue Star Fern (Terracotta)_ and a _Blue Star Fern (White)_, treating them as unique line items.

![Single Plant Page](src/assets/single_plant_page.png)

> **Live Cart Demo:**
>
> _Users can customize their order and see the cart update instantly._
>
> ![Add to Cart Interaction](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWhsdmVzNjhka2R3cDdnY3ZpYWZreWdvd29pZjcwa29semJlejUxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ttNAT8fIcpQohD0Hms/giphy.gif)
> _(Note: If video does not play, please view in `assets/add_blue_to_cart.mp4`)_

![In the Cart](src/assets/in_cart.png)

---
