import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/q/qy7eez15j.css';
import '../../css/m/mz-sgwb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="yruzez1gq"/><path class="eog0g2beg"/></g><path class="qy7eez15j"/><path class="mz-sgwb5c"/></g>`,
		"fallback": "solar:widget-bold-duotone",
	});
}

export default Component;
