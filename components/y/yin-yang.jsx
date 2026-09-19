import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9lrq2kct.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9lrq2kct"/>`,
		"fallback": "fa-solid:yin-yang",
	});
}

export default Component;
