import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy81sn_wu.css';
import '../../css/f/fmwemwbtd.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/j/jycchebqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGLmSYH5kS" x1="54.224" x2="-41.962" y1="526.668" y2="555.706" gradientTransform="translate(106.152 -428.19)scale(1.3184)" gradientUnits="userSpaceOnUse"><stop offset="0" class="uy81sn_wu"/><stop offset=".596" class="fmwemwbtd"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGLmSYH5kS)" class="jycchebqi"/>`,
		"fallback": "selfhst:webtrees",
	});
}

export default Component;
