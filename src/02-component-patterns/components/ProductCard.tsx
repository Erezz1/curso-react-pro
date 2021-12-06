import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
};

export const ProductCard = ({ children, product, className, style }: Props) => {

	const { counter, increaseBy } = useProduct();

	return (
		<ProductContext.Provider value={{
			counter,
			increaseBy,
			product
		}}>
			<div style={ style } className={ `${ styles.productCard } ${ className }` }>
				{ children }
			</div>
		</ProductContext.Provider>
	)
}
