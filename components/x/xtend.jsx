import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwr78-bwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwr78-bwy"/>`,
		"fallback": "file-icons:xtend",
	});
}

export default Component;
