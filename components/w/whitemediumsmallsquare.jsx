import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq-gx3bpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq-gx3bpw"/>`,
		"fallback": "fxemoji:whitemediumsmallsquare",
	});
}

export default Component;
