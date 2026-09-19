import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0d0qdihh.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0d0qdihh"/>`,
		"fallback": "whh:youtube",
	});
}

export default Component;
