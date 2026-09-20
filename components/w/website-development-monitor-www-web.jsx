import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vypbqkbsx.css';
import '../../css/f/fmmtj0mow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vypbqkbsx"/><path class="fmmtj0mow"/></g>`,
		"fallback": "streamline-freehand:website-development-monitor-www-web",
	});
}

export default Component;
