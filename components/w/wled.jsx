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
		"content": `<style>.rommq96xd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.583 33.75H17.5v5.417a1.083 1.083 0 0 1-1.083 1.083H5.583A1.083 1.083 0 0 1 4.5 39.167v-4.334a1.083 1.083 0 0 1 1.083-1.083M24 20.75v11.917a1.083 1.083 0 0 1-1.083 1.083H17.5h0V21.833a1.083 1.083 0 0 1 1.083-1.083zm18.417-6.5H30.5h0V8.833a1.083 1.083 0 0 1 1.083-1.083h10.834A1.083 1.083 0 0 1 43.5 8.833v4.334a1.083 1.083 0 0 1-1.083 1.083M24 27.25V15.333a1.083 1.083 0 0 1 1.083-1.083H30.5v11.917a1.083 1.083 0 0 1-1.083 1.083z");
}
</style><path class="rommq96xd"/>`,
		"fallback": "arcticons:wled",
	});
}

export default Component;
