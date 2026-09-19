import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqh3qyutr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqh3qyutr"/>`,
		"fallback": "fluent-mdl2:work-item",
	});
}

export default Component;
