import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r7zlj28cq.css';
import '../../css/k/k49474t5f.css';
import '../../css/b/bc0l7zbbb.css';
import '../../css/c/ck0hbzbwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r7zlj28cq"/><path class="k49474t5f"/><path class="bc0l7zbbb"/><path class="ck0hbzbwt"/></g>`,
		"fallback": "icon-park:zoom",
	});
}

export default Component;
