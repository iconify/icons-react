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
		"content": `<style>.gde7x16an {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-4.645v31.485l-4.927-2.864L24 31.26l-4.93 2.86l-4.925 2.864V5.5H9.5a4 4 0 0 0-4 4");
}

.t--ozbbml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 14.935l2.18 4.418l4.875.708l-3.527 3.438l.832 4.856L24 26.062l-4.36 2.293l.833-4.856l-3.528-3.438l4.875-.708z");
}
</style><path class="gde7x16an"/><path class="t--ozbbml"/>`,
		"fallback": "arcticons:wunderlist",
	});
}

export default Component;
