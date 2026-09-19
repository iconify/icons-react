import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w0zb-hs6g.css';
import '../../css/k/k_gs59c5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w0zb-hs6g"/><path class="k_gs59c5d"/></g>`,
		"fallback": "hugeicons:wellness",
	});
}

export default Component;
