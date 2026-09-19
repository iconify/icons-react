import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sgm52obwb.css';
import '../../css/w/whkv66aot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sgm52obwb"/><path class="whkv66aot"/></g>`,
		"fallback": "hugeicons:whistle",
	});
}

export default Component;
