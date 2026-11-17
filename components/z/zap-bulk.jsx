import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ocitxbbtt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m8.592 7.877l3.753-4.717A1.35 1.35 0 0 1 14.75 4v5H18a1.483 1.483 0 0 1 1.16 2.405l-7.505 9.435A1.35 1.35 0 0 1 9.25 20v-5H6a1.483 1.483 0 0 1-1.16-2.405Z");
}
</style><path class="ocitxbbtt"/>`,
		"fallback": "coolicons:zap-bulk",
	});
}

export default Component;
