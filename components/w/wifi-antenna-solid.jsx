import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwp8pzb8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dwp8pzb8q"/>`,
		"fallback": "streamline-flex:wifi-antenna-solid",
	});
}

export default Component;
