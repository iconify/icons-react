import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncrn1j3qh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncrn1j3qh"/>`,
		"fallback": "bi:xbox",
	});
}

export default Component;
