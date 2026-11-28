import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7icocbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7icocbll"/>`,
		"fallback": "noviair-light:wine-heart",
	});
}

export default Component;
