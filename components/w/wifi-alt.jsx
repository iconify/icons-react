import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoo5lszqv.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoo5lszqv"/>`,
		"fallback": "zmdi:wifi-alt",
	});
}

export default Component;
