
export default function handler(req, res) {
  const products = [

    // Product No 1

    {
      id: 1,
      name: "Perfume",
      price: 2500,
      description: "A long lasting fragrance that keeps you fresh all day.",
      image: "https://t4.ftcdn.net/jpg/06/93/07/29/360_F_693072910_XXt8dkPDWzSSep5tG2UkOIwYQpmIn0Oh.jpg",
      inventory: 20,
    },

    // Product No 2

    {
      id: 2,
      name: "Watch",
      price: 300,
      description: "A stylish and elegant watch suitable for any occasion.",
      image: "https://assets.wahsoshiok.com/wp-content/uploads/2022/10/casio-collection-duro-mdv-107-1a2vef-218691-278936_860.jpg",
      inventory: 12,
    },
    // Product No 3
    {
      id: 3,
      name: "Shoes",
      price: 1500,
      description: "Comfortable and durable shoes for everyday wear.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/2/JX/KX/QE/148024991/images-11--500x500.jpeg",
      inventory: 20,
    },

    // Product No 4

    {
      id: 4,
      name: "Bag",
      price: 600,
      description: "A fashionable handbag with ample space for essentials.",
      image: "https://5.imimg.com/data5/VU/PH/FZ/SELLER-71697535/ladies-fashion-hand-bag.jpg",
      inventory: 15,
    },

    // Product No 5

    {
      id: 5,
      name: "Makeup",
      price: 2000,
      description: "A complete makeup kit to enhance your beauty effortlessly.",
      image: "https://digidukaan.s3.ap-south-1.amazonaws.com/1239330531119761.jpg",
      inventory: 10,
    },

    // Product No 6

    {
      id: 6,
      name: "Dress",
      price: 800,
      description: "A stunning dress that blends elegance and comfort.",
      image: "https://s.alicdn.com/@sc04/kf/H9c2d15bbfc374bc9843d44ac47b698188.jpg",
      inventory: 20,
    },

    // Product No 7

    {
      id: 7,
      name: "headphone",
      price: 2400,
      description: "High quality wireless headphones with noise cancellation.",
      image: "https://shopivate.pk/wp-content/uploads/2023/12/1000320434.jpg",
      inventory: 8,
    },

    // Product No 8

    {
      id: 8,
      name: "laptop",
      price: 50000,
      description: "A powerful laptop with high performance capabilities.",
      image: "https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg",
      inventory: 10,
    },

    // Product No 9

    {
      id: 9,
      name: "Vitamin Serum",
      price: 400,
      description: "A skin brightening serum infused with Vitamin C for glowing skin.",
      image: "https://m.media-amazon.com/images/I/71uJKSEAiRL._SX425_.jpg",
      inventory: 25,
    },

    // Product No 10

    {
      id: 10,
      name: "Jeans 1",
      price: 900,
      description: "Classic slim-fit jeans made from high-quality denim.",
      image: "https://m.media-amazon.com/images/I/81mB05hd7EL._AC_SX425_.jpg",
      inventory: 5,
    },
    
    // Product No 11

    {
      id: 11,
      name: "Latest Jeans",
      price: 900,
      description: "Trendy and comfortable jeans perfect for casual wear.",
      image: "https://m.media-amazon.com/images/I/61w44cFlCtL._AC_SX342_.jpg",
      inventory: 12,
    },
    
    // Product No 12

    {
      id: 12,
      name: "Women Shirt",
      price: 1200,
      description: "Stylish and breathable womens shirt for everyday fashion.",
      image: "https://m.media-amazon.com/images/I/51ZfIVQYwYL._AC_SX466_.jpg",
      inventory: 5,
    },

    // Product No 13

    {
      id: 13,
      name: "Shirt",
      price: 1500,
      description: "Classic and elegant shirt designed for comfort and style.",
      image: "https://m.media-amazon.com/images/I/71r-ot4DhqL._AC_SX522_.jpg",
      inventory: 15,
    },

    // Product No 14

    {
      id: 14,
      name: "Mans Shirt",
      price: 2000,
       description: "A premium men's shirt that combines style with durability.",
      image: "https://m.media-amazon.com/images/I/61Nn7FcOqBL._AC_SX522_.jpg",
      inventory: 10,
    },

    // Product No 15

    {
      id: 15,
      name: "Premium Perfume",
      price: 3000,
      description: "A luxurious perfume with a long lasting, captivating fragrance.",
      image: "https://m.media-amazon.com/images/I/51nR2hm2XjL._SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 13,
    },
    
    // Product No 16

    {
      id: 16,
      name: "Bluetooth Earbuds",
      price: 4500,
      description: "High quality Bluetooth earbuds with immersive sound and deep bass.",
      image: "https://m.media-amazon.com/images/I/71gl7XNGrPL._AC_SX425_.jpg",
      inventory: 15,
    },

    // Product No 17

    {
      id: 17,
      name: "Christmas Sweater",
      price: 5000,
      description: "Festive Christmas sweater to keep you warm and stylish.",
      image: "https://m.media-amazon.com/images/I/81RHGDh2k4L._AC_SX342_.jpg",
      inventory: 8,
    },

    // Product No 18

    {
      id: 18,
      name: "Flip Flops",
      price: 1000,
      description: "Lightweight and comfortable flip flops for everyday use.",
      image: "https://m.media-amazon.com/images/I/71l1PKIQnbL._AC_SX500_.jpg",
      inventory: 5,
    },

    // Product No 19

    {
      id: 19,
      name: "Mens Slipper",
      price: 1800,
      description: "Durable and stylish flip flops for men, ideal for casual wear.",
      image: "https://m.media-amazon.com/images/I/71fCQwiHVjL._AC_SX500_.jpg",
      inventory: 10,
    },

    // Product No 20

    {
      id: 20,
      name: "Mens Sandals",
      price: 2500,
      description: "Comfortable and rugged sandals designed for outdoor adventures.",
      image: "https://m.media-amazon.com/images/I/71qVBMHgVaL._AC_SX500_.jpg",
      inventory: 26,
    },

    // Product No 21

    {
      id: 21,
      name: "Bulliant Belt",
      price: 2200,
      description: "A high quality leather belt with a sleek and stylish design.",
      image: "https://m.media-amazon.com/images/I/81katFnek+L._AC_SX466_.jpg",
      inventory: 50,
    },
    
    // Product No 22

    {
      id: 22,
      name: "Rollator Walkers",
      price: 3000,
      description: "A sturdy rollator walker designed for enhanced mobility support.",
      image: "https://m.media-amazon.com/images/I/718P8UAo70L._AC_SX522_.jpg",
      inventory: 20,
    },

    // Product No 23

    {
      id: 23,
      name: "Phone Docking",
      price: 5000,
      description: "A multifunctional docking station to keep your phone charged and organized.",
      image: "https://m.media-amazon.com/images/I/81YNtyZETaL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 10,
    },

    // Product No 24

    {
      id: 24,
      name: "Leg Massager",
      price: 8000,
      description: "A relaxing leg massager that helps relieve muscle tension and fatigue.",
      image: "https://m.media-amazon.com/images/I/71uWU8FbFvL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 15,
    },

    // Product No 25

    {
      id: 25,
      name: "Condense Microphone",
      price: 5500,
      description: "A professional condenser microphone for high quality audio recording.",
      image: "https://m.media-amazon.com/images/I/61ms7tcyIlL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 12,
    },
    
    // Product No 26

    {
      id: 26,
      name: "Steel Bottle",
      price: 3500,
      description: "An insulated stainless steel bottle that keeps drinks hot or cold for hours.",
      image: "https://m.media-amazon.com/images/I/61Qope4Mc6L._AC_SX522_.jpg",
      inventory: 30,
    },

    // Product No 27

    {
      id: 27,
      name: "Plant Cream",
      price: 1500,
      description: "A natural plant based cream that hydrates and nourishes the skin.",
      image: "https://m.media-amazon.com/images/I/41TYrmBFR1L._SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 10,
    },

    // Product No 28

    {
      id: 28,
      name: "Golf Shoes",
      price: 4000,
      description: "Durable and comfortable golf shoes designed for performance on the course.",
      image: "https://m.media-amazon.com/images/I/61eyLZlzaZL._AC_SY500_.jpg",
      inventory: 10,
    },

    // Product No 29

    {
      id: 29,
      name: "Thestron Shoes",
      price: 5000,
      description: "Lightweight and stylish Thestron shoes for ultimate comfort and grip.",
      image: "https://m.media-amazon.com/images/I/61re3b20HdL._AC_SY500_.jpg",
      inventory: 10,
    },

    // Product No 30

    {
      id: 30,
      name: "Ribbed Beanie",
      price: 1500,
      description: "Lightweight and stylish Thestron shoes for ultimate comfort and grip.",
      image: "https://m.media-amazon.com/images/I/81VGJJD4AvL._AC_SX385_.jpg",
      inventory: 8,
    },

    // Product No 31

    {
      id: 31,
      name: "Blocking Glasses",
      price: 1600,
      description: "High quality blue light blocking glasses to protect your eyes from digital strain.",
      image: "https://m.media-amazon.com/images/I/61J+61LRLkL._AC_SX522_.jpg",
      inventory: 6,
    },

     // Product No 32

     {
      id: 32,
      name: "Women Purse",
      price: 3500,
      description: "Elegant and spacious purse with multiple compartments for daily essentials.",
      image: "https://m.media-amazon.com/images/I/71Za5h9bE8L._AC_SX500_.jpg",
      inventory: 5,
    },
    
    // Product No 33

    {
      id: 33,
      name: "Makeup Brush",
      price: 2000,
      description: "Soft and high quality makeup brushes for a flawless blending experience.",
      image: "https://m.media-amazon.com/images/I/7191qjNctLL._SX425_.jpg",
      inventory: 20,
    },

     // Product No 34

     {
      id: 34,
      name: "Cheeks Blush",
      price: 800,
      description: "Smooth and pigmented blush that enhances your natural beauty.",
      image: "https://m.media-amazon.com/images/I/41dtgZsjqML._SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 12,
    },

     // Product No 35

     {
      id: 35,
      name: "Baby Girl",
      price: 2200,
      description: "Adorable and comfortable frock set for baby girls.",
      image: "https://m.media-amazon.com/images/I/616kiconSTL._AC_SX522_.jpg",
      inventory: 10,
    },

     // Product No 36

     {
      id: 36,
      name: "Smart Phone",
      price: 60000,
      description: "Latest smartphone with advanced features and a high-resolution display.",
      image: "https://m.media-amazon.com/images/I/61a4Jm4ZcjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 15,
    },

     // Product No 37

     {
      id: 37,
      name: "Foundation Stick",
      price: 2000,
      description: "A smooth and long lasting foundation stick for a natural glow.",
      image: "https://m.media-amazon.com/images/I/61Kkg95A2YL._SX425_.jpg",
      inventory: 25,
    },

     // Product No 38

     {
      id: 38,
      name: "Mens Watch",
      price: 4500,
      description: "Stylish and durable mens watch with a modern design.",
      image: "https://m.media-amazon.com/images/I/71iXyzWiZrL._AC_SY500_.jpg",
      inventory: 10,
    },

     // Product No 39

     {
      id: 39,
      name: "Walking Shoes",
      price: 1500,
      description: "Comfortable and light weight walking shoes for everyday use.",
      image: "https://m.media-amazon.com/images/I/816lkFTOxTL._AC_SX500_.jpg",
      inventory: 5,
    },

     // Product No 40

     {
      id: 40,
      name: "Lipstick Set",
      price: 1600,
      description: "A set of vibrant and long lasting lipsticks for a bold look.",
      image: "https://m.media-amazon.com/images/I/61ru+G2pXAL._SX425_.jpg",
      inventory: 20,
    },

    // Product No 41

    {
      id: 41,
      name: "Phone Holder",
      price: 600,
      description: "A durable and adjustable phone holder for hands free convenience.",
      image: "https://m.media-amazon.com/images/I/71tA-XBMPDL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 20,
    },

     // Product No 42

     {
      id: 42,
      name: "Fitness Watch",
      price: 6000,
      description: "A smart fitness watch with health tracking and activity monitoring.",
      image: "https://m.media-amazon.com/images/I/71XA0QCW5lL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 15,
    },
    
    // Product No 43 

    {
      id: 43,
      name: "Plavict Boys",
      price: 2400,
      description: "Stylish and comfortable clothing for boys with modern designs.",
      image: "https://m.media-amazon.com/images/I/71BnkgnCxXL._AC_SX466_.jpg",
      inventory: 8,
    },

     // Product No 44

     {
      id: 44,
      name: "Womens Shoes",
      price: 1000,
      description: "Trendy and comfortable shoes designed for women.",
      image: "https://m.media-amazon.com/images/I/61HyLLS0EwL._AC_SY500_.jpg",
      inventory: 20,
    },

     // Product No 45

     {
      id: 45,
      name: "School Beg",
      price: 2200,
      description: "A spacious and durable school bag with multiple compartments.",
      image: "https://m.media-amazon.com/images/I/61syKSvM18L._AC_SX466_.jpg",
      inventory: 5,
    },

     // Product No 46

     {
      id: 46,
      name: "Toddler Girls",
      price: 2000,
      description: "Adorable toddler outfit set perfect for little girls.",
      image: "https://m.media-amazon.com/images/I/71vnB6V9bRL._AC_SX522_.jpg",
      inventory: 5,
    },

     // Product No 47

     {
      id: 47,
      name: "Cookware Sets",
      price: 15000,
      description: "Premium non stick cookware set for hassle free cooking.",
      image: "https://m.media-amazon.com/images/I/714yImd8AaL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 16,
    },

     // Product No 48

     {
      id: 48,
      name: "Sanmio Baby",
      price: 2600,
      description: "Soft and cozy baby clothing set for infants.",
      image: "https://m.media-amazon.com/images/I/61CBRaNTeEL._AC_SX425_.jpg",
      inventory: 12,
    },

     // Product No 49

     {
      id: 49,
      name: "Silicone Utensil",
      price: 8000,
      description: "High quality silicone kitchen utensils set for effortless cooking.",
      image: "https://m.media-amazon.com/images/I/71GhOhol0YL._AC_SX522_.jpg",
      inventory: 10,
    },

     // Product No 50

     {
      id: 50,
      name: "Dinner Set",
      price: 12000,
      description: "Elegant black dinnerware set for a stylish dining experience.",
      image: "https://m.media-amazon.com/images/I/71gNtDjQ5mL._AC_SX522_.jpg",
      inventory: 18,
    },

    // Product No 51

    {
      id: 51,
      name: "Ceramic Vase",
      price: 1200,
      description: "A minimalistic white ceramic vase for home decor.",
      image: "https://m.media-amazon.com/images/I/61KVbKSnozL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 12,
    },

    // Product No 52

    {
      id: 52,
      name: "Bed Sheets",
      price: 2200,
      description: "Soft and comfortable bed sheets for a restful sleep.",
      image: "https://m.media-amazon.com/images/I/71+r5j-y+LL._AC_SY300_SX300_.jpg",
      inventory: 15,
    },

    // Product No 53

    {
      id: 53,
      name: "Vanilla Candle",
      price: 1800,
      description: "A soothing vanilla scented candle for a relaxing ambiance.",
      image: "https://m.media-amazon.com/images/I/710sHkjYI1L._AC_SX569_PIbundle-2,TopRight,0,0_SH20_.jpg",
      inventory: 8,
    },

    // Product No 54

    {
      id: 54,
      name: "Office Chair",
      price: 4000,
      description: "Ergonomic office chair designed for comfort and support.",
      image: "https://m.media-amazon.com/images/I/81HznWNJPnL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 30,
    },

    // Product No 55

    {
      id: 55,
      name: "Water Fountain",
      price: 2000,
      description: "A decorative water fountain to enhance indoor spaces.",
      image: "https://m.media-amazon.com/images/I/71qbTPILk5L._AC_SX522_.jpg",
      inventory: 13,
    },

    // Product No 56

    {
      id: 56,
      name: "Neck Releave",
      price: 3800,
      description: "A soothing heating pad for neck pain relief and relaxation.",
      image: "https://m.media-amazon.com/images/I/71W6ku1ts9L._AC_SX522_.jpg",
      inventory: 18,
    },

    // Product No 57

    {
      id: 57,
      name: "Modern Chair",
      price: 2600,
      description: "A stylish modern accent chair to elevate your home decor.",
      image: "https://m.media-amazon.com/images/I/61cTwIXKW7L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 8,
    },

    // Product No 58

    {
      id: 58,
      name: "Electric Kettle",
      price: 1800,
      description: "A high quality electric kettle for quick and efficient boiling.",
      image: "https://m.media-amazon.com/images/I/71XpMXnRY6L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      inventory: 25,
    },

    // Product No 59

    {
      id: 59,
      name: "Scented Flower",
      price: 1000,
      description: "A beautifully scented artificial flower arrangement for decoration.",
      image: "https://m.media-amazon.com/images/I/71Xp5P8iLpL._AC_SX569_.jpg",
      inventory: 27,
    },

    // Product No 60

    {
      id: 60,
      name: "Baseball Cap",
      price: 600,
      description: "A stylish and adjustable baseball cap for casual wear.",
      image: "https://m.media-amazon.com/images/I/71NsDrpUxIL._AC_SX522_.jpg",
      inventory: 15,
    },
  ];
  
  res.status(200).json(products);

}
