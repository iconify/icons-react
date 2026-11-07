import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdrg8fy2c.css';
import '../../css/d/dij3yubmk.css';
import '../../css/d/djqs5cxtc.css';
import '../../css/s/silmxcb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdrg8fy2c"/><path class="dij3yubmk"/><path class="djqs5cxtc"/><path class="silmxcb_x"/></g>`,
		"fallback": "solar:widget-2-line-duotone",
	});
}

export default Component;
