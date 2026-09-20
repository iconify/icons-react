import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1_9nob6g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1_9nob6g"/>`,
		"fallback": "map:whale-watching",
	});
}

export default Component;
