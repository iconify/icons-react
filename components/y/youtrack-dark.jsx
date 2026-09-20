import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sll_zg-uo.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/y/yq54hro4p.css';
import '../../css/c/ce2ty7muy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGu18S9bqk" x1="63.421" x2="420.477" y1="462.954" y2="105.897" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGu18S9bqk)" class="yq54hro4p"/><path class="ce2ty7muy"/>`,
		"fallback": "selfhst:youtrack-dark",
	});
}

export default Component;
