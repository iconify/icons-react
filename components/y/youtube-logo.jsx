import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oi14-thur.css';
import '../../css/b/b3j6u1bxs.css';
import '../../css/a/a4fcd752j.css';
import '../../css/z/zm14bkbwk.css';
import '../../css/p/phhdeybqm.css';
import '../../css/b/by_q2slgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="oi14-thur"/><path class="b3j6u1bxs"/><path class="a4fcd752j"/><path class="zm14bkbwk"/><path class="phhdeybqm"/><path class="by_q2slgr"/></g>`,
		"fallback": "streamline-logos:youtube-logo",
	});
}

export default Component;
