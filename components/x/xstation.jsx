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
		"content": `<style>.potxy9bnb {
  d: path("M9.556 9.483V38.28h7.097l10.052-14.91l-9.362-13.888zm18.452 0l5.096 7.557l5.095-7.557zm5.096 19.868l-6.02 8.929h12.039z");
}

.wq6wa0cjl {
  d: path("M9.72 5.686h29.002c2.2 0 4 1.8 4 4v29c0 2.201-1.8 4.001-4 4.001H9.72c-2.2 0-4-1.8-4-4V9.686c0-2.2 1.8-4 4-4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="potxy9bnb"/><path class="wq6wa0cjl"/></g>`,
		"fallback": "arcticons:xstation",
	});
}

export default Component;
