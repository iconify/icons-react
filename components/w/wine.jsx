import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m2hbyxbal.css';
import '../../css/a/armsbbkol.css';
import '../../css/o/opi96xvus.css';
import '../../css/u/uxsptjbvt.css';
import '../../css/t/tgsx53bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m2hbyxbal"/><path class="armsbbkol wm-shine"/><path class="opi96xvus wm-k"/><path class="uxsptjbvt wm-a"/><path class="tgsx53bsj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wine",
	});
}

export default Component;
