import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk9xfo3pn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk9xfo3pn"/>`,
		"fallback": "cib:xrp",
	});
}

export default Component;
