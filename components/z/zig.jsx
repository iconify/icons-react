import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhe8t8ahy.css';

const viewBox = {"width":300,"height":176};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhe8t8ahy"/>`,
		"fallback": "thesvg-color:zig",
	});
}

export default Component;
