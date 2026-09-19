import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wirxgc2mt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wirxgc2mt"/>`,
		"fallback": "whh:zoomin",
	});
}

export default Component;
