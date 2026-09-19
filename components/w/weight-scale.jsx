import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jirkywbxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jirkywbxd"/>`,
		"fallback": "fa6-solid:weight-scale",
	});
}

export default Component;
