import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o9_yfztdo.css';
import '../../css/n/nkgvlpo6l.css';
import '../../css/b/bjr3rwbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o9_yfztdo"/><path class="nkgvlpo6l"/><path class="bjr3rwbuf"/></g>`,
		"fallback": "streamline-freehand-color:website-development-monitor-www-web",
	});
}

export default Component;
