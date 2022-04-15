import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";

const products = [
    { id: 1, name: "Spaghetti", description: "Ovapasta 160g", price: "$3.00", image: "https://www.santoslugotiendaenlinea.com.mx/attachments/shop_images/7501079001712.png"},
    { id: 2, name: "Huevo", description: "Baja California 12pz", price: "$36.00", image: "https://lh3.googleusercontent.com/glsgmb/AJtb4XAGbGm3IPhtprneg9ZmSAwukrKEJlYrRlQnMEhtwWeWEQQO4ZKpWg1a8dPYsgbGB9zyY7fCqX-GlpQZJcfQYieMEw=w296-h200-p-no"},
    { id: 3, name: "Atún", description: "Dolores enlatado agua 140g", price: "$19.90", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104540314L.jpg"},
    { id: 4, name: "Aceite", description: "Capullo canola 845ml", price: "$49.90", image: "https://www.chedraui.com.mx/medias/7502223772250-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8NjU1MTR8aW1hZ2UvanBlZ3xoNTgvaGMzLzExOTgwMjgwNDMwNjIyLmpwZ3w5NWM5ZGUzZDdmMzQzNmJkOTgxMDMzNTIxYmEwMTg1ZWFmODc4YzI4MjcwYWU4YWM2OTg2MDIzMjM4NWQ5ZDJk"},
    { id: 5, name: "Arroz", description: "Verde Valle 1kg", price: "$37.00", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750107130145L.jpg"},
    { id: 6, name: "Frijol", description: "La Sierra Bayos refritos 430g", price: "$5.50", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105242017L.jpg"},
    { id: 7, name: "Tortilla", description: "Marca propia maíz 1kg", price: "$11.90", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020045100000L.jpg"},
    { id: 8, name: "Bolillo", description: "Marca propia bolsa 4pz", price: "$7.50", image: "https://www.clementinaglutenfree.com/wp-content/uploads/2019/08/60465736_201285620843795_3305857188387356672_n-e1615853165838.jpg"},
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;