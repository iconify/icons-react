import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/e/e_tokccvb.css';
import '../../css/a/a9thqaciu.css';
import '../../css/b/blhoclg4v.css';
import '../../css/w/wnncpz6rd.css';
import '../../css/m/m58gqmb0p.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="e_tokccvb"/><path class="a9thqaciu"/><path class="blhoclg4v"/><path class="wnncpz6rd"/><path class="m58gqmb0p"/><path class="zj2p4py0y"/></g>`,
		"fallback": "solar:wi-fi-off-linear",
	});
}

export default Component;
