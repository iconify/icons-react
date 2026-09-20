import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6g4f8bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6g4f8bmz"/>`,
		"fallback": "simple-icons:zazzle",
	});
}

export default Component;
