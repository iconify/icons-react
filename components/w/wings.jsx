import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/slh1_wb1o.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/x/xd_s4q3ie.css';
import '../../css/j/ja7me1bvv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="slh1_wb1o"/><g class="l5y23ru5w"><path class="xd_s4q3ie"/><path class="ja7me1bvv"/></g></g>`,
		"fallback": "cryptocurrency:wings",
	});
}

export default Component;
