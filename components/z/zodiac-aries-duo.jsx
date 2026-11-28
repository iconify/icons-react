import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j59y5sbei.css';
import '../../css/p/p84s3ubct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j59y5sbei"/><path class="p84s3ubct"/></g>`,
		"fallback": "iconaut:zodiac-aries-duo",
	});
}

export default Component;
