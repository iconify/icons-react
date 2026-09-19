import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot7aftx3n.css';

const viewBox = {"width":640,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot7aftx3n"/>`,
		"fallback": "whh:windmillalt",
	});
}

export default Component;
