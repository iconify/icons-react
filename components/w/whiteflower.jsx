import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1oj3o3gm.css';
import '../../css/h/hy2vl0dwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1oj3o3gm"/><path class="hy2vl0dwm"/>`,
		"fallback": "fxemoji:whiteflower",
	});
}

export default Component;
