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
		"content": `<style>.et85xsbqb {
  cx: 24.079px;
  cy: 18.24px;
  r: 0.75px;
  fill: currentColor;
}

.jps9d3qfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 19.653h7.444c.053 0 .1.03.124.077l7.733 15.425c.047.093.171.11.232.025c1.083-1.51 8.621-12.193 8.621-17.122c0-2.774-1.962-5.302-4.736-5.293c-2.765.01-4.705 2.527-4.705 5.293c0 4.468 8.156 15.576 9.307 17.121c.063.084.188.065.232-.03l7.163-15.416a.14.14 0 0 1 .127-.08H43.5");
}
</style><path class="jps9d3qfa"/><circle class="et85xsbqb"/>`,
		"fallback": "arcticons:wegfinder",
	});
}

export default Component;
