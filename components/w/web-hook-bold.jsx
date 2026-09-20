import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aom6z3bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aom6z3bju"/>`,
		"fallback": "streamline-ultimate:web-hook-bold",
	});
}

export default Component;
