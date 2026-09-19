import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iutm0rqkj.css';
import '../../css/b/bxz985ukn.css';
import '../../css/r/ryo6rdbxe.css';
import '../../css/i/i6ox2xbqs.css';
import '../../css/k/k2bp1ub7p.css';
import '../../css/y/y4ym0cbuu.css';
import '../../css/n/n1k-foyde.css';
import '../../css/n/n4zz_2j4n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGnkcoednH" x1="7.621" x2="61.248" y1="64.719" y2="39.856" gradientTransform="translate(0 46.84)scale(.43864)" gradientUnits="userSpaceOnUse"><stop offset=".22" class="iutm0rqkj"/><stop offset=".59" class="bxz985ukn"/></linearGradient><linearGradient id="SVGmWOGYbGE" x1="60.019" x2="1.313" y1="59.778" y2="1.073" gradientTransform="translate(0 46.84)scale(.43864)" gradientUnits="userSpaceOnUse"><stop offset=".19" class="bxz985ukn"/><stop offset=".83" class="ryo6rdbxe"/></linearGradient></defs><path class="i6ox2xbqs"/><path fill="url(#SVGnkcoednH)" transform="translate(.004 -213.564)scale(4.55938)" class="k2bp1ub7p"/><path fill="url(#SVGmWOGYbGE)" transform="translate(.004 -213.564)scale(4.55938)" class="y4ym0cbuu"/><path class="n1k-foyde"/><path class="n4zz_2j4n"/>`,
		"fallback": "devicon:webstorm",
	});
}

export default Component;
