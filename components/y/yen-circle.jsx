import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qz__wnx3u.css';
import '../../css/c/cgk9o2bmx.css';
import '../../css/o/o9ay5y_5p.css';
import '../../css/f/feidr8b6a.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qz__wnx3u"/><path class="cgk9o2bmx"/><path class="o9ay5y_5p"/><path class="feidr8b6a"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:yen-circle",
	});
}

export default Component;
