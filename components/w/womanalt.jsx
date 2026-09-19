import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izzlobcjx.css';

const viewBox = {"width":448,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izzlobcjx"/>`,
		"fallback": "whh:womanalt",
	});
}

export default Component;
