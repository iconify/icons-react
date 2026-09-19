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
		"content": `<style>.jo3zqub6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24.306h-7.843l-4.355-7.774l-6.398 21.485l-6.979-28.034l-5.582 14.323H4.5");
}
</style><path class="jo3zqub6y"/>`,
		"fallback": "arcticons:youtify",
	});
}

export default Component;
