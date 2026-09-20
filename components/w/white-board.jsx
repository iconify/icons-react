import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cutgkoy-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cutgkoy-z"/>`,
		"fallback": "streamline-flex:white-board",
	});
}

export default Component;
