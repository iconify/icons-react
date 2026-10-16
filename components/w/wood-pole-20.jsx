import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj75j-log.css';
import '../../css/f/fdqwsub7z.css';
import '../../css/w/w58xql4qz.css';
import '../../css/y/y_35ybrup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj75j-log"/><path class="fdqwsub7z"/><path class="w58xql4qz"/><path class="y_35ybrup"/>`,
		"fallback": "energy-icons:wood-pole-20",
	});
}

export default Component;
