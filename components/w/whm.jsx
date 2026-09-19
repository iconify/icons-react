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
		"content": `<style>.pt3rbpbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.25 37.351V26.67L24 21.33l-9.25 5.34v10.681L24 42.692z");
}

.rl53icbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.33V10.649l-9.25-5.341l-9.25 5.341V21.33l9.25 5.34zm18.5 0V10.649l-9.25-5.341L24 10.649V21.33l9.25 5.34z");
}
</style><path class="rl53icbth"/><path class="pt3rbpbhz"/>`,
		"fallback": "arcticons:whm",
	});
}

export default Component;
