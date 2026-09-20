import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cti6nxbgy.css';
import '../../css/k/kiyzhcvkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cti6nxbgy"/><path class="kiyzhcvkq"/>`,
		"fallback": "streamline-ultimate:webcam-2-bold",
	});
}

export default Component;
