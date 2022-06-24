import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

//this component consist of the layout like image, title, description,etc for one particular products
//destructuring of {product} is used instead of props to avoid repetition. 
//for the styles, import useStyles (which is like a hook because of the use in naming convention) from styles without extension.
//declare a variables classes  and call useStyles as a function (.i.e. which equals the useStyles()). 


const Product = ({product, onAddToCart}) => {
const classes = useStyles();


  return (
  <Card className={classes.root}>
    <CardMedia className={classes.media} image = {product.image.url}  title={product.name} />
<CardContent>
    <div className={classes.cardContent}>
        <Typography variant='h5' gutterBottom>
            {product.name}
        </Typography>

        <Typography variant='h5'  >
            {product.price.formatted_with_symbol}
        </Typography>
    </div>

    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary' />

    </CardContent>
 
<CardActions disableSpacing className={classes.cardActions}>
    <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
<AddShoppingCart />
    </IconButton>
    </CardActions> 
  </Card>
  )
}

export default Product; //rendered in Products.jsx