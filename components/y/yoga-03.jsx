import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l_vcjeb6h.css';
import '../../css/b/bwwy49j0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l_vcjeb6h"/><path class="bwwy49j0a"/></g>`,
		"fallback": "hugeicons:yoga-03",
	});
}

export default Component;
