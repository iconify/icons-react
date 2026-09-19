import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov9r0xb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov9r0xb0n"/>`,
		"fallback": "cbi:zones-areas-first-floor",
	});
}

export default Component;
