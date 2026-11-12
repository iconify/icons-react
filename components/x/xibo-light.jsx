import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhq2gxb7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhq2gxb7g"/>`,
		"fallback": "selfhst:xibo-light",
	});
}

export default Component;
