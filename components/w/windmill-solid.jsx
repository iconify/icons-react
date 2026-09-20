import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp8rk1bgb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yp8rk1bgb"/>`,
		"fallback": "streamline-flex:windmill-solid",
	});
}

export default Component;
