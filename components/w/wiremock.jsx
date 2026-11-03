import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/br5degbtq.css';
import '../../css/z/zuoyr6bmv.css';
import '../../css/a/aliox97ep.css';
import '../../css/t/t8vmfzbel.css';
import '../../css/s/skpptobss.css';
import '../../css/w/wnghhcbax.css';
import '../../css/v/v-erp-5cu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="br5degbtq"/><path class="zuoyr6bmv"/><path class="aliox97ep"/><path class="t8vmfzbel"/><path class="skpptobss"/><path class="wnghhcbax"/><path class="v-erp-5cu"/></g>`,
		"fallback": "thesvg-color:wiremock",
	});
}

export default Component;
