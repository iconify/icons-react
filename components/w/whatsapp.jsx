import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d36_15eag.css';
import '../../css/o/ohl_j-ycf.css';
import '../../css/m/mki2icj0a.css';
import '../../css/s/sc312nbvu.css';
import '../../css/x/xz8wodbve.css';
import '../../css/t/tl9pbpbcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d36_15eag"/><path class="ohl_j-ycf"/><linearGradient id="SVGaFGSDcUZ" x1="254.7" x2="256.8" y1="67.8" y2="426.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="mki2icj0a"/><stop offset="1" class="sc312nbvu"/></linearGradient><path fill="url(#SVGaFGSDcUZ)" class="xz8wodbve"/><path class="tl9pbpbcc"/>`,
		"fallback": "selfhst:whatsapp",
	});
}

export default Component;
