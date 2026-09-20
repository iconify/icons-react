import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s21mohbyz.css';
import '../../css/a/acepfybqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="s21mohbyz"/><path class="acepfybqq"/></g>`,
		"fallback": "streamline-logos:youtube-gaming-logo-1",
	});
}

export default Component;
