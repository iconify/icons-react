import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sdqiu5bsc.css';
import '../../css/x/xvs57gbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="sdqiu5bsc"/><path class="xvs57gbtl"/></g>`,
		"fallback": "reicon:wind3",
	});
}

export default Component;
