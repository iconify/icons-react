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
		"content": `<style>.mco-mcf_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.4c10.5-10.3 28.3-10.3 39-.1m-32.1 7a18.51 18.51 0 0 1 25.2-.2M19 32.5h10l-5.1 4.8Z");
}
</style><path class="mco-mcf_b"/>`,
		"fallback": "arcticons:wlanscanner",
	});
}

export default Component;
