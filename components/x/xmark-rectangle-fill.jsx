import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob74eoben.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob74eoben"/>`,
		"fallback": "f7:xmark-rectangle-fill",
	});
}

export default Component;
