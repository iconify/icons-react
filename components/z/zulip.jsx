import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8z4pn8gg.css';
import '../../css/e/ep_fppbyz.css';
import '../../css/s/s-blenb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGzHMCDb0y" x1="-49.204" x2="-49.204" y1="653.298" y2="652.538" gradientTransform="matrix(603.91998 0 0 -673.14001 29971.35 439761.28)" gradientUnits="userSpaceOnUse"><stop offset="0" class="x8z4pn8gg"/><stop offset="1" class="ep_fppbyz"/></linearGradient><path fill="url(#SVGzHMCDb0y)" class="s-blenb1j"/>`,
		"fallback": "selfhst:zulip",
	});
}

export default Component;
