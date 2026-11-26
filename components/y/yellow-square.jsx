import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvc_x47if.css';
import '../../css/n/nrpon72cn.css';
import '../../css/x/xht9v2b6m.css';
import '../../css/u/uh-vabbch.css';
import '../../css/t/tmf-gvlsy.css';
import '../../css/z/zjr7pabxr.css';
import '../../css/y/y-_uuuecm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGYeb8Jbrg" cx="64.1" cy="53.4" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="vvc_x47if"/><stop offset=".85" class="nrpon72cn"/><stop offset="1" class="nrpon72cn"/></radialGradient></defs><path class="xht9v2b6m"/><path fill="url(#SVGYeb8Jbrg)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="uh-vabbch"/><path class="tmf-gvlsy"/><path class="zjr7pabxr"/><path class="y-_uuuecm"/>`,
		"fallback": "xero-emoji:yellow-square",
	});
}

export default Component;
