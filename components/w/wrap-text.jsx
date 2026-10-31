import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnns3cbcc.css';
import '../../css/s/s-y1y7b7x.css';
import '../../css/u/u60zwjb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qnns3cbcc wm-k"/><path class="s-y1y7b7x wm-a"/><path class="u60zwjb6y wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wrap-text",
	});
}

export default Component;
