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
		"content": `<style>.u8k1adbgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 17l5.571 14l5.572-14l5.571 14l5.572-14l5.571 14l5.572-14l5.57 14");
}
</style><path class="u8k1adbgc"/>`,
		"fallback": "arcticons:workmarket",
	});
}

export default Component;
