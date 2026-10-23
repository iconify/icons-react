import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pdh1to_cg.css';
import '../../css/z/zwxr7_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pdh1to_cg"/><path class="zwxr7_b_c"/></g>`,
		"fallback": "vadivam:weight",
	});
}

export default Component;
