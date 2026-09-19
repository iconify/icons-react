import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kvzk54exz.css';
import '../../css/z/zk41_wjip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kvzk54exz"/><path class="zk41_wjip"/></g>`,
		"fallback": "iconoir:wrap-text",
	});
}

export default Component;
