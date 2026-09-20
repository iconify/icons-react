import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th4livb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th4livb8h"/>`,
		"fallback": "thesvg-color:wipro",
	});
}

export default Component;
