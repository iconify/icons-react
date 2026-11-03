import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhpbuwbuk.css';
import '../../css/o/o8nz3vbpd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhpbuwbuk"/><path class="o8nz3vbpd"/>`,
		"fallback": "openmoji:wrench",
	});
}

export default Component;
