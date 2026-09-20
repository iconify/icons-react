import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po_yurb5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po_yurb5j"/>`,
		"fallback": "la:window-maximize",
	});
}

export default Component;
