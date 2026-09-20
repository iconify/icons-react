import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cihr55ejt.css';
import '../../css/s/sdb9eeb1p.css';
import '../../css/b/bkpaj_wfp.css';
import '../../css/p/pf95emypg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cihr55ejt"/><path class="sdb9eeb1p"/><path class="bkpaj_wfp"/><path class="pf95emypg"/></g>`,
		"fallback": "solar:wheel-angle-linear",
	});
}

export default Component;
