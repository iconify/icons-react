import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfdrzfb9i.css';
import '../../css/y/y4ngpjbgm.css';
import '../../css/k/kj5laqp_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bfdrzfb9i"><path class="y4ngpjbgm"/><path class="kj5laqp_h"/></g>`,
		"fallback": "matita:x",
	});
}

export default Component;
