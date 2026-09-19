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
		"content": `<style>.j_42ulb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M25.796 19v10m2.876-10l6.625 10m0-10l-6.625 10");
}

.u64aich5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.703 19l-2.5 10l-2.5-10l-2.5 10l-2.5-10");
}
</style><path class="j_42ulb5v"/><path class="u64aich5z"/>`,
		"fallback": "arcticons:wix-owner",
	});
}

export default Component;
