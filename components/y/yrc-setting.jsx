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
		"content": `<style>.g-s-0hbjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.053 11.269H43.5M15.053 36.731H43.5M15.053 14.452H43.5m-28.447 3.182H43.5m-28.447 3.183H43.5M15.053 24H43.5m-28.447 3.183H43.5m-28.447 3.183H43.5m-28.447 3.182H43.5M13.919 17.634L4.5 23.072V12.197z");
}
</style><path class="g-s-0hbjt"/>`,
		"fallback": "arcticons:yrc-setting",
	});
}

export default Component;
