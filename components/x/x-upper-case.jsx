import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3dv7sbua.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3dv7sbua"/>`,
		"fallback": "whh:x-upper-case",
	});
}

export default Component;
