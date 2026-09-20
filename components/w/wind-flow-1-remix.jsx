import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eelxote3h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eelxote3h"/>`,
		"fallback": "streamline:wind-flow-1-remix",
	});
}

export default Component;
