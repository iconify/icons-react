import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yipja7bqc.css';
import '../../css/n/ncw19pbwv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yipja7bqc"/><path class="ncw19pbwv"/>`,
		"fallback": "ooui:window",
	});
}

export default Component;
