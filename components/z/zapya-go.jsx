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
		"content": `<style>.gfi_5ib1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.66 16.285a54.15 54.15 0 0 1 23.777-4.784s-6.814 9.762-7.54 15.32c0 0 13.822-2.368 21.603 0l-.677 2.561s-17.446-.628-29.817 7.153c-.725-6.476 3.044-17.35 3.044-17.35a49.4 49.4 0 0 0-11.55 1.45Z");
}
</style><path class="gfi_5ib1o"/>`,
		"fallback": "arcticons:zapya-go",
	});
}

export default Component;
