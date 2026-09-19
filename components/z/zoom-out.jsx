import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c_x-f9x5y.css';
import '../../css/w/wb7yhjb_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c_x-f9x5y"/><path class="wb7yhjb_n"/></g>`,
		"fallback": "heroicons-solid:zoom-out",
	});
}

export default Component;
