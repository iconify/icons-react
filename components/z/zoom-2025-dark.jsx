import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_7v919ts.css';
import '../../css/k/kcaaivr8d.css';
import '../../css/d/d048q5y4w.css';
import '../../css/n/nfvofkbbc.css';
import '../../css/u/uyqfu3n8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGrNnxWdxO" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-60 88.792 30.85)scale(109.282)" gradientUnits="userSpaceOnUse"><stop offset="0" class="a_7v919ts"/><stop offset=".6" class="kcaaivr8d"/><stop offset="1" class="d048q5y4w"/></linearGradient></defs><path fill="url(#SVGrNnxWdxO)" transform="matrix(6.4 0 0 6.4 -32 -32)" class="nfvofkbbc"/><path class="uyqfu3n8u"/>`,
		"fallback": "thesvg-color:zoom-2025-dark",
	});
}

export default Component;
