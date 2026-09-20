import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qz__wnx3u.css';
import '../../css/c/cgk9o2bmx.css';
import '../../css/o/o9ay5y_5p.css';
import '../../css/f/feidr8b6a.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="qz__wnx3u"/><path class="cgk9o2bmx"/><path class="o9ay5y_5p"/><path class="feidr8b6a"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:yen-circle-filled",
	});
}

export default Component;
