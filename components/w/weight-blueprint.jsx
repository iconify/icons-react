import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z-8jtj9vd.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/lqm3yub_u.css';
import '../../css/j/jfru2eb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z-8jtj9vd"/><path class="cf3uzcrzx wm-deco"/><path class="lqm3yub_u wm-k"/><path class="jfru2eb2v wm-a"/></g>`,
		"fallback": "withicons:weight-blueprint",
	});
}

export default Component;
