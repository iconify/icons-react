import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg-3vud6u.css';
import '../../css/p/p04h_vw0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg-3vud6u"/><path class="p04h_vw0v"/>`,
		"fallback": "streamline-ultimate:zoom-in-page-bold",
	});
}

export default Component;
