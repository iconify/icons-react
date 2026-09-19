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
		"content": `<style>.bml3n8lpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.82 42.241l19.522-19.884l-16.87-16.63L5.707 25.37l-.05 16.903Z");
}
</style><path class="bml3n8lpj"/>`,
		"fallback": "arcticons:youdao-note",
	});
}

export default Component;
