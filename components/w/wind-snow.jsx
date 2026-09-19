import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0owek6qs.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0owek6qs"/>`,
		"fallback": "f7:wind-snow",
	});
}

export default Component;
