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
		"content": `<style>.qt_wrvbbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.385 30.209l2.824-2.824a.996.996 0 0 1 1.412 0l10.59 10.59a.996.996 0 0 1 0 1.412l-2.824 2.824a.996.996 0 0 1-1.412 0l-10.59-10.59a.996.996 0 0 1 0-1.412M5.5 25.267l4.236-4.236l12.002 12.002l-4.236 4.236zM21.031 9.736L25.267 5.5l12.002 12.002l-4.236 4.236zm5.295 19.414l2.824-2.824");
}

.wcummqbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.267 28.091l2.824-2.824l2.118 2.118l-2.824 2.824z");
}

.xujfowuxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.442 21.737l11.296-11.296l10.59 10.59l-11.296 11.296z");
}
</style><path class="xujfowuxx"/><path class="wcummqbsn"/><path class="qt_wrvbbz"/>`,
		"fallback": "arcticons:yahoo-japan-auction",
	});
}

export default Component;
