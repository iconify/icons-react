import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lvgzmebcf.css';
import '../../css/v/vy-nx7bhq.css';
import '../../css/s/skqfcdqhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lvgzmebcf"/><path class="vy-nx7bhq"/><path class="skqfcdqhg"/></g>`,
		"fallback": "keyline-icons:zap-sparkles-sharp-duotone",
	});
}

export default Component;
