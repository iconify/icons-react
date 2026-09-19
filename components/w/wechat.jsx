import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ylgqmfbdd.css';
import '../../css/i/iwtnawb_g.css';
import '../../css/z/zp_xt8olr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ylgqmfbdd"/><path class="iwtnawb_g"/><path class="zp_xt8olr"/></g>`,
		"fallback": "hugeicons:wechat",
	});
}

export default Component;
