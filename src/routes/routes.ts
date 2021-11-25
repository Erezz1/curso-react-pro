import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	name: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );
const NoLazyComponent = lazy( () => import(/* webpackChunkName: "NoLazy" */ '../01-lazyload/pages/NoLazy') );

export const routes: Route[] = [
	{
		to: '/lazyload',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'LazyLayout'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazyComponent,
		name: 'No Lazy'
	},
];
