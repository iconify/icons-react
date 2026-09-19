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
		"content": `<style>.hkojl9b5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.747 27.237V42.5h34.506V31.219a112 112 0 0 0-26.757 5.98l-2.474-3.782c5.518-5.741 9.191-8.737 12.571-11.895a94.3 94.3 0 0 0-17.846 5.715");
}

.pyuraibkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.747 18.788v4.468c8.015-3.826 16.914-7.41 25.216-7.963l2.654 3.981c-6.073 2.782-10.729 8.22-13.532 11.223c9.27-2.962 16.88-3.684 20.168-4.587v-7.216L23.905 5.5Z");
}
</style><path class="pyuraibkv"/><path class="hkojl9b5u"/>`,
		"fallback": "arcticons:zillow",
	});
}

export default Component;
