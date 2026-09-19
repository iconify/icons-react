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
		"content": `<style>.jry9djbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.949 6.675L24 17.625L13.051 6.674M24 3.5v41M44.5 24h-41m31.449 17.325L24 30.376L13.051 41.325m28.274-6.376L30.376 24l10.949-10.949M6.675 34.949L17.625 24L6.674 13.051");
}
</style><path class="jry9djbqu"/>`,
		"fallback": "arcticons:xed-editor",
	});
}

export default Component;
