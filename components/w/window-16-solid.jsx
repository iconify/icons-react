import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ils3d3b0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ils3d3b0h"/>`,
		"fallback": "heroicons:window-16-solid",
	});
}

export default Component;
