import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4xf1bb5l.css';
import '../../css/r/r8hexeb-r.css';
import '../../css/c/cdedgs6la.css';
import '../../css/a/a0p8v79-c.css';
import '../../css/p/pox_jy--p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4xf1bb5l"/><path class="r8hexeb-r"/><circle class="cdedgs6la"/><path class="a0p8v79-c"/><path class="pox_jy--p"/>`,
		"fallback": "fxemoji:wheelchairsymbol",
	});
}

export default Component;
