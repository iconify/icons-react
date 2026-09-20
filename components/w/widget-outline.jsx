import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b-p0nv5-g.css';
import '../../css/c/cu2b4ubwf.css';
import '../../css/e/e27jkeb4n.css';
import '../../css/h/hu3ol8b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b-p0nv5-g"/><path class="cu2b4ubwf"/><path class="e27jkeb4n"/><path class="hu3ol8b3r"/></g>`,
		"fallback": "solar:widget-outline",
	});
}

export default Component;
