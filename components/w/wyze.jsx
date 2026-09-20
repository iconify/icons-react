import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl6niib_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl6niib_h"/>`,
		"fallback": "simple-icons:wyze",
	});
}

export default Component;
