import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxbw_dbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxbw_dbuu"/>`,
		"fallback": "streamline-ultimate:yoga-half-moon-pose-1-bold",
	});
}

export default Component;
