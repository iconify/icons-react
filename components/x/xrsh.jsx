import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0te-vbrc.css';
import '../../css/s/sjb59pbhp.css';
import '../../css/n/n0gdaxbku.css';
import '../../css/x/xah9mvbce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0te-vbrc"/><linearGradient id="SVGuYJsXc4w" x1="-788.365" x2="-628.6" y1="300.645" y2="300.645" gradientTransform="matrix(2.8346 0 0 -2.8346 2264.27 1108.21)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sjb59pbhp"/><stop offset="1" class="n0gdaxbku"/></linearGradient><path fill="url(#SVGuYJsXc4w)" class="xah9mvbce"/>`,
		"fallback": "selfhst:xrsh",
	});
}

export default Component;
