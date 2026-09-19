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
		"content": `<style>.h1b0u6jlb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.517 21.517 0 0 0 5.148 34.36L2.5 45.5l11.14-2.648A21.504 21.504 0 1 0 24 2.5Z");
}

.tl7k2u8sv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.95 24a6 6 0 1 1 0 12h-9.9V12h9.9a6 6 0 1 1 0 12Zm-.081 0h-9.488");
}
</style><path class="tl7k2u8sv"/><path class="h1b0u6jlb"/>`,
		"fallback": "arcticons:whatsappbusiness",
	});
}

export default Component;
