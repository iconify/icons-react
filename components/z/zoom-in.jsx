import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up1479bcz.css';
import '../../css/n/nxbjncgfc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up1479bcz"/><path class="nxbjncgfc"/>`,
		"fallback": "lineicons:zoom-in",
	});
}

export default Component;
