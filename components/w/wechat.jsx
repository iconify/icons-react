import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt4-uccvc.css';
import '../../css/x/xhtnf98bz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qt4-uccvc"/><path class="xhtnf98bz"/></g>`,
		"fallback": "bi:wechat",
	});
}

export default Component;
