import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9uu65b9i.css';
import '../../css/c/c95xf8blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9uu65b9i"/><path class="c95xf8blq"/></g>`,
		"fallback": "hugeicons:xls-02",
	});
}

export default Component;
