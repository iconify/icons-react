import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/s/skuty4bhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGrRcUkbyb" x1="111.475" x2="113.525" y1="535.995" y2="535.995" gradientTransform="rotate(135 13750.543 72930.855)scale(-249.7442 249.7442)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGrRcUkbyb)" class="skuty4bhr"/>`,
		"fallback": "selfhst:zensical-light",
	});
}

export default Component;
