import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1gv4pp8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1gv4pp8g"/>`,
		"fallback": "selfhst:zerobyte",
	});
}

export default Component;
