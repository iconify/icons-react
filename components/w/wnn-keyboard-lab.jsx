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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kwlmfd-3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.503 11.516c-4.389-1.856-5.812 6.41-6.095 8.528c-.325 2.424-.152 27.62 11.819.83c-2.674 15.498 1.018 25.59 13.563 2.286");
}
</style><circle class="cpk0fnbgt"/><path class="kwlmfd-3u"/>`,
		"fallback": "arcticons:wnn-keyboard-lab",
	});
}

export default Component;
