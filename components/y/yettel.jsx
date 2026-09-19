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
		"content": `<style>.j7aiyhb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.453 4.276h6.449l10.918 19.71l10.888-19.71h6.51l-14.37 24.616v14.384H20.76V28.892ZM35.07 40.59a2.74 2.74 0 1 1-2.74-2.74a2.74 2.74 0 0 1 2.74 2.74");
}
</style><path class="j7aiyhb0g"/>`,
		"fallback": "arcticons:yettel",
	});
}

export default Component;
