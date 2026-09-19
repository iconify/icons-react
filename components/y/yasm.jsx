import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-_hd-q4z.css';

const viewBox = {"width":462,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-_hd-q4z"/>`,
		"fallback": "file-icons:yasm",
	});
}

export default Component;
