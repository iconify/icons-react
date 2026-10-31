import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/go6tlxb2f.css';
import '../../css/u/ug3efobdi.css';
import '../../css/z/z0ea2027p.css';
import '../../css/t/thmh89bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGY4bq8b7O" x1="0" x2="0" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGpdCP6nPf" x1="2.5" x2="21.49" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGY4bq8b7O)" stroke="url(#SVGpdCP6nPf)" class="go6tlxb2f wm-k"/><path fill="url(#SVGpdCP6nPf)" class="ug3efobdi wm-a"/><path class="wm-shine z0ea2027p"/><path class="thmh89bug wm-shine"/></g>`,
		"fallback": "withicons-lunar:zoom-out",
	});
}

export default Component;
