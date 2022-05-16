import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'David',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 127,
      countInStock: 3,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'High quality shirt from nike',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 223,
      countInStock: 19,
      brand: 'Adidas',
      rating: 1.5,
      numReviews: 98,
      description: 'High quality shirt from Adidas',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 0,
      brand: 'Nike',
      rating: 5.0,
      numReviews: 32,
      description: 'High quality pants from Nike',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pants',
      slug: 'adidas-fit-pants',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 10,
      brand: 'Adidas',
      rating: 2.5,
      numReviews: 27,
      description: 'High quality pants from Adidas',
    },
    {
      // _id: '5',
      name: 'Puma Shirt',
      slug: 'puma-shirt',
      category: 'Shirts',
      image: '/images/p5.jpg',
      price: 82,
      countInStock: 24,
      brand: 'Puma',
      rating: 3.5,
      numReviews: 23,
      description: 'High quality shirt from Puma',
    },
    {
      // _id: '6',
      name: 'Puma Pants',
      slug: 'puma-pants',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 59,
      countInStock: 34,
      brand: 'Puma',
      rating: 0.5,
      numReviews: 10,
      description: 'High quality pants from Puma',
    },
  ],
};

export default data;
