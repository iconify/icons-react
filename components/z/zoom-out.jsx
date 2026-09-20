import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj2_pbcuj.css';
import '../../css/s/sl3an4zge.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj2_pbcuj"/><path class="sl3an4zge"/>`,
		"fallback": "lineicons:zoom-out",
	});
}

export default Component;
