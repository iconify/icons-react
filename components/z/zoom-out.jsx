import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi9iomb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi9iomb9d"/>`,
		"fallback": "iconamoon:zoom-out",
	});
}

export default Component;
