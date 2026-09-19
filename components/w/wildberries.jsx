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
		"content": `<style>.f7b-77l6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.06 24a3.713 3.713 0 1 1 0 7.426h-6.126V16.573h6.126a3.713 3.713 0 1 1 0 7.427m0-.001h-6.126m-2.855-7.424l-3.713 14.852l-3.713-14.852l-3.713 14.852l-3.713-14.852");
}

.j3s9ivbxi {
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
</style><path class="f7b-77l6g"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:wildberries",
	});
}

export default Component;
