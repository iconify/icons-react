import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zbqrs_s9f.css';
import '../../css/a/acepfybqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zbqrs_s9f"/><path class="acepfybqq"/></g>`,
		"fallback": "streamline-logos:youtube-gaming-logo-3",
	});
}

export default Component;
