import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrcj8s57n.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrcj8s57n"/>`,
		"fallback": "whh:xbox",
	});
}

export default Component;
