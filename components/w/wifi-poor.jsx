import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpitmabnk.css';
import '../../css/o/or0ae1ttt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lpitmabnk"/><path class="or0ae1ttt"/></g>`,
		"fallback": "charm:wifi-poor",
	});
}

export default Component;
