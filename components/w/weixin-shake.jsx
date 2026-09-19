import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wau8bobcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wau8bobcw"/>`,
		"fallback": "icon-park-outline:weixin-shake",
	});
}

export default Component;
