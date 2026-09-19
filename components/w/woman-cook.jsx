import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6f4-hb9r.css';
import '../../css/h/htc50ab7y.css';
import '../../css/h/hioswgb-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6f4-hb9r"/><path class="htc50ab7y"/><path class="hioswgb-i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-cook",
	});
}

export default Component;
