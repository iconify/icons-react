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
		"content": `<style>.a-a568vnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.372 4.5v31.87l6.986-6.939L26.464 43.5l6.291-4.067l-6.889-12.897h9.762z");
}
</style><path class="a-a568vnm"/>`,
		"fallback": "arcticons:x-server",
	});
}

export default Component;
