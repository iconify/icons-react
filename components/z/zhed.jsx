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
		"content": `<style>.a9gih1brb {
  cx: 8px;
  cy: 24px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ch135fbgg {
  cx: 24px;
  cy: 8px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cylfc9fqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.5 15.5h17v17h-17z");
}

.eqgttw32j {
  cx: 24px;
  cy: 40px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hpg4nyb0c {
  cx: 40px;
  cy: 24px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sk71f0bnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.5 20h7l-7 8h7");
}
</style><circle class="hpg4nyb0c"/><circle class="a9gih1brb"/><circle class="eqgttw32j"/><circle class="ch135fbgg"/><path class="cylfc9fqr"/><path class="sk71f0bnd"/>`,
		"fallback": "arcticons:zhed",
	});
}

export default Component;
