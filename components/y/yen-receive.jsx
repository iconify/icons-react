import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o84_2lbma.css';
import '../../css/l/ltfbp1rgr.css';
import '../../css/o/oz_6r38tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o84_2lbma"/><path class="ltfbp1rgr"/><path class="oz_6r38tv"/></g>`,
		"fallback": "hugeicons:yen-receive",
	});
}

export default Component;
