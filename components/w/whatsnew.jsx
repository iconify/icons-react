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
		"content": `<style>.hqu_reb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.5v29m39-29v29m-7.8-29v29m-7.8-29v29m-7.8-29v29m-7.8-29v29");
}
</style><path class="hqu_reb5t"/>`,
		"fallback": "arcticons:whatsnew",
	});
}

export default Component;
