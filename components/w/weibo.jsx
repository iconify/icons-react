import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cta8aockg.css';
import '../../css/x/x41koctch.css';
import '../../css/d/d_5446-ws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cta8aockg"/><path class="x41koctch"/><path class="d_5446-ws"/></g>`,
		"fallback": "icon-park-outline:weibo",
	});
}

export default Component;
