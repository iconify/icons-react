import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jd2h2j06p.css';
import '../../css/h/hz-zx75ja.css';
import '../../css/n/nw4278f5v.css';
import '../../css/o/oo7ooibyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jd2h2j06p"/><path class="hz-zx75ja"/><path class="nw4278f5v"/><path class="oo7ooibyv"/></g>`,
		"fallback": "hugeicons:yoga-01",
	});
}

export default Component;
