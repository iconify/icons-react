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
		"content": `<style>.a-lsb4b3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.813 31.5v-15h4.911c2.776 0 5.027 2.255 5.027 5.038s-2.25 5.037-5.027 5.037h-4.91m4.91 0l4.91 4.921m-13.01-9.933L20.53 31.5l-3.093-9.937l-3.094 9.937l-3.094-9.937M26.813 16.5h-2.146");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="a-lsb4b3x"/>`,
		"fallback": "arcticons:wordreference",
	});
}

export default Component;
