import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pow4bf5-z.css';
import '../../css/m/m9rz3zbbf.css';
import '../../css/p/p3ymykbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="pow4bf5-z"/><circle transform="rotate(180 17.5 14.5)" class="m9rz3zbbf"/><path class="p3ymykbry"/></g>`,
		"fallback": "hugeicons:zodiac-cancer",
	});
}

export default Component;
