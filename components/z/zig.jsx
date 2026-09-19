import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfm9clb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfm9clb8r"/>`,
		"fallback": "file-icons:zig",
	});
}

export default Component;
