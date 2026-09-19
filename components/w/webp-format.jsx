import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ri0654i4u.css';
import '../../css/g/gduwo3b9l.css';
import '../../css/h/h-nqg3b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ri0654i4u"/><path class="gduwo3b9l"/><path class="h-nqg3b_v"/></g>`,
		"fallback": "iconoir:webp-format",
	});
}

export default Component;
