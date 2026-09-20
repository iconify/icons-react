import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_bnfbfv.css';
import '../../css/q/q5r6g9iuq.css';

const viewBox = {"width":1000,"height":684.206};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw_bnfbfv"/><path class="q5r6g9iuq"/>`,
		"fallback": "thesvg-color:whole-foods-market",
	});
}

export default Component;
