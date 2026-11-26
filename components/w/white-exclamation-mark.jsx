import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/d/dhvd6rb6w.css';
import '../../css/n/nng8k44hw.css';
import '../../css/y/ytp-e7bdz.css';
import '../../css/c/cgwf6__je.css';
import '../../css/b/b39f13kst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGIqRqGivY" cx="101.2" cy="56" r="102.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="dhvd6rb6w"/><stop offset="1" class="dhvd6rb6w"/></radialGradient></defs><path class="nng8k44hw"/><path fill="url(#SVGIqRqGivY)" transform="matrix(2.7 0 0 2.7 -18.389 -11.519)" class="ytp-e7bdz"/><path class="cgwf6__je"/><path class="b39f13kst"/>`,
		"fallback": "xero-emoji:white-exclamation-mark",
	});
}

export default Component;
