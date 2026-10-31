import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlkb4tbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlkb4tbuu"/>`,
		"fallback": "coolicons:zoom-out-round",
	});
}

export default Component;
