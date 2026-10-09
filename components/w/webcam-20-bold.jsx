import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0vq58ann.css';
import '../../css/s/szrxxwb4q.css';
import '../../css/e/e4o8tz19x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0vq58ann"/><path class="szrxxwb4q"/><path class="e4o8tz19x"/>`,
		"fallback": "energy-icons:webcam-20-bold",
	});
}

export default Component;
