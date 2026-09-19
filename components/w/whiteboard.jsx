import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2srrkj6b.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2srrkj6b"/>`,
		"fallback": "vs:whiteboard",
	});
}

export default Component;
