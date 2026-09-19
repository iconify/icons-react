import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbk62sb0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbk62sb0n"/>`,
		"fallback": "icon-park-solid:weixin-scan",
	});
}

export default Component;
