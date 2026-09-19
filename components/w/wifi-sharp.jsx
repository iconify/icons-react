import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2nvqgbuj.css';
import '../../css/x/xadjgxb-b.css';
import '../../css/c/cni6_d2wb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2nvqgbuj"/><path class="xadjgxb-b"/><path class="cni6_d2wb"/>`,
		"fallback": "famicons:wifi-sharp",
	});
}

export default Component;
