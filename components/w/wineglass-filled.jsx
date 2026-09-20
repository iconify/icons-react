import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmjhu4bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmjhu4bnh"/>`,
		"fallback": "reicon:wineglass-filled",
	});
}

export default Component;
