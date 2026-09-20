import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e81uyxb5s.css';
import '../../css/w/whtsptbqd.css';
import '../../css/z/zlxlu42ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e81uyxb5s"/><path class="whtsptbqd"/><path class="zlxlu42ak"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-disable",
	});
}

export default Component;
