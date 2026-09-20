import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaxym5bbg.css';
import '../../css/j/jc749p_jn.css';
import '../../css/a/ad7t_kw6c.css';
import '../../css/i/i2b6htb0u.css';
import '../../css/e/esob1cb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG23QkkbcV" x1="256" x2="256" y1="0" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="eaxym5bbg"/><stop offset="1" class="jc749p_jn"/></linearGradient><path fill="url(#SVG23QkkbcV)" class="ad7t_kw6c"/><path class="i2b6htb0u"/><path class="esob1cb5m"/>`,
		"fallback": "selfhst:yacreaderlibrary",
	});
}

export default Component;
