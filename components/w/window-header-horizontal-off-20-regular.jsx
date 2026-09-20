import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u83mcjtfe {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708zm12.293 13.708A1.5 1.5 0 0 1 14.5 16h-9A1.5 1.5 0 0 1 4 14.5V7h2.293zM16 7v6.879l.975.975Q17 14.68 17 14.5v-9A2.5 2.5 0 0 0 14.5 3h-9q-.18 0-.354.025L9.121 7z");
}
</style><path class="u83mcjtfe"/>`,
		"fallback": "fluent:window-header-horizontal-off-20-regular",
	});
}

export default Component;
