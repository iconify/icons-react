import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0iwd3jij.css';
import '../../css/v/vi2snt3cv.css';
import '../../css/w/w_ud-leuq.css';
import '../../css/u/uw3mel2bt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG02sCvb3H" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="z0iwd3jij"/><stop offset=".371" class="vi2snt3cv"/><stop offset="1" class="w_ud-leuq"/></linearGradient><path fill="url(#SVG02sCvb3H)" class="uw3mel2bt"/>`,
		"fallback": "selfhst:wekan",
	});
}

export default Component;
