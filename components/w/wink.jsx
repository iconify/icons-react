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
		"content": `<style>.i0m0bfbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.102 5.5l4.292 11.035m-7.357-3.678l10.422-3.679M8.128 19.6v11.648m12.874-7.357l14.713-4.904m2.452 11.648Q27.133 49.026 5.541 38.91");
}
</style><path class="i0m0bfbzw"/>`,
		"fallback": "arcticons:wink",
	});
}

export default Component;
