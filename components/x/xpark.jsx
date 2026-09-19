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
		"content": `<style>.j9rfgbbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.279 25.347h-1.467l-1.044-2.065L42.5 9.186l-11.155-.001l-5.604 6.988l-2.977-6.988h-10.42l6.634 13.647l-2.376 2.514h1.627L5.5 38.816h11.468l7.476-9.052l3.864 9.051h10.783z");
}
</style><path class="j9rfgbbgs"/>`,
		"fallback": "arcticons:xpark",
	});
}

export default Component;
