import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qix83dbsc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qix83dbsc"/>`,
		"fallback": "pullo:x-circle-multiple-thin",
	});
}

export default Component;
