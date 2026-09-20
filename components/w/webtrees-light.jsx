import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/m/mb56g9bey.css';
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
		"content": `<linearGradient id="SVGlRHhQcRx" x1="0" x2="512" y1="255.95" y2="255.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".072" class="mb56g9bey"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGlRHhQcRx)" class="jycchebqi"/>`,
		"fallback": "selfhst:webtrees-light",
	});
}

export default Component;
