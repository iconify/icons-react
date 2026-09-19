import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9koci0im.css';
import '../../css/h/hoxqff5ja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9koci0im"/><path class="hoxqff5ja"/>`,
		"fallback": "cil:zoom-out",
	});
}

export default Component;
