import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/y/yq54hro4p.css';
import '../../css/k/k6lhmhbkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG3CbOXHuZ" x1="63.4" x2="420.5" y1="463" y2="105.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVG3CbOXHuZ)" class="yq54hro4p"/><path class="k6lhmhbkj"/>`,
		"fallback": "selfhst:youtrack-light",
	});
}

export default Component;
