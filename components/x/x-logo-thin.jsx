import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-4s1jbms {
  fill: currentColor;
  d: path("M211.37 213.85L147.13 112.9L211 42.69a4 4 0 0 0-6-5.38l-62.32 68.59l-43.3-68.05A4 4 0 0 0 96 36H48a4 4 0 0 0-3.37 6.15l64.24 100.95L45 213.31a4 4 0 1 0 6 5.38l62.36-68.59l43.3 68.05A4 4 0 0 0 160 220h48a4 4 0 0 0 3.37-6.15M162.2 212L55.29 44H93.8l106.91 168Z");
}
</style><path class="r-4s1jbms"/>`,
		"fallback": "ph:x-logo-thin",
	});
}

export default Component;
