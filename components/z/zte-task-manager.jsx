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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.sf1-pksdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.057 29.548a2.031 2.031 0 1 1-4.063 0a2.031 2.031 0 0 1 4.063 0M9.943 27.875h5.736l1.858-5.02h.758l2.465 6.776h.746l3.827-13.21h.946l4.293 13.21h3.304");
}
</style><path class="i9clfwm2k"/><path class="sf1-pksdz"/>`,
		"fallback": "arcticons:zte-task-manager",
	});
}

export default Component;
