import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nacman8nc.css';
import '../../css/b/b_avhwbzz.css';
import '../../css/n/nho4eobhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nacman8nc"/><path class="b_avhwbzz"/><path class="nho4eobhb"/></g>`,
		"fallback": "iconaut:webhook",
	});
}

export default Component;
