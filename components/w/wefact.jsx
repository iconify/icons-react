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
		"content": `<style>.tq7sw4bna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.053 24.351L13.172 42.5l8.592-26.128L31.321 42.5l12.626-37");
}
</style><path class="tq7sw4bna"/>`,
		"fallback": "arcticons:wefact",
	});
}

export default Component;
