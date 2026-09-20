import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8e1z1b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8e1z1b1c"/>`,
		"fallback": "lucide:whistle",
	});
}

export default Component;
