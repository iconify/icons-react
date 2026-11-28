import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/li_o3ab2d.css';
import '../../css/k/kmowqpr5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="li_o3ab2d"/><path class="kmowqpr5y"/></g>`,
		"fallback": "iconaut:zodiac-libra-duo",
	});
}

export default Component;
