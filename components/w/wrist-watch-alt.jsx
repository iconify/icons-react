import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvj1klb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvj1klb1m"/>`,
		"fallback": "boxicons:wrist-watch-alt",
	});
}

export default Component;
