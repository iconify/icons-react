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
		"content": `<style>.qg5wvmier {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.16 30.219h29.679V42.5H9.16zm29.68-5.117H9.16l-3.07 5.117h35.82zm-7.669-4.108v1.038H16.829L31.171 5.5H16.829v1.023");
}
</style><path class="qg5wvmier"/>`,
		"fallback": "arcticons:zfont",
	});
}

export default Component;
