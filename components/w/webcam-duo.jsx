import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kcytghzxu.css';
import '../../css/p/ppgi3vj8t.css';
import '../../css/o/ozjkdu0on.css';
import '../../css/h/h7focp4gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kcytghzxu"/><path class="ppgi3vj8t wm-a"/><path class="ozjkdu0on"/><path class="h7focp4gr wm-a"/></g>`,
		"fallback": "withicons:webcam-duo",
	});
}

export default Component;
