import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anq7hkbmj.css';
import '../../css/m/m8j__wbqr.css';
import '../../css/s/siaxennbq.css';
import '../../css/s/sznabrb3n.css';
import '../../css/f/fj37pqa9d.css';
import '../../css/f/frp-c5bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anq7hkbmj"/><path class="m8j__wbqr"/><path class="siaxennbq"/><path class="sznabrb3n"/><path class="fj37pqa9d"/><path class="frp-c5bnb"/></g>`,
		"fallback": "streamline-ultimate-color:wifi-laptop",
	});
}

export default Component;
