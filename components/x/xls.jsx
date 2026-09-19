import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbg6-9b5b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbg6-9b5b"/>`,
		"fallback": "carbon:xls",
	});
}

export default Component;
