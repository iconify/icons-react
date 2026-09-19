import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbcik9bfz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbcik9bfz"/>`,
		"fallback": "fa-solid:x-ray",
	});
}

export default Component;
