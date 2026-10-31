import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sqer1qb8d.css';
import '../../css/e/eyhvntpqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sqer1qb8d"/><path class="eyhvntpqg"/></g>`,
		"fallback": "coolicons:wifi-medium-duocolor-round",
	});
}

export default Component;
