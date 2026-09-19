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
		"content": `<style>.vlq1icc7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.368 5.765c9.867-2.32 30.508 11.19 32.038 17.726c1.482 6.332-22.66 21.338-31.713 18.701c-6.262-1.824-7.361-34.774-.325-36.428Z");
}
</style><path class="vlq1icc7o"/>`,
		"fallback": "arcticons:zalando",
	});
}

export default Component;
