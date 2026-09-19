import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8pqey5gh.css';

const viewBox = {"width":1026,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8pqey5gh"/>`,
		"fallback": "whh:webplatform",
	});
}

export default Component;
