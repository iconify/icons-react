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
		"content": `<style>.kx5_bsvkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.739v28.522L24 28.686");
}

.w4mozhb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.674 27.544c-1.675-.822-2.897-2.471-2.913-4.337v-.044c0-3.797 4.04-6.65 8.055-4.497c1.23.659 2.04 1.906 2.29 3.278h0a5.23 5.23 0 0 1-2.84 5.63L4.5 38.26V9.74");
}
</style><path class="w4mozhb4g"/><path class="kx5_bsvkh"/>`,
		"fallback": "arcticons:webnovel",
	});
}

export default Component;
