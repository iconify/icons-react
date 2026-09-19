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
		"content": `<style>.rd79aqojs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.8 5.5a30 30 0 0 1 29.41 24.19M12.8 13.16a22.32 22.32 0 0 1 21.54 16.53M12.8 20.81a14.67 14.67 0 0 1 13.48 8.88");
}

.tkgk5nm7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.09 41.91v-6.43h0h-15.32m11.1 3.71v-3.71");
}

.tt-hivb6e {
  cx: 13.34px;
  cy: 35.48px;
  r: 6.43px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="rd79aqojs"/><circle class="tt-hivb6e"/><path class="tkgk5nm7y"/>`,
		"fallback": "arcticons:wifikeyshare",
	});
}

export default Component;
