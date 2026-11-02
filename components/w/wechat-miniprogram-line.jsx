import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5qow_bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5qow_bib"/>`,
		"fallback": "mingcute:wechat-miniprogram-line",
	});
}

export default Component;
