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
		"content": `<style>.pvfmx8kag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 15.701l-18.738 23.31L5.5 15.384q18.726-12.945 37 .317");
}
</style><path class="pvfmx8kag"/>`,
		"fallback": "arcticons:wifi-password",
	});
}

export default Component;
