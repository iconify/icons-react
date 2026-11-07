import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rkgpse_-a.css';
import '../../css/d/dij3yubmk.css';
import '../../css/b/bwdd5rb7e.css';
import '../../css/d/d_-sftbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rkgpse_-a"/><path class="dij3yubmk"/><path class="bwdd5rb7e"/><path class="d_-sftbvq"/></g>`,
		"fallback": "solar:widget-3-line-duotone",
	});
}

export default Component;
