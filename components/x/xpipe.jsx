import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/w8hs8e66i.css';
import '../../css/x/xgg6atbdr.css';
import '../../css/d/d8cim7bwh.css';
import '../../css/k/k4mnzlb_s.css';
import '../../css/g/gk8xwbclx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGvYfjRbZf" cx="-265.863" cy="458.317" r="206" gradientTransform="matrix(1.7339 -1.7906 2.0518 1.987 -205.896 -1110.676)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="w8hs8e66i"/></radialGradient><path fill="url(#SVGvYfjRbZf)" class="xgg6atbdr"/><path class="d8cim7bwh"/><path class="k4mnzlb_s"/><path class="gk8xwbclx"/>`,
		"fallback": "selfhst:xpipe",
	});
}

export default Component;
