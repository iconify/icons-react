import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwhra4biw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwhra4biw"/>`,
		"fallback": "pinhead:wine-bottle-and-wine-glass",
	});
}

export default Component;
