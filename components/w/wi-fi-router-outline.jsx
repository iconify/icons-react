import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au9-7pbmo.css';
import '../../css/v/vc6ezsbki.css';
import '../../css/g/gsfbt7paz.css';
import '../../css/g/gxrnsgblk.css';
import '../../css/m/milj-vmhp.css';
import '../../css/s/slp8wtulf.css';
import '../../css/l/lnerkzh3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="au9-7pbmo"/><path class="vc6ezsbki"/><path class="gsfbt7paz"/><path class="gxrnsgblk"/><path clip-rule="evenodd" class="milj-vmhp"/><path class="slp8wtulf"/><path class="lnerkzh3j"/></g>`,
		"fallback": "solar:wi-fi-router-outline",
	});
}

export default Component;
