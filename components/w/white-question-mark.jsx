import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/d/dhvd6rb6w.css';
import '../../css/b/bq1amebxd.css';
import '../../css/t/t7-2ivlka.css';
import '../../css/h/hlcf544tq.css';
import '../../css/h/hd0jj3vdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGdceiMHPR" cx="84.8" cy="55.2" r="105.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="dhvd6rb6w"/><stop offset="1" class="dhvd6rb6w"/></radialGradient></defs><path class="bq1amebxd"/><path fill="url(#SVGdceiMHPR)" transform="matrix(2.7 0 0 2.7 -12.427 -6.257)" class="t7-2ivlka"/><path class="hlcf544tq"/><path class="hd0jj3vdp"/>`,
		"fallback": "xero-emoji:white-question-mark",
	});
}

export default Component;
