import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmvuycbnv.css';
import '../../css/o/o5qevobsp.css';
import '../../css/b/badrgubuy.css';
import '../../css/w/wwo15zgqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmvuycbnv"/><path class="o5qevobsp"/><path class="badrgubuy"/><path class="wwo15zgqz"/>`,
		"fallback": "token:xdata",
	});
}

export default Component;
