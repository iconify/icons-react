import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i8_tcy-5n.css';
import '../../css/g/gt5whlebq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i8_tcy-5n"/><path class="gt5whlebq"/></g>`,
		"fallback": "hugeicons:zodiac-gemini",
	});
}

export default Component;
