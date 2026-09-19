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
		"content": `<style>.nbd6fq2dc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.583 42.5a9.25 9.25 0 0 1-6.54-15.79L31.417 5.5H16.583a9.25 9.25 0 0 0-3.224 17.92");
}

.ngzrp4bbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.641 24.58a9.25 9.25 0 0 1-3.224 17.92H16.583l21.375-21.209A9.25 9.25 0 0 0 31.416 5.5");
}
</style><path class="ngzrp4bbu"/><path class="nbd6fq2dc"/>`,
		"fallback": "arcticons:zupper",
	});
}

export default Component;
