import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3-xeabwj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3-xeabwj"/>`,
		"fallback": "pinhead:webcam",
	});
}

export default Component;
