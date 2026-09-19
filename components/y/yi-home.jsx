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
		"content": `<style>.crf0mcbbl {
  width: 22.115px;
  height: 32.823px;
  x: 12.988px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 11.057px;
}

.f9i8pu8tc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.898 43.5h22.204");
}

.vg44ju7oj {
  cx: 24px;
  cy: 16.214px;
  r: 5.611px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="crf0mcbbl"/><path class="f9i8pu8tc"/><circle class="vg44ju7oj"/>`,
		"fallback": "arcticons:yi-home",
	});
}

export default Component;
