import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg5ptdx_f.css';
import '../../css/h/hclia1bkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="qg5ptdx_f"/><path class="hclia1bkf"/>`,
		"fallback": "thesvg-color:yamtrack-dark",
	});
}

export default Component;
