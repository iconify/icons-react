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
		"content": `<style>.e7plbn_4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.267 18.851l-8.936 8.936a2.68 2.68 0 0 0 3.789 3.788c3.37-3.37 3.53-3.701 12.234-12.234a5.472 5.472 0 1 0-7.739-7.738L14.493 23.725a8.362 8.362 0 0 0 11.826 11.826l7.495-7.496");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="e7plbn_4l"/><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:xclipper",
	});
}

export default Component;
