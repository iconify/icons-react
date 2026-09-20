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

.swxjlcc9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 31.47l4.03-4.031a1.996 1.996 0 0 1 2.829 0l8.202 8.202a1.996 1.996 0 0 1 0 2.828l-4.031 4.032M42.5 16.53l-4.03 4.031a1.996 1.996 0 0 1-2.829 0L27.44 12.36a1.996 1.996 0 0 1 0-2.828L31.471 5.5M16.254 27.564l3.182 3.182m-1.897-5.667l3.182 3.182m-1.797-5.567l3.182 3.182m-1.597-5.367l3.182 3.182m-.997-4.767l3.182 3.182m-.797-4.567l3.182 3.182m-.697-4.467l3.182 3.182");
}
</style><rect class="j3s9ivbxi"/><path class="swxjlcc9t"/>`,
		"fallback": "arcticons:zeetle",
	});
}

export default Component;
