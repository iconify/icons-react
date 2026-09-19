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
		"content": `<style>.bld5m6bhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.468 30.657c-5.187-5.187-12.914-.4-16.468 3.155M7.532 17.343c5.187 5.187 12.914.399 16.468-3.155m-6.657 26.28c5.187-5.187.399-12.915-3.155-16.468M30.657 7.531C25.47 12.718 30.258 20.446 33.812 24");
}

.c4ymxgbsj {
  cx: 24px;
  cy: 24px;
  r: 3.854px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d0x5xvb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.812 24l6.657-6.657a6.938 6.938 0 0 0-9.812-9.812L24 14.188l-6.657-6.657a6.938 6.938 0 0 0-9.812 9.812L14.188 24l-6.657 6.657a6.938 6.938 0 0 0 9.812 9.811L24 33.811l6.657 6.657c1.355 1.354 3.13 2.032 4.905 2.032s3.551-.677 4.906-2.032a6.94 6.94 0 0 0 0-9.811z");
}
</style><path class="d0x5xvb4g"/><path class="bld5m6bhk"/><circle class="c4ymxgbsj"/>`,
		"fallback": "arcticons:x-icon-changer",
	});
}

export default Component;
