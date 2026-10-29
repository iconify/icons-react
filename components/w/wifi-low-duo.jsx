import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ctd2uiblz.css';
import '../../css/y/ygtvqmgmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ctd2uiblz"/><path class="ygtvqmgmi"/></g>`,
		"fallback": "withicons:wifi-low-duo",
	});
}

export default Component;
