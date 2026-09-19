import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf351fbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf351fbre"/>`,
		"fallback": "boxicons:wifi-1",
	});
}

export default Component;
