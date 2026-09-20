import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jik94npjl.css';
import '../../css/u/uhnpryepr.css';
import '../../css/b/by-_qrbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jik94npjl"/><path class="uhnpryepr"/><path class="by-_qrbmx"/>`,
		"fallback": "token:zkb",
	});
}

export default Component;
