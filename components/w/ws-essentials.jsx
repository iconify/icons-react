import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3pph2_eh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3pph2_eh"/>`,
		"fallback": "oui:ws-essentials",
	});
}

export default Component;
