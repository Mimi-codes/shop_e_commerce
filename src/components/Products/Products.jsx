import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
// import Product from './Product/Product'; 
import useStyles from './styles';

//dummy array of products, real products wll later be fetched from commerce.js
// const products = [
    // { id: 1,
    // name: 'Shoes',
    // description: 'Running shoes',
    // price: '#50',
    // image: 'https://images-na.ssl-images-amazon.com/images/I/71XZSQ8whAL.__AC_SX395_SY395_QL70_FMwebp_.jpg'    
// },
    
    // { id: 2,
        // name: 'Handbag',
        // description: 'Handbag',
        // price: '#50', 
        // image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/P/2684_1627342292.jpg'
        // }
// ];



const Products = ({products, onAddToCart}) => {
    const classes = useStyles();

    return (
<main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify='center' spacing={4}>
{products.map((product) => (
    <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
))}
    </Grid>
</main>
    )
}

export default Products; //rendered in App.js