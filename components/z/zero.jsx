import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnl_rbnua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnl_rbnua"/>`,
		"fallback": "mynaui:zero",
	});
}

export default Component;
