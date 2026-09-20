import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us2bngbki.css';
import '../../css/w/waau3ubjk.css';
import '../../css/j/jpp0yt_ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="us2bngbki"/><path class="waau3ubjk"/><path class="jpp0yt_ro"/></g>`,
		"fallback": "reicon:wind-duotone",
	});
}

export default Component;
