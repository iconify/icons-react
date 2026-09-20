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

.hnx3ezrvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.887 2.86l-12.8 40.704m16.774-39.57l-3.82 41.074m17.365-23.033L6.561 36.489");
}
</style><circle class="cpk0fnbgt"/><path class="hnx3ezrvd"/>`,
		"fallback": "arcticons:yandex-afisha",
	});
}

export default Component;
