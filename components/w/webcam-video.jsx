import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrlu6h6mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrlu6h6mi"/>`,
		"fallback": "streamline-sharp:webcam-video",
	});
}

export default Component;
