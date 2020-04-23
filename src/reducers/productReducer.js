import {GET_PRODUCTS_SUCCESS} from "../actions/types";

const initialState = {
  products: [
    {
      id: 1,
      name: "Brocolli - 1 Kg",
      price: 120,
      discount: 100,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      category: "vegetables"
    },
    {
      id: 2,
      name: "Cauliflower - 1 Kg",
      price: 60,
      discount: 40,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
      category: "vegetables"
    },
    {
      id: 3,
      name: "Cucumber - 1 Kg",
      price: 48,
      discount: 40,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
      category: "vegetables"
    },
    {
      id: 4,
      name: "Beetroot - 1 Kg",
      price: 32,
      discount: 20,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
      category: "vegetables"
    },
    {
      id: 5,
      name: "Carrot - 1 Kg",
      price: 56,
      discount: 50,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
      category: "vegetables"
    },
    {
      id: 6,
      name: "Tomato - 1 Kg",
      price: 16,
      discount: 10,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
      category: "vegetables"
    },
    {
      id: 7,
      name: "Beans - 1 Kg",
      price: 82,
      discount: 60,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
      category: "vegetables"
    },
    {
      id: 8,
      name: "Brinjal - 1 Kg",
      price: 35,
      discount: 34,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
      category: "vegetables"
    },
    {
      id: 9,
      name: "Capsicum",
      price: 60,
      discount: 60,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
      category: "vegetables"
    },
    {
      id: 10,
      name: "Mushroom - 1 Kg",
      price: 75,
      discount: 60,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
      category: "vegetables"
    },
    {
      id: 11,
      name: "Potato - 1 Kg",
      price: 22,
      discount: 15,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
      category: "vegetables"
    },
    {
      id: 12,
      name: "Pumpkin - 1 Kg",
      price: 48,
      discount: 34,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
      category: "vegetables"
    },
    {
      id: 13,
      name: "Corn - 1 Kg",
      price: 75,
      discount: 50,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
      category: "vegetables"
    },
    {
      id: 14,
      name: "Onion - 1 Kg",
      price: 14,
      discount: 12,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
      category: "vegetables"
    },
    {
      id: 15,
      name: "Apple - 1 Kg",
      price: 72,
      discount: 60,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
      category: "fruits"
    },
    {
      id: 16,
      name: "Banana - 1 Kg",
      price: 45,
      discount: 40,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
      category: "fruits"
    },
    {
      id: 17,
      name: "Grapes - 1 Kg",
      price: 60,
      discount: 60,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
      category: "fruits"
    },
    {
      id: 18,
      name: "Mango - 1 Kg",
      price: 75,
      discount: 50,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
      category: "fruits"
    },
    {
      id: 19,
      name: "Musk Melon - 1 Kg",
      price: 36,
      discount: 50,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
      category: "fruits"
    },
    {
      id: 20,
      name: "Orange - 1 Kg",
      price: 75,
      discount: 50,
      image:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
      category: "fruits"
    }
  ] 
};


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};