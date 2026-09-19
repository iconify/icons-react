import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/msw74ni7j.css';
import '../../css/e/e4x0wjlqy.css';
import '../../css/z/z1iohkbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="msw74ni7j"/><path class="e4x0wjlqy"/><path class="z1iohkbtt"/></g>`,
		"fallback": "iconoir:yoga",
	});
}

export default Component;
