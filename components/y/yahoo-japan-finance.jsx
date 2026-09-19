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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.or9x_sqry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 40.21v2.29m0-37v20.135m12.334 6.275V42.5m0-37v9.346M6.253 40.836l7.219-15.958l5.658 10.687l7.723-19.58l5.389 13.113l9.524-21.91");
}
</style><rect class="j3s9ivbxi"/><path class="or9x_sqry"/>`,
		"fallback": "arcticons:yahoo-japan-finance",
	});
}

export default Component;
