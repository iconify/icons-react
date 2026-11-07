import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bwdd5rb7e.css';
import '../../css/d/d_-sftbvq.css';
import '../../css/e/evib1nbfc.css';
import '../../css/i/iurcs7brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bwdd5rb7e"/><path class="d_-sftbvq"/><path class="evib1nbfc"/><path class="iurcs7brt"/></g>`,
		"fallback": "solar:widget-3-broken",
	});
}

export default Component;
