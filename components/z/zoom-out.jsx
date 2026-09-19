import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmpx80b7a.css';

const viewBox = {"width":376,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmpx80b7a"/>`,
		"fallback": "zmdi:zoom-out",
	});
}

export default Component;
