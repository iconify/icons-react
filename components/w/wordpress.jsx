import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkn-xcc_r.css';
import '../../css/n/nod8y87lz.css';
import '../../css/v/v3xj24_6m.css';
import '../../css/m/mwmj-lbpq.css';
import '../../css/f/fnvdoxl6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkn-xcc_r"/><path class="nod8y87lz"/><path class="v3xj24_6m"/><path class="mwmj-lbpq"/><path class="fnvdoxl6g"/>`,
		"fallback": "uim:wordpress",
	});
}

export default Component;
