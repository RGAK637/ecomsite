# Shopper - E-Commerce Fashion Store

A modern, responsive e-commerce web application built with Next.js 14 and TypeScript. Browse the latest fashion trends for men, women, and kids.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Product Catalog** - Browse 36 products across Men, Women, and Kids categories
- **Product Details** - View detailed product information with multiple images
- **Shopping Cart** - Add/remove items with real-time cart updates
- **User Authentication** - Login and signup pages (UI ready)
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Static Export** - Pre-rendered pages for fast loading and SEO
- **Type Safety** - Full TypeScript implementation

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules
- **State Management:** React Context API
- **Deployment:** Static Export (Docker, Vercel, GitHub Pages)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RGAK637/ecomsite.git
   cd ecomsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Run Production Build

```bash
npm run start
```

## Project Structure

```
ecomsite/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Navbar, Footer)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── cart/                    # Shopping cart page
│   ├── login/                   # Authentication page
│   ├── mens/                    # Men's category
│   ├── womens/                  # Women's category
│   ├── kids/                    # Kids category
│   └── product/[id]/            # Product detail pages
│
├── components/                   # Reusable UI components
│   ├── Navbar/                  # Navigation bar
│   ├── Footer/                  # Site footer
│   ├── Hero/                    # Hero banner section
│   ├── Item/                    # Product card
│   ├── Popular/                 # Popular products section
│   ├── Offers/                  # Promotional offers
│   ├── NewCollections/          # New arrivals section
│   ├── Newsletter/              # Email subscription
│   ├── ShopCategory/            # Category product grid
│   └── ProductDisplay/          # Product detail view
│
├── context/                      # React Context providers
│   └── ShopContext.tsx          # Cart & product state
│
├── data/                         # Static data
│   └── products.ts              # Product catalog
│
├── types/                        # TypeScript definitions
│   └── index.ts                 # Shared interfaces
│
└── public/
    └── assets/                   # Static assets (images, icons)
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build -t shopper .

# Run the container
docker run -p 3000:3000 shopper
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, popular items, offers, and new collections |
| `/mens` | Men's fashion category |
| `/womens` | Women's fashion category |
| `/kids` | Kids' fashion category |
| `/product/[id]` | Individual product details |
| `/cart` | Shopping cart with checkout |
| `/login` | User authentication |

## Component Architecture

### State Management

The app uses React Context API for global state:

```typescript
interface ShopContextType {
  allProducts: Product[];
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartItems: () => number;
  getTotalCartAmount: () => number;
}
```

### Product Type

```typescript
interface Product {
  id: number;
  name: string;
  category: 'women' | 'men' | 'kid';
  image: string;
  new_price: number;
  old_price: number;
}
```

## Customization

### Adding New Products

Edit `data/products.ts` to add products:

```typescript
{
  id: 37,
  name: "Product Name",
  category: "women", // or "men" or "kid"
  image: "/assets/product_37.png",
  new_price: 59.99,
  old_price: 79.99,
}
```

### Styling

Each component uses CSS Modules for scoped styling. Modify the corresponding `.module.css` file to customize appearance.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Product images and design inspiration from various e-commerce platforms
- Built with [Next.js](https://nextjs.org/) by Vercel
