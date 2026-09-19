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
		"content": `<style>.mj3yjac0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h37V13c0 4.415-3.585 8-8 8h-29zm37 37h-37V35c0-4.415 3.585-8 8-8h29z");
}
</style><path class="mj3yjac0e"/>`,
		"fallback": "arcticons:zeal",
	});
}

export default Component;
