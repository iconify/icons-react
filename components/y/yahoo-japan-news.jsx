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
		"content": `<style>.b6zxprzis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 13.5h5V35c0 1.385-1.115 2.5-2.5 2.5H7A2.495 2.495 0 0 1 4.5 35V10.5h34V35c0 1.385 1.115 2.5 2.5 2.5v-24");
}

.doi4yihjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.833 22.167l-4.5-4.5L7.5 26.5m22 0L23 20l-6.5 6.5");
}

.tgv_ez0ki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 13.5h22v13h-22zm24 0h4v21h-4zm-22 15v6m3.6-6v6m3.6-6v6m3.6-6v6m3.6-6v6m3.6-6v6");
}
</style><path class="tgv_ez0ki"/><path class="b6zxprzis"/><path class="doi4yihjp"/>`,
		"fallback": "arcticons:yahoo-japan-news",
	});
}

export default Component;
