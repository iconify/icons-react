import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ko3tfdb4i.css';
import '../../css/i/i6nrt8nnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ko3tfdb4i"/><path class="i6nrt8nnu"/></g>`,
		"fallback": "solar:women-line-duotone",
	});
}

export default Component;
