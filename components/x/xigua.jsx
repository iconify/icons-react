import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq1lkzb4i.css';
import '../../css/y/ykrh_um7r.css';
import '../../css/l/ltn1tccxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pq1lkzb4i"><path class="ykrh_um7r"/><path class="ltn1tccxu"/></g>`,
		"fallback": "icon-park:xigua",
	});
}

export default Component;
