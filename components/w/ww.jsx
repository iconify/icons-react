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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l5aqcdc1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.937 9.5l-4.469 13.731L24 9.5l-4.468 13.731L15.063 9.5m17.874 15.269L28.468 38.5L24 24.769L19.532 38.5l-4.469-13.731");
}
</style><path class="l5aqcdc1c"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:ww",
	});
}

export default Component;
