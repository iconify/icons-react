import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u4p09bc9p.css';
import '../../css/e/ei94xd8sl.css';
import '../../css/x/xtsz61bsn.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u4p09bc9p wm-shadow"/><path class="ei94xd8sl wm-shadow"/><path class="xtsz61bsn"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:wifi-off",
	});
}

export default Component;
