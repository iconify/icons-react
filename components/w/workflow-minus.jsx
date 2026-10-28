import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9jyti_aq.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/v/v8kwujb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9jyti_aq"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><path class="v8kwujb2v"/></g>`,
		"fallback": "andrsrxn:workflow-minus",
	});
}

export default Component;
