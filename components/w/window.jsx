import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz3ebhbhc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz3ebhbhc"/>`,
		"fallback": "codicon:window",
	});
}

export default Component;
