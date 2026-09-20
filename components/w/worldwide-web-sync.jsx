import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2b2pkzbu.css';
import '../../css/x/xok9hibro.css';
import '../../css/o/opba08xww.css';
import '../../css/j/jtg-hpg4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2b2pkzbu"/><path class="xok9hibro"/><path class="opba08xww"/><path class="jtg-hpg4n"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-sync",
	});
}

export default Component;
