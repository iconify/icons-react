import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwwpx0b3d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwwpx0b3d"/>`,
		"fallback": "whh:wheel",
	});
}

export default Component;
