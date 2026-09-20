import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxsdz7b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxsdz7b0g"/>`,
		"fallback": "mdi:writing-system-cyrillic",
	});
}

export default Component;
