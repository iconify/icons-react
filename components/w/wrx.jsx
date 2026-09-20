import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i8ij22bqj {
  fill: var(--svg-color--3067f0, #3067f0);
  d: path("M3.76 15.938L3 7.5l3.937 2.813zm.927 1.124L12.04 4.125l3.898 5.996l-8.814 6.941zM21 7.5L8.794 17.062H20.19zM3.563 18.188h16.875v1.687H3.563z");
}
</style><path class="i8ij22bqj"/>`,
		"fallback": "token-branded:wrx",
	});
}

export default Component;
