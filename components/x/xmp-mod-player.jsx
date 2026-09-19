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
		"content": `<style>.dkepwleip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 10.419H28.269L24 15.603l-4.269-5.184H5.5l11.385 13.824L5.5 38.067h14.231L24 32.883l10.063 12.198l8.437-7.014l-11.385-13.824z");
}
</style><path class="dkepwleip"/>`,
		"fallback": "arcticons:xmp-mod-player",
	});
}

export default Component;
