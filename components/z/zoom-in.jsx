import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs6pq-bug.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs6pq-bug"/>`,
		"fallback": "ep:zoom-in",
	});
}

export default Component;
