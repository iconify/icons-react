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
		"content": `<style>.tyc91ubfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.902 5.42c6.818-.31-4.485 13.945.499 14.499c4.983.553 8.589-6.922 11.123-15.419c-9.774 34.116-14.632 41.992-19.178 38.087C9.8 38.68 23.276 25.684 34.56 26.516");
}
</style><path class="tyc91ubfr"/>`,
		"fallback": "arcticons:yape",
	});
}

export default Component;
