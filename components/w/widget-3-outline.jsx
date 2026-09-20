import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uwxn6tu6g.css';
import '../../css/s/s8i43s-5o.css';
import '../../css/g/g-s4t8b6s.css';
import '../../css/b/byc7l7b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uwxn6tu6g"/><path class="s8i43s-5o"/><path class="g-s4t8b6s"/><path class="byc7l7b9c"/></g>`,
		"fallback": "solar:widget-3-outline",
	});
}

export default Component;
