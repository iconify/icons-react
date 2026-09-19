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
		"content": `<style>.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.y1-taprgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.872 24.788a2.25 2.25 0 0 1 2.25-2.25h0m-2.25 0V28.5m-14.162-9h5.963l-5.963 9h5.963m5.683-1.135a2.25 2.25 0 0 1-1.955 1.135h0a2.25 2.25 0 0 1-2.25-2.25v-1.462a2.25 2.25 0 0 1 2.25-2.25h0a2.25 2.25 0 0 1 2.25 2.25v.73h-4.5m10.639-.73a2.25 2.25 0 0 1 4.5 0v1.462a2.25 2.25 0 0 1-4.5 0z");
}
</style><path class="hzpqnlmob"/><path class="y1-taprgu"/>`,
		"fallback": "arcticons:zero",
	});
}

export default Component;
