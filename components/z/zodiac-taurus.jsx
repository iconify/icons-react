import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t-earhali.css';
import '../../css/h/h2g45245u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="t-earhali"/><path class="h2g45245u"/></g>`,
		"fallback": "hugeicons:zodiac-taurus",
	});
}

export default Component;
