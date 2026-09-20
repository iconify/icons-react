import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sh-culjlj.css';
import '../../css/y/ylpjclaro.css';
import '../../css/u/uh28jjz2v.css';
import '../../css/y/yqzzkj6tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="sh-culjlj"/><path class="ylpjclaro"/><path class="uh28jjz2v"/><path class="yqzzkj6tj"/></g>`,
		"fallback": "streamline-ultimate:web-hook",
	});
}

export default Component;
