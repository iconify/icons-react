import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ydws45o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ydws45o"/>`,
		"fallback": "memory:whip",
	});
}

export default Component;
