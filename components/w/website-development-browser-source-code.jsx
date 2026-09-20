import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j07dkobur.css';
import '../../css/s/ssl_p8bbq.css';
import '../../css/v/vzr5kgc6d.css';
import '../../css/l/lcu8a2auw.css';
import '../../css/e/e4lgkbr8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j07dkobur"/><path class="ssl_p8bbq"/><path class="vzr5kgc6d"/><path class="lcu8a2auw"/><path class="e4lgkbr8f"/></g>`,
		"fallback": "streamline-freehand-color:website-development-browser-source-code",
	});
}

export default Component;
