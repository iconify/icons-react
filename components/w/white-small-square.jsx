import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/umg9mabsh.css';
import '../../css/p/p89spcbxn.css';
import '../../css/c/cnjmpob5b.css';
import '../../css/v/v0w8swbtc.css';
import '../../css/c/cvrcvob3i.css';
import '../../css/a/aof1lbhol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGk8dSCbwd" cx="46.1" cy="38.4" r="102.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="umg9mabsh"/><stop offset="1" class="umg9mabsh"/></radialGradient></defs><path class="p89spcbxn"/><path fill="url(#SVGk8dSCbwd)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="cnjmpob5b"/><path class="v0w8swbtc"/><path class="cvrcvob3i"/><path class="aof1lbhol"/>`,
		"fallback": "xero-emoji:white-small-square",
	});
}

export default Component;
