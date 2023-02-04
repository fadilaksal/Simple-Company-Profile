import { createTheme, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export function ProductListCard ({ productCount = 8 }) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 375,
                md: 760,
                lg: 1024,
                xl: 1536,
            },
        },
    });

    const products = [];

    for (let index = 0; index < productCount; index++) {
        products.push(<Grid theme={theme} item lg={3} md={4} sm={6} xs={12} key={'product-' + index}>
                        <ProductCard linkProduct={route('product.detail', {id: '1'})} />
                    </Grid>)
    }

    return (<Grid container spacing={4}>{products}</Grid>)
}