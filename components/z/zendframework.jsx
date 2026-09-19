import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec7m1jb_i.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec7m1jb_i"/>`,
		"fallback": "whh:zendframework",
	});
}

export default Component;
