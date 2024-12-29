import type { APIRoute } from 'astro';

const product = [
    {
      name: "Camiseta Azul",
      stock: 20,
      price: 19.99,
      orderFinish: false,
      stockStart: 30,
      date: "2023-11-22"
    },
    {
      name: "Pantalón Negro",
      stock: 15,
      price: 39.99,
      orderFinish: true,
      stockStart: 20,
      date: "2023-12-05"
    },
    {
      name: "Zapatos Deportivos",
      stock: 4,
      price: 59.99,
      orderFinish: false,
      stockStart: 10,
      date: "2023-11-28"
    }
    ,
    {
      name: "short Negro",
      stock: 25,
      price: 19.99,
      orderFinish: true,
      stockStart: 25,
      date: "2023-12-05"
    },
    {
      name: "Bolso Deportivos",
      stock: 50,
      price: 159.99,
      orderFinish: true,
      stockStart: 50,
      date: "2023-11-28"
    }
]

export const GET: APIRoute = async ({ params, request }) => {
    
    return new Response(
        JSON.stringify(product),
        {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        }
      )
};