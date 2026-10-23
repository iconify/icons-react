import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_r3vkblj.css';
import '../../css/e/e0acyedsw.css';
import '../../css/e/e0ijctbgq.css';
import '../../css/f/fxcvd7x2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_r3vkblj"/><path class="e0acyedsw"/><path class="e0ijctbgq"/><path class="fxcvd7x2e"/></g>`,
		"fallback": "andrsrxn:webhook-off",
	});
}

export default Component;
