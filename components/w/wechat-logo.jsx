import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d_jp5ksef.css';
import '../../css/w/wf1d83bdz.css';
import '../../css/t/t6zz7tbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="d_jp5ksef"/><path class="wf1d83bdz"/><path class="t6zz7tbev"/></g>`,
		"fallback": "streamline-logos:wechat-logo",
	});
}

export default Component;
