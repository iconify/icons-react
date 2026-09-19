import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-gel7b8n.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-gel7b8n"/>`,
		"fallback": "whh:wine",
	});
}

export default Component;
