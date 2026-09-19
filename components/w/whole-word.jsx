import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xbt6p2bvs.css';
import '../../css/y/yudxgqi4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xbt6p2bvs"/><path class="yudxgqi4e"/></g>`,
		"fallback": "hugeicons:whole-word",
	});
}

export default Component;
