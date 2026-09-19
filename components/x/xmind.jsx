import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aghvn85jk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.779 17.953c-.307-2.698-.15-5.46.494-8.163a23.7 23.7 0 0 0-9.367-4.29a17.74 17.74 0 0 0 2.267 17.6a17.74 17.74 0 0 0 16.41 6.747a23.65 23.65 0 0 0-1.75-10.24a23.66 23.66 0 0 1-18.102-9.23m-5.51 19.67c.307 2.698.15 5.46-.494 8.163a23.7 23.7 0 0 0 9.367 4.29a17.74 17.74 0 0 0-2.267-17.6a17.74 17.74 0 0 0-16.41-6.747a23.65 23.65 0 0 0 1.75 10.24a23.66 23.66 0 0 1 18.102 9.23");
}
</style><path class="aghvn85jk"/>`,
		"fallback": "arcticons:xmind",
	});
}

export default Component;
