import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eecoc19jn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t6gujxbpw.css';
import '../../css/v/vs7bm4bgh.css';
import '../../css/o/opyesnr4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eecoc19jn secondary"/><g class="dt0cm9dhy primary"><path class="t6gujxbpw"/><path class="vs7bm4bgh"/><path class="opyesnr4m"/></g>`,
		"fallback": "iconaut:window-open-duo",
	});
}

export default Component;
