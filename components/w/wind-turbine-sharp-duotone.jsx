import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e3r7v46by.css';
import '../../css/l/lsal2z6ms.css';
import '../../css/b/b19wae8jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e3r7v46by"/><path class="lsal2z6ms"/><path class="b19wae8jl"/></g>`,
		"fallback": "keyline-icons:wind-turbine-sharp-duotone",
	});
}

export default Component;
