import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-j-2kbok.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-j-2kbok"/>`,
		"fallback": "garden:whatsapp-stroke-16",
	});
}

export default Component;
