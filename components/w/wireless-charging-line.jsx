import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6x7wfcnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6x7wfcnr"/>`,
		"fallback": "ri:wireless-charging-line",
	});
}

export default Component;
