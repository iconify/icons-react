import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ikm3bfk.css';
import '../../css/p/p39-tabus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ikm3bfk"/><path class="p39-tabus"/>`,
		"fallback": "boxicons:wrist-watch-round-filled",
	});
}

export default Component;
