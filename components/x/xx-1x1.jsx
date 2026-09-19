import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb76bo8sb.css';
import '../../css/w/wvlg02bvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb76bo8sb"/><path class="wvlg02bvg"/>`,
		"fallback": "flag:xx-1x1",
	});
}

export default Component;
