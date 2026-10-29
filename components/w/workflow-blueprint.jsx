import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jop2_w7kd.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/j69xirswq.css';
import '../../css/y/yrgiqhxka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jop2_w7kd wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="j69xirswq wm-k"/><path class="wm-a yrgiqhxka"/></g>`,
		"fallback": "withicons:workflow-blueprint",
	});
}

export default Component;
