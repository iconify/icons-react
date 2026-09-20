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
		"content": `<style>.a9cp5dbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.002 34.553L5.547 30.08a3.58 3.58 0 0 1 0-5.062l11.478-11.525l6.974 7.004");
}

.rnyji3x5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.002 34.553l7.024-7.052L24 34.505l6.975-7.004l6.975 7.004l4.502-4.52a3.58 3.58 0 0 0 0-5.062l-11.43-11.476l-13.997 14.054V13.49");
}
</style><path class="a9cp5dbvl"/><path class="rnyji3x5i"/>`,
		"fallback": "arcticons:wemeet",
	});
}

export default Component;
