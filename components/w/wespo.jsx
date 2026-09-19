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
		"content": `<style>.dbqlt-4fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39 37.5l4.5-27l-24.75 14.75z");
}

.o4-stt4zu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9 37.5l-4.5-27l24.75 14.75z");
}
</style><path class="dbqlt-4fa"/><path class="o4-stt4zu"/>`,
		"fallback": "arcticons:wespo",
	});
}

export default Component;
