import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p065d680r.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p065d680r"/>`,
		"fallback": "tdesign:wifi-off-1-filled",
	});
}

export default Component;
