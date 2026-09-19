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
		"content": `<style>.a-t3b20gw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.5 26.561l-4.285 7.525h7.787l-4.286 7.525");
}

.lj4urc_st {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.303 34.086a9.197 9.197 0 1 0-2.735-17.982a13.85 13.85 0 1 0-13.22 17.982");
}
</style><path class="lj4urc_st"/><path class="a-t3b20gw"/>`,
		"fallback": "arcticons:zap",
	});
}

export default Component;
