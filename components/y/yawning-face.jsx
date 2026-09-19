import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r36xumn7l.css';
import '../../css/w/wjbd8mreq.css';
import '../../css/g/ga8bzm_gf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r36xumn7l"/><path class="wjbd8mreq"/><path class="ga8bzm_gf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:yawning-face",
	});
}

export default Component;
