import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgy1x0b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgy1x0b6l"/>`,
		"fallback": "selfhst:x",
	});
}

export default Component;
