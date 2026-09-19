import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-5vq3pro.css';
import '../../css/u/uux6gsifn.css';
import '../../css/m/mmmfk1bjn.css';
import '../../css/j/jbgmfwu5d.css';
import '../../css/k/kd5oxwbto.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/b/buyxufymf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-5vq3pro"/><path class="uux6gsifn"/><path class="mmmfk1bjn"/><path class="jbgmfwu5d"/><path class="kd5oxwbto"/><path class="ltsbsuq_l"/><path class="buyxufymf"/></g>`,
		"fallback": "fluent-emoji-flat:yen-banknote",
	});
}

export default Component;
