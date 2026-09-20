import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iq62dem-e.css';
import '../../css/r/r_s164jdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="iq62dem-e"/><path class="r_s164jdj"/></g>`,
		"fallback": "keyline-icons:wind-turbine-sharp-two-tone",
	});
}

export default Component;
