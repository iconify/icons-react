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
		"content": `<style>.hl1yp6bnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 30.872h11.462M12 23.915h11.462M12 16.957h4.487m27.013 7.24V9.402L30.646 16.8zm-5.396 1.956v10.43a4 4 0 0 1-4 4H8.5a4 4 0 0 1-4-4V11.417a4 4 0 0 1 4-4h29.653");
}
</style><path class="hl1yp6bnj"/>`,
		"fallback": "arcticons:writer",
	});
}

export default Component;
