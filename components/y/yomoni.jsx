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
		"content": `<style>.m_vx_lb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.844 5.6l11.154 18.37L35.285 5.54");
}

.osia6ybbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.638 5.559l8.32 13.66l8.247-13.466m9.12-.217L18.972 42.5");
}

.sxt2fdznr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.674 5.5l15.944 26.055l-6.376 10.789m3.195-10.524l-5.786 9.486m2.732-9.982l-5.05 8.205M9.917 5.57L24.05 28.492l14.475-22.9");
}
</style><path class="sxt2fdznr"/><path class="m_vx_lb4m"/><path class="osia6ybbz"/>`,
		"fallback": "arcticons:yomoni",
	});
}

export default Component;
