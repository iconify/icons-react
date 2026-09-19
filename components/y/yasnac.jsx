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
		"content": `<style>.oazw04shg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.381 24.026V10.365L24 4.5l15.619 5.865v13.66C39.14 33.028 32.03 41.566 24 43.5C15.969 41.565 8.86 33.027 8.381 24.026");
}

.ukj_7hb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.296 18.865l-9.403 9.404l-5.196-5.304");
}
</style><path class="ukj_7hb7x"/><path class="oazw04shg"/>`,
		"fallback": "arcticons:yasnac",
	});
}

export default Component;
