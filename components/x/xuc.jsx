import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqo0fw7ui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqo0fw7ui"/>`,
		"fallback": "cryptocurrency:xuc",
	});
}

export default Component;
