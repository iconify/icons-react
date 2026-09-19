import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl-yfk1zi.css';
import '../../css/y/ydy8y_b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl-yfk1zi"/><path class="ydy8y_b-w"/>`,
		"fallback": "boxicons:webcam",
	});
}

export default Component;
