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
		"content": `<style>.ky0fwnbty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 37.145l-26.732.072C10.639 32.721 4.5 28.214 4.5 23.851c.01-4.373 6.15-8.828 12.299-13.068H43.5c-6.324 4.373-12.647 8.746-12.647 13.14S37.176 32.73 43.5 37.145m-26.62.072l14.239-14.885");
}
</style><path class="ky0fwnbty"/>`,
		"fallback": "arcticons:zerodha-kite",
	});
}

export default Component;
