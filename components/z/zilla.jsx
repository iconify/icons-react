import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w95jo8jra.css';
import '../../css/d/dy0jwmb1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="w95jo8jra"/><path class="dy0jwmb1i"/></g>`,
		"fallback": "cryptocurrency-color:zilla",
	});
}

export default Component;
