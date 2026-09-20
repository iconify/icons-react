import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhut6ubwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhut6ubwl"/>`,
		"fallback": "selfhst:your-spotify",
	});
}

export default Component;
