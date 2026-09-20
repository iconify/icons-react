import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfuanbccs.css';

const viewBox = {"width":800,"height":405};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfuanbccs"/>`,
		"fallback": "thesvg-color:xstate-light",
	});
}

export default Component;
