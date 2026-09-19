import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc3mhcb_h.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc3mhcb_h"/>`,
		"fallback": "fa:yoast",
	});
}

export default Component;
