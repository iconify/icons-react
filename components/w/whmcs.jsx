import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3um0j9hl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3um0j9hl"/>`,
		"fallback": "fa7-brands:whmcs",
	});
}

export default Component;
