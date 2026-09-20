import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rb35__b2v.css';
import '../../css/p/p058992qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="rb35__b2v"/><circle class="p058992qq"/></g>`,
		"fallback": "lets-icons:world-2-light",
	});
}

export default Component;
