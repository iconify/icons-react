import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uou8spbqk.css';
import '../../css/y/y306aceyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uou8spbqk"/><path class="y306aceyt"/>`,
		"fallback": "bxs:webcam",
	});
}

export default Component;
