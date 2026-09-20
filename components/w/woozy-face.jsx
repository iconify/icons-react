import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl06zb7mo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl06zb7mo"/>`,
		"fallback": "pinhead:woozy-face",
	});
}

export default Component;
