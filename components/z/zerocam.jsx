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
		"content": `<style>.k9mw40byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.5 36c-6.627 0-12-5.373-12-12s5.373-12 12-12h17c6.627 0 12 5.373 12 12s-5.373 12-12 12z");
}
</style><path class="k9mw40byw"/>`,
		"fallback": "arcticons:zerocam",
	});
}

export default Component;
