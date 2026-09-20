import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzn6npywo.css';
import '../../css/e/eztqw9biy.css';
import '../../css/o/od_9h-jpj.css';
import '../../css/w/w5b2gk7ra.css';
import '../../css/l/li5o50bej.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zz6_0xyux.css';
import '../../css/g/g59sf8byi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzn6npywo"/><g class="eztqw9biy"><path class="od_9h-jpj"/><path class="w5b2gk7ra"/><path class="li5o50bej"/></g><g class="jn8qy4bru"><path class="zz6_0xyux"/><path class="g59sf8byi"/></g>`,
		"fallback": "openmoji:writing-hand-medium-dark-skin-tone",
	});
}

export default Component;
