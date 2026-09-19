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
		"content": `<style>.iigm4ze1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.25 5.5H6.5v37h8.75m17.5 0h8.75v-37h-8.75m-1.375 7.75L24 24l-7.375-10.75M24 34.75V24");
}
</style><path class="iigm4ze1s"/>`,
		"fallback": "arcticons:youpic",
	});
}

export default Component;
