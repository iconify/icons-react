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
		"content": `<style>.akmaqjb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.021 32.921a4.216 4.216 0 1 0 4.216 4.217a4.216 4.216 0 0 0-4.216-4.217m1.271.196l8.039-25.015m-2.566 20.514c-.091-.077-.188-.142-.281-.215m-6.639-2.221a10.5 10.5 0 0 0-6.515 2.399v.036m19.848-7.289a20.7 20.7 0 0 0-3.651-2.393m-6.671-2.121a20.64 20.64 0 0 0-15.992 4.514M43.5 13.674a30.6 30.6 0 0 0-6.898-4.31M29.93 7.249A30.53 30.53 0 0 0 4.5 13.674");
}
</style><path class="akmaqjb-q"/>`,
		"fallback": "arcticons:wifi-monitor-pro",
	});
}

export default Component;
