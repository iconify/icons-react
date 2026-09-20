import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shi4xabtu.css';
import '../../css/k/khscqcbgh.css';
import '../../css/y/yo52w2bfi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shi4xabtu"/><path class="khscqcbgh"/><path class="yo52w2bfi"/></g>`,
		"fallback": "streamline-flex-color:wheelchair",
	});
}

export default Component;
