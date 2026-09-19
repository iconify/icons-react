import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2gna1b5o.css';
import '../../css/s/sgyebwbxb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2gna1b5o"/><path class="sgyebwbxb"/>`,
		"fallback": "foundation:x-circle",
	});
}

export default Component;
