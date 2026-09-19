import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/dwhj-nzls.css';
import '../../css/c/c9_-b0brr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="dwhj-nzls"/><path class="c9_-b0brr"/></g>`,
		"fallback": "icon-park-outline:youtobe",
	});
}

export default Component;
