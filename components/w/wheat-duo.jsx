import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2tqehbwh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y601nmi0f.css';
import '../../css/m/m8az90igz.css';
import '../../css/l/lpm9dbfqo.css';
import '../../css/k/kry-h6b7m.css';
import '../../css/n/n7ma6hbyv.css';
import '../../css/r/rfcxfqr8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z2tqehbwh"/><g class="dt0cm9dhy primary"><path class="y601nmi0f"/><path class="m8az90igz"/><path class="lpm9dbfqo"/><path class="kry-h6b7m"/><path class="n7ma6hbyv"/><path class="rfcxfqr8p"/></g>`,
		"fallback": "iconaut:wheat-duo",
	});
}

export default Component;
