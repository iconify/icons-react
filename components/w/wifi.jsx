import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rflr_fbsc.css';
import '../../css/y/ybbiibqjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGM7szKdIp" x1="9" x2="15" y1="4.77" y2="20.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGM7szKdIp)" class="rflr_fbsc"/><path class="wm-shine ybbiibqjf"/></g>`,
		"fallback": "withicons-utsav:wifi",
	});
}

export default Component;
