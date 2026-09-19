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
		"content": `<style>.vh7glnnku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 14.25H11l-6.5 6.5l13 13l13-13l-6.5-6.5l-6.5 6.5l13 13l13-13l-6.5-6.5h-6.5");
}
</style><path class="vh7glnnku"/>`,
		"fallback": "arcticons:weex-exchange",
	});
}

export default Component;
