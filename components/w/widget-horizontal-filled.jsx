import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mscblln2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mscblln2x"/>`,
		"fallback": "boxicons:widget-horizontal-filled",
	});
}

export default Component;
