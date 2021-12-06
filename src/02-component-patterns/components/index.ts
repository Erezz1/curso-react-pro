import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductCard as ProductCardHOC } from './ProductCard';
import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons
});

export {
	ProductButtons,
	ProductImage,
	ProductTitle
};

export default ProductCard;
