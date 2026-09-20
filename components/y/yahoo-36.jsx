import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in3i6fb9v.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in3i6fb9v"/>`,
		"fallback": "wi:yahoo-36",
	});
}

export default Component;
