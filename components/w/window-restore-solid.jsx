import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_uee9b6t.css';
import '../../css/z/zs4v5jbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b_uee9b6t"/><path class="zs4v5jbop"/></g>`,
		"fallback": "flowbite:window-restore-solid",
	});
}

export default Component;
