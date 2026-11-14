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
		"content": `<style>.emcfmdb3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.251 11.322za1.5 1.5 0 0 1 2.114.185l5.142 6.128a1.5 1.5 0 0 1-.185 2.114a1.5 1.5 0 0 1-2.113-.185l-5.142-6.129a1.5 1.5 0 0 1 .184-2.113m8.427-7.071za1.5 1.5 0 0 1 2.113.185l5.142 6.129a1.5 1.5 0 0 1-.184 2.113a1.5 1.5 0 0 1-2.114-.185l-5.142-6.128a1.5 1.5 0 0 1 .185-2.114m-3.742 10.32l6.128-5.142m-11.107 9.32L6.638 16.5m10.724-9l2.681-2.249");
}
</style><path class="emcfmdb3i"/>`,
		"fallback": "uix:weightlifter",
	});
}

export default Component;
