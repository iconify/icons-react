import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o09z0pbiu.css';
import '../../css/b/bgmsg031r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o09z0pbiu wm-k"/><path class="bgmsg031r wm-s"/></g>`,
		"fallback": "withicons:worried-gloss",
	});
}

export default Component;
