import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwo1k3bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwo1k3bnd"/>`,
		"fallback": "coolicons:wifi-off-fill-round",
	});
}

export default Component;
