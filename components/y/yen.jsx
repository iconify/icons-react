import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o3e5wu7_t.css';
import '../../css/y/yeqejsb_w.css';
import '../../css/l/lt3ivrb_m.css';
import '../../css/t/trtof2g-p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o3e5wu7_t"/><path class="yeqejsb_w"/><path class="lt3ivrb_m"/><path class="trtof2g-p"/></g>`,
		"fallback": "pepicons-pencil:yen",
	});
}

export default Component;
