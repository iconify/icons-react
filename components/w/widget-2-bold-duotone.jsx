import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy7eez15j.css';
import '../../css/b/bfgw4mtwe.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/czjpdqrfy.css';
import '../../css/m/mz-sgwb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qy7eez15j"/><path class="bfgw4mtwe"/><g class="mc2zb0bvp"><path class="czjpdqrfy"/><path class="mz-sgwb5c"/></g></g>`,
		"fallback": "solar:widget-2-bold-duotone",
	});
}

export default Component;
