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
		"content": `<style>.zapiuwbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.36 43.5l16.36-39H13.6l4.45 8.9l-8.77 8.9h13.87");
}
</style><path class="zapiuwbfi"/>`,
		"fallback": "arcticons:wise",
	});
}

export default Component;
