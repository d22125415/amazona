import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Luis',
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
      //_id: '1',
      name: 'Adidas Slim shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: 'images/p1.jpg',
      price: 100,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 20,
      description: 'shirt produced by small human ;)',
    },
    {
      //_id: '2',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: 'images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'shirt produced by small human ;)',
    },
    {
      //_id: '3',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-shirt',
      category: 'Pants',
      image: 'images/p3.jpg',
      price: 60,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'pants produced by small human ;)',
    },
    {
      //_id: '4',
      name: 'Nike Slim pants',
      slug: 'nike-slim-pants',
      category: 'Shirts',
      image: 'images/p4.jpg',
      price: 25,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      description: 'pants produced by small human ;)',
    },
  ],
};

export default data;
