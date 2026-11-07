import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/km39q598b.css';
import '../../css/l/llmrhkpex.css';
import '../../css/r/r7eg7804v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="km39q598b"/><path class="llmrhkpex"/><path class="r7eg7804v"/></g>`,
		"fallback": "solar:widget-4-linear",
	});
}

export default Component;
