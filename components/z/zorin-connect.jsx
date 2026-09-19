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
		"content": `<style>.pm_yd1ngh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.274 19.544H43.5v17.275H33.274zm8.725-8.364H9.579v25.64m-5.079 0h21.912");
}
</style><path class="pm_yd1ngh"/>`,
		"fallback": "arcticons:zorin-connect",
	});
}

export default Component;
