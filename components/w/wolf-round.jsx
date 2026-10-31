import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocj-w3b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocj-w3b2h"/>`,
		"fallback": "coolicons:wolf-round",
	});
}

export default Component;
