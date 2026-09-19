import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr9e-ibdt.css';
import '../../css/a/ag80qrbfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr9e-ibdt"/><path class="ag80qrbfj"/>`,
		"fallback": "fxemoji:worldmap",
	});
}

export default Component;
