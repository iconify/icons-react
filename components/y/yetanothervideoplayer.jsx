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
		"content": `<style>.zsjo04b8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.75 7.11h-19.5L4.5 24l9.75 16.89h19.5L43.5 24ZM19.12 30.82V17.17l13.65 6.88Z");
}
</style><path class="zsjo04b8n"/>`,
		"fallback": "arcticons:yetanothervideoplayer",
	});
}

export default Component;
