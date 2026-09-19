import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elkwj6j6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elkwj6j6y"/>`,
		"fallback": "cryptocurrency:xvc",
	});
}

export default Component;
