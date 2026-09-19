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
		"content": `<style>.fi0cirdbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5C24 18.457 29.653 24 44.5 24C29.568 24 24 29.657 24 44.5C24 29.59 18.457 24 3.5 24C18.457 24 24 18.373 24 3.5");
}
</style><path class="fi0cirdbs"/>`,
		"fallback": "arcticons:zen",
	});
}

export default Component;
