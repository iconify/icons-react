import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxzwvgijh.css';
import '../../css/u/u_cheqw4b.css';
import '../../css/p/pz7pxbbrl.css';
import '../../css/y/ylc_z_bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxzwvgijh"/><path class="u_cheqw4b"/><path class="pz7pxbbrl"/><path class="ylc_z_bxh"/></g>`,
		"fallback": "streamline-ultimate-color:youtube-clip-logo",
	});
}

export default Component;
