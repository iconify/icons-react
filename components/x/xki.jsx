import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkj9tpb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkj9tpb9l"/>`,
		"fallback": "token:xki",
	});
}

export default Component;
