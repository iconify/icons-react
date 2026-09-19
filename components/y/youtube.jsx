import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dblasrb2v.css';
import '../../css/w/wxc7mbbhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dblasrb2v"/><path class="wxc7mbbhr"/></g>`,
		"fallback": "icon-park-outline:youtube",
	});
}

export default Component;
