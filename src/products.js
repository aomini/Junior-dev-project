const products =[
    {
       name: 'sofa',
       price:200,
       code:'sofa-101',
       id:1
    },
    {
       name: 'recliner',
       price:200,
       code:'sofa-102',
       id:2

    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:3
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:4
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:3
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:3
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:3
    },
    {
       name: 'chair',
       price:200,
       code:'sofa-103',
       id:3
    },
]

export const fetchProducts = new Promise((resolve) =>
  setTimeout(() => {
    return resolve(products);
  }, 5000)
);