import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x35z1favz.css';
import '../../css/h/h1scdkb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x35z1favz"/><path class="h1scdkb0c"/></g>`,
		"fallback": "hugeicons:zodiac-sagittarius",
	});
}

export default Component;
