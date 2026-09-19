import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pv_htfgcy.css';
import '../../css/y/yhe1lfban.css';
import '../../css/h/hc33tf9xi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pv_htfgcy"/><path class="yhe1lfban"/><path class="hc33tf9xi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-mechanic",
	});
}

export default Component;
